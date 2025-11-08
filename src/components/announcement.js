"use client";
import { useState } from "react";
import AnnouncementModal from "./announcementModal";
import Link from "next/link";
import data from "@/data/announcement.json";
import {useTranslations} from 'next-intl';

export default function AnnouncementList() {
    const [open, setOpen] = useState(false);
    const t = useTranslations()
    return (
        <div className="w-full border border-gray-200 rounded-xl bg-white overflow-hidden p-2 border-collapse shadow-md">
            <div className="flex justify-between items-center flex-wrap">
                <h1 className="font-bold text-xl p-2">{t('announcement')}</h1>
                <div className="flex justify-center items-center">
                    <Link href="/dashboard/search" className="px-2 text-sm font-medium text-gray-700 hover:text-[#dfb131]">{t('seeall')}</Link>
                    <button onClick={() => setOpen(true)} className="cursor-pointer px-4 py-2 bg-[#dfb131] text-white text-sm rounded-lg">{t('addnew')}</button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="text-gray-700">
                        <tr>
                            <th className="py-3 px-4 text-left whitespace-nowrap">Title</th>
                            <th className="py-3 px-4 text-left whitespace-nowrap">Description</th>
                            <th className="py-3 px-4 text-left whitespace-nowrap">Audience</th>
                            <th className="py-3 px-4 text-left whitespace-nowrap">Sending Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.announcements.map((ann) => (
                        <tr key={ann.id} className="border-t border-gray-200 hover:bg-gray-50 transition">
                            <td className="py-3 px-4 font-medium">{ann.title}</td>
                            <td className="py-3 px-4 whitespace-nowrap">{ann.description}</td>
                            <td className="py-3 px-4 whitespace-nowrap">{ann.audience}</td>
                            <td className="py-3 px-4 whitespace-nowrap">{ann.sendingType}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {open && <AnnouncementModal onClose={() => setOpen(false)} />}
        </div>
    );
}
      