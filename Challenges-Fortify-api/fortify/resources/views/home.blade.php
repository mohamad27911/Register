

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Beautiful Home Page</title>
        <!-- Include Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
    </head>

    <body class="min-h-screen flex flex-col">
        <!-- Navbar -->
        <nav class="bg-white shadow-md py-4">
            <div class="container mx-auto flex justify-between items-center px-4">
                <!-- Logo -->
                <div class="flex items-center">
                    <img src="https://via.placeholder.com/50" alt="Logo" class="h-10 w-10 rounded-full">
                    <span class="text-2xl font-bold text-red-600 ml-3">MyBrand</span>
                </div>

                <!-- Navbar Links for Large Screens -->
                <div class="space-x-6 hidden md:flex">
                    <a href="" class="text-red-600 hover:text-red-900 font-semibold">Home</a>
                    <a href="{{ route('verification.notice') }}" class="text-red-600 hover:text-red-900 font-semibold">Settings</a>
                    @auth
                    <a href="/users" class="text-red-600 hover:text-red-900 font-semibold">Users</a>
                    @endauth
                </div>

                <!-- Conditional Auth Links -->
                <div class="hidden md:block">
                    @auth
                        <!-- Show user's name if logged in -->
                        <span class="text-red-600 font-semibold">Hello, {{ Auth::user()->name }}!</span>
                        <a  class="bg-red-500 cursor-pointer text-white py-2 px-4 rounded hover:bg-red-700 ml-4"
                           onclick="event.preventDefault(); document.getElementById('logout-form').submit(); ">
                            Logout
                        </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    @else
                        <!-- Show login and register buttons if not logged in -->
                        <a href="{{ route('login') }}" class="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800">Login</a>
                        <a href="{{ route('register') }}" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 ml-4">Register</a>
                    @endauth
                </div>
            </div>

            <!-- Mobile Navbar Links (Visible on Small Screens) -->
            <div class="md:hidden">
                <a href="#" class="block text-red-600 hover:bg-purple-100 px-4 py-2">Home</a>
                <a href="#" class="block text-red-600 hover:bg-purple-100 px-4 py-2">About</a>
                <a href="#" class="block text-red-600 hover:bg-purple-100 px-4 py-2">Contact</a>
                @auth
                    <span class="block text-red-600 px-4 py-2">Hello, {{ Auth::user()->name }}!</span>
                    <a href="{{ route('logout') }}" class="block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
                       onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        Logout
                    </a>
                @else
                    <a href="{{ route('login') }}" class="block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-800 mt-2">Login</a>
                    <a href="{{ route('register') }}" class="block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mt-2">Register</a>
                @endauth
            </div>
        </nav>

        <!-- Main Content -->
        <div class="flex-grow container mx-auto text-center mt-10">
            <h1 class="text-5xl font-bold text-red-700">Welcome to My Beautiful Website</h1>
            <p class="mt-4 text-xl text-red-600">Full of life, vibrant colors, and responsiveness!</p>
        </div>

        <!-- Footer -->
        <footer class="bg-white shadow-md py-4 mt-auto">
            <div class="container mx-auto text-center">
                <p class="text-red-600">&copy; 2024 MyBrand. All rights reserved.</p>
            </div>
        </footer>
    </body>

    </html>
