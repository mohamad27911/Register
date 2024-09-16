<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Laravel\Fortify\Fortify;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Laravel\Fortify\Contracts\LoginResponse;
use Laravel\Fortify\Contracts\RegisterResponse;
use Laravel\Fortify\Contracts\LogoutResponse;


class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->instance(LoginResponse::class, new class implements LoginResponse {
            public function toResponse($request)
            {
                return response()->json([
                    'message' => 'Login success',
                    'email' => $request->input('email'),
                ]);
            }
        });

        $this->app->instance(LogoutResponse::class, new class implements LogoutResponse {
            public function toResponse($request)
            {
                // Revoke the current access token if the user is authenticated
                if ($request->user()) {
                    $request->user()->currentAccessToken()->delete(); // Revoke the token
                }

                // Invalidate the session and regenerate CSRF token
                $request->session()->invalidate();
                $request->session()->regenerateToken();

                // Return a JSON response indicating successful logout
                return response()->json([
                    'message' => 'Logged out successfully',
                ], 200);
            }
        });


        $this->app->instance(RegisterResponse::class, new class implements RegisterResponse {
            public function toResponse($request)
            {
                return response()->json([
                    'message' => 'Register succeed',
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                ]);
            }
        });


    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

        // Fortify::registerView(function () {
        //     return view('register'); // This should point to your custom register Blade view.
        // });


        // Fortify::loginView(function () {
        //     return view('login'); // This should point to your custom register Blade view.
        // });


        Fortify::authenticateUsing(function (Request $request) {
            $user = User::where('email', $request->email)->first();

            if ($user &&
                Hash::check($request->password, $user->password)) {
                return $user;
            }
        });

        // Fortify::requestPasswordResetLinkView(function(){
        //     return view('auth.forgot-password');
        // });


        // Fortify::resetPasswordView(function (Request $request) {
        //     return view('auth.reset-password', ['request' => $request]);
        // });

        Fortify::verifyEmailView(function () {
            return view('auth.verify-email');
        });

        RateLimiter::for('login', function (Request $request) {
            $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())).'|'.$request->ip());

            return Limit::perMinute(5)->by($throttleKey);
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });
    }
}
