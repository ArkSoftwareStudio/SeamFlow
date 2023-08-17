import { XMarkIcon, MinusIcon } from '@heroicons/react/24/outline';

export const TitleHeader = () => {
    return (
        <div className="h-8 w-screen bg-transparent flex flex-row-reverse" 
        style={{
            webkitAppRegion: "drag",
            WebkitUserSelect: "none"
        }}>
            <button className="bg-transparent hover:bg-red-500 rounded-tr-lg p-1 h-full w-8" style={{ webkitAppRegion: "no-drag" }}>
                <XMarkIcon className='text-white' />
            </button>
            <button className="bg-transparent hover:backdrop-brightness-150 mr-1 p-1 h-full w-8" style={{ webkitAppRegion: "no-drag" }}>
                <MinusIcon className='text-white' />
            </button>
        </div>
    )
}