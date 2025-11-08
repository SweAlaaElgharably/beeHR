import logo from "@/assets/images/logo.png";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <Image src={logo} alt="Bee HR" className="w-80 animate-pulse drop-shadow-lg"></Image>
        </div>
    );
}