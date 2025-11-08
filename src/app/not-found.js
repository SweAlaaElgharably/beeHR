import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 text-[#dfb131]">4<span className="text-black">0</span>4</h1>
            <p className="text-5xl sm:text-6xl md:text-8xl text-black-600 mb-5">Page Not Found</p>
            <Link href="/" className="text-xl sm:text-2xl md:text-4xl font-bold text-[#dfb131]">Go Home</Link>

        </div>
    );
}


