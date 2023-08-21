import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { signUserOut } from "../../firebase";

export const WelcomeBack = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return (

        <div className="h-screen w-screen flex justify-center p-10 ">
            <div className='h-1/2 min-h-fit flex self-center align-center flex-col w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/7 p-5 rounded-lg bg-slate-900/20'>
                <div className='flex justify-center rounded-lg'>
                    <img alt="User" className="rounded-full" src={user.photoURL} />
                </div>
                <div className="h-full mt-10 flex flex-col">
                    <h2 className="font-bold mb-5 text-xl text-white">Welcome Back! {user.displayName} </h2>
                    <div className="w-full self-end mb-2 h-14 flex">
                        <button
                            type="submit"
                            onClick={signUserOut}
                            className="w-full h-12 rounded-md mr-2 bg-slate-900/90 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-900/80"
                        >
                            Log Out
                        </button>
                        <button className="w-14 h-12 mr-2 bg-slate-100 rounded-md p-4 flex-col justify-center align-center">
                            <ArrowRightIcon className="w-full" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}