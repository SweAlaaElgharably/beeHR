export default function Card({icon, text, number}) {
    return(
        <div className="flex bg-white p-2 rounded-xl justify-between items-center border-collapse shadow-md">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-[#fff8f9] text-[#dfb131]">
                <i className={icon}></i>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center font-bold">
                <h1 className="text-gray-700 p-2 text-sm">{text}</h1>
                <p className="text-3xl p-2">{number}</p>
            </div>
        </div>
    );
}