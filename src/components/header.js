"use client";
import { useVisibility } from "@/hooks/useVisibility";
import LangButton from "@/ui/langButton";
import Image from "next/image";
import picture from "@/assets/images/picture.jpg";
import {useTranslations} from 'next-intl';
import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function Header() {
    const { hidden, setHidden } = useVisibility();
    const t = useTranslations()
    const [open, setOpen] = useState(false)
    const locale = useLocale();
    return(
        <header className="z-3 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between px-5 py-4">
                <div className="flex">
                    <button onClick={() => setHidden(!hidden)} className="flex items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-2 border bg-transparent cursor-pointer">
                        <i className="fa-light fa-bars"></i>
                    </button>
                    <h1 className="hidden md:block md:text-3xl text-bold px-2">{t('hello')} Manager</h1>
                </div>
                <div className="flex items-center">
                    <LangButton />
                    <Image src={picture} width={50} height={50} alt="Alaa Elgharably" className="rounded-full"></Image>
                    <p className="font-bold px-2">Manager</p>
                    <button className="cursor-pointer" onClick={() => setOpen(!open)}>
                        <i className="fa-light fa-chevron-down"></i>
                    </button>
                    {open && <nav className={`flex flex-col absolute ${locale === "en" ? "right-2" : "left-2" } top-20 bg-white border border-gray-200 rounded-xl p-2`}>
                        <Link href="/dashboard" className="font-bold flex items-center py-2">
                            <i className="fa-light fa-gear-complex"></i>
                            <p className="px-2">{t('menu.settings')}</p>
                        </Link>
                        <Link href="/" className="font-bold flex items-center py-2">
                            <i className="fa-light fa-left-from-bracket"></i>
                            <p className="px-2">{t('menu.logout')}</p>
                        </Link>
                    </nav>}
                </div>
            </div>
        </header>
    );
}