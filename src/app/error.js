"use client";

export default function Error({ error, reset }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 text-[#dfb131]">5<span className="text-black">00</span></h1>
            <p className="text-3xl sm:text-4xl md:text-6xl text-black-600 mb-5">Something went wrong!</p>
            <button className="px-4 py-2 bg-[#dfb131] text-white rounded-md cursor-pointer" onClick={() => reset()}>
                Try Again
            </button>
        </div>
    );
}