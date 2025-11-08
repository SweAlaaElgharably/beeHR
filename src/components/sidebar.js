import logo from "@/assets/images/logo.png";
import icon from "@/assets/images/icon.png";
import MenuItem from "@/ui/menuItem";
import Image from "next/image";
import { useVisibility } from "@/hooks/useVisibility";
import {useTranslations} from 'next-intl';

export default function Sidebar() { 
    const { hidden } = useVisibility();
    const t = useTranslations()
    return(
        <aside className={`fixed flex flex-col min-h-screen text-gray-900 transition-all duration-300 ease-in-out z-4 border-e border-gray-200 ${hidden ? "px-2 items-center w-[72px]" : "px-5 w-[203px]"}`}>
            <div className="py-8 px-4">
                <Image src={logo} alt="Bee HR" loading="eager" width={130} height={35} className={hidden ? "hidden" : ""}></Image>
                <Image src={icon} alt="Bee HR" loading="lazy" width={23} height={35} className={!hidden ? "hidden" : ""}></Image>
            </div>
            <h2 className="py-4">{hidden ? "..." : t('caption')}</h2>
            <nav className="flex flex-col">
                <MenuItem icon="fa-light fa-grid-2" text={t('menu.dashboard')} href="/dashboard" />
                <MenuItem icon="fa-light fa-bullhorn" text={t('menu.announcement')} href="/dashboard/announcement" />
            </nav>
        </aside>
    );
}
