"use client";
import { setUserLocale } from "@/hooks/locale";
import { useLocale } from "next-intl";

export default function LangButton() {
    const locale = useLocale();
    const toggleLocale = () => {
        const newLocale = locale === 'en' ? 'ar' : 'en';
        setUserLocale(newLocale);
    };
    return(
        <button onClick={toggleLocale} className="flex items-center justify-center mx-2 px-4 py-2 text-[#dfb131] border-[#dfb131] rounded-lg border bg-transparent cursor-pointer">
            {locale === 'en' ? 'العربية' : 'English'}
        </button>
    );
}