<script src="https://cdn.tailwindcss.com"></script>

<div class="flex justify-center items-center min-h-screen">
    <div class="w-full max-w-md p-6 bg-white shadow-2xl rounded-xl transform hover:scale-105 transition-transform duration-500">
        <!-- Card Header -->
        <div class="border-b-4 border-red-500 pb-4 mb-6 text-center">
            <h1 class="text-3xl font-bold text-red-600">{{ __('Verify Your Email Address') }}</h1>
        </div>

        <!-- Card Body -->
        <div class="text-center text-gray-700">
            <!-- Success Message -->
            @if (session('status') == 'verification-link-sent')
                <div class="bg-green-100 border-l-4 border-green-500 text-green-700 px-4 py-3 rounded-lg mb-6 animate-pulse">
                    {{ __('A new verification link has been sent to your email address.') }}
                </div>
            @endif

            <p class="text-lg mb-4 font-medium">{{ __('Before proceeding, please check your email for a verification link.') }}</p>
            <p class="text-md text-gray-500">{{ __('If you did not receive the email') }},</p>

            <!-- Resend Email Button -->
            <form class="inline-block mt-6" method="POST" action="{{ route('verification.send') }}">
                @csrf
                <button type="submit" class="bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-300">
                    {{ __('Click here to request another') }}
                </button>
            </form>
        </div>


    </div>
</div>
