"use client";
import { useState } from "react";
import data from "@/data/announcement.json";
import {useTranslations} from 'next-intl';

export default function AnnouncementList() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const t = useTranslations()
    const filterData = data.announcements.filter((ann) => {
        const matchesSearch = ann.title.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "all" || ann.sendingType === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="w-full border border-gray-200 rounded-xl bg-white overflow-hidden p-2 border-collapse shadow-md">
            <div className="flex justify-between items-center flex-wrap">
                <h1 className="font-bold text-xl p-2">{t('announcement')}</h1>
            </div>
            <div className="flex">
                <input type="text" placeholder="Search by title..." value={search} onChange={(e) => setSearch(e.target.value)}
                    className="px-3 py-2 mx-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dfb131]"/>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}
                    className="px-3 py-2 mx-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#dfb131]">
                    <option value="all">All Types</option>
                    <option value="Immediate">Immediate</option>
                    <option value="Scheduled">Scheduled</option>
                </select>
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
                        {filterData.map((ann) => (
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
        </div>
    );
}
      