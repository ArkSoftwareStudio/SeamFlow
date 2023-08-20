import { XMarkIcon, MinusIcon } from '@heroicons/react/24/outline';

export const TitleHeader = () => {
    return (
        <div className="h-8 titleBar w-screen absolute bg-transparent flex flex-row-reverse"
        >
            <button className="bg-transparent focus:ring-0 outline-0 active:ring-0 active:bg-red-600 hover:bg-red-500 rounded-tr-lg p-1 h-full w-8"
                onClick={() => { window.appSettings.closeApp(); }}>
                <XMarkIcon className='text-white' />
            </button>
            <button className="bg-transparent focus:ring-0 outline-0 active:backdrop-brightness-[1.2] hover:backdrop-brightness-150 mr-1 p-1 h-full w-8"
                onClick={() => { window.appSettings.minimizeApp(); }}>
                <MinusIcon className='text-white' />
            </button>
        </div>
    )
}