const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen relative font-sans ">
            <div className="w-[90%]  lg:w-[80%] bg-white grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-lg overflow-hidden">

                {/* Register Section */}
                <div className="bg-slate-200 flex flex-col justify-center p-8 lg:p-12">
                    <h1 className="text-2xl font-serif font-semibold text-teal-700 absolute top-7 left-16   ">miracle</h1>

                    <h2 className="text-2xl lg:text-3xl font-semibold mt-16">
                        Welcome to <span className="text-blue-600">miracle</span>
                    </h2>
                    <h3 className="text-xl lg:text-2xl text-gray-700 mb-6">Create your account</h3>

                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-blue-600 w-1/2 text-white py-3 rounded-full hover:bg-blue-700 transition">
                            Create My Account
                        </button>
                    </form>
                </div>

                {/* Login Section */}
                <div className="bg-slate-50 flex flex-col justify-center p-8 lg:p-12 relative">
                   
                    <div className="text-2xl absolute top-0 left-0 font-bold">
                        or

                    </div>                  
                    <h3 className="text-xl lg:text-2xl text-gray-700 mb-6">login</h3>

                    <form className="flex flex-col gap-4">
                       
                        <input
                            type="email"
                            placeholder="Email"
                            className="py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="py-3 px-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-blue-600 text-white py-3 w-1/2 rounded-full hover:bg-blue-700 transition">
login                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
