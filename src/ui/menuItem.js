"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useVisibility } from "@/hooks/useVisibility";

export default function MenuItem({icon, text, href}) {
    const { hidden } = useVisibility();
    const pathname = usePathname();
    const isActive = pathname === href;
    return(
        <Link href={href} className={`${isActive ? "text-[#dfb131]" : ""} font-bold flex items-center py-2`}>
            <i className={icon}></i>
            <p className={`px-2 ${hidden ? "hidden" : ""}`}>{text}</p>
        </Link>
    );
}

