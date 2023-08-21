import { useEffect, useState } from "react";
import { signInWithGoogle } from "../../firebase"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { UserIcon } from "@heroicons/react/24/outline";

export const Login = () => {
    const [welcomeMessage, setWelcomeMessage] = useState('');
    useEffect(() => {
        const hour = new Date().getHours();
        if(hour >= 0 && hour < 12) setWelcomeMessage('Good Morning')
        if(hour >= 12 && hour < 18) setWelcomeMessage('Good Afternoon')
        if(hour >= 18 && hour < 23) setWelcomeMessage('Good Evening')
    }, [])


    return (
        <div className="h-screen w-screen flex justify-center p-10 ">
            <div className='h-full shadow-lg ring-1 ring-zinc-900/60 flex align-center flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/7 p-5 rounded-lg bg-slate-900/40'>
                <div className='h-[20%] mb-8 flex justify-center rounded-lg'>
                    <UserIcon className="rounded-full bg-zinc-800/60 p-2 text-white subpixel-antialiased h-32 w-32 "/>
                </div>
                <form className="h-[60%] relative align-center w-full flex flex-col p-2">
                    <h2 className="font-bold text-xl text-white">Hello,     {welcomeMessage}!</h2>
                    <div className="relative shadow-sm mt-8">
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
                    <div className="relative shadow=sm mt-8">
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
                    <div className="mt-10 flex flex-col">
                        <button
                            type="submit"
                            className="w-full shadow-md mt-2 rounded-md bg-green-500/80 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80"
                        >
                            Login
                        </button>
                        <div className="w-full mt-4 justify-center flex">
                            <button
                                type="button"
                                onClick={signInWithGoogle}
                                className="w-48 shadow-md mr-4 self-center rounded-md bg-zinc-900/95 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-zinc-800/90"
                            >
                                <FontAwesomeIcon className="h-4 w-4 text-white" icon={['fab', 'google']} />
                            </button>
                            <button
                                type="button"
                                onClick={signInWithGoogle}
                                className="w-full shadow-md ml-2 self-center rounded-md bg-blue-500/95 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/90"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
                <div className='h-[20%] flex flex-wrap max-w-full justify-center text-center rounded-lg'>
                    <p className="text-md text-white text-wrap">
                        Don't have an account yet? Sign up! <br />
                    </p>
                </div>
            </div>
        </div>
    )
}