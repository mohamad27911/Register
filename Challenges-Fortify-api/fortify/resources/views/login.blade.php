<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-- Include Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="min-h-screen flex items-center justify-center">
    <!-- Login Form Container -->
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 class="text-3xl font-bold text-red-700 text-center mb-6">Login to Your Account</h2>

        <!-- Display validation errors (if any) -->
        {{-- @if ($errors->any())
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif --}}

        <!-- Login Form -->
        <form method="POST" action="{{ route('login') }}">
            @csrf

            <!-- Email Input -->
            <div class="mb-4">
                <label for="email" class="block text-red-700 text-sm font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" value="{{ old('email') }}"  autofocus
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
            </div>

            <!-- Password Input -->
            <div class="mb-6">
                <label for="password" class="block text-red-700 text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" name="password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
            </div>

            <!-- Remember Me Checkbox -->
            <div class="mb-4">
                <label class="inline-flex items-center">
                    <input type="checkbox" name="remember" class="form-checkbox text-red-600">
                    <span class="ml-2 text-gray-700">Remember Me</span>
                </label>
            </div>

            <!-- Submit Button -->
            <div class="flex items-center justify-between">
                <button type="submit" class="bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-red-700">
                    Login
                </button>

                <!-- Forgot Password Link -->
                @if (Route::has('password.request'))
                    <a class="inline-block align-baseline font-bold text-sm text-red-600 hover:text-red-800" href="{{ route('password.request') }}">
                        Forgot Password?
                    </a>
                @endif
            </div>
        </form>

        <!-- Register Link -->
        <div class="text-center mt-4">
            <p class="text-gray-700">Don't have an account?
                <a href="{{ route('register') }}" class="text-red-600 hover:text-red-800 font-bold">Register</a>
            </p>
        </div>
    </div>
</body>

</html>
