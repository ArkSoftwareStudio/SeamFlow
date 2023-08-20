

export const Login = () => {


    return (
        <div className="h-screen w-screen flex justify-center p-10 ">
            <div className='h-full flex align-center flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/7 p-5 rounded-lg bg-slate-900/20'>
                <div className='h-[20%] mb-8 flex justify-center rounded-lg'>
                    <div className="rounded-lg h-32 w-32 bg-white/20"></div>
                </div>
                <form className="h-[60%] relative align-center w-full flex flex-col p-2">
                    <h2 className="font-bold text-xl text-white">Welcome Back!</h2>
                    <div className="relative mt-8">
                        <label
                            htmlFor="username"
                            className="absolute rounded-lg bg-white/80 pr-2 pl-2 -top-2 left-2 inline-block bg-transparent px-1 text-sm font-medium text-black"
                        >
                            Username
                        </label>
                        <input
                            type="email"
                            name="username"
                            id="username"
                            className="block h-14 w-full rounded-md border-0 bg-slate-800/30 py-1.5 text-white shadow-sm placeholder:text-gray-300 focus:ring-1 focus:ring-inset focus:ring-slate-900/30 sm:text-sm sm:leading-6"
                            placeholder="exampleuser@email.com"
                        />
                    </div>
                    <div className="relative mt-8">
                        <label
                            htmlFor="password"
                            className="absolute rounded-lg bg-white/80 pr-2 pl-2 -top-2 left-2 inline-block bg-transparent px-1 text-sm font-medium text-black"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block h-14 w-full rounded-md border-0 bg-slate-800/30 py-1.5 text-white shadow-sm placeholder:text-gray-300 focus:ring-1 focus:ring-inset focus:ring-slate-900/30 sm:text-sm sm:leading-6"
                            placeholder="•••••••••"
                        />
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="w-full rounded-md bg-slate-900/90 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-900/80"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className='h-[20%] flex flex-wrap max-w-full justify-center text-center rounded-lg'>
                    <p className="text-md text-white text-wrap">
                        Don't have an account yet? <br/>
                        <a href="#/" className="text-blue-400">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    )
}