"use client";
import { useState } from "react";
import {useTranslations} from 'next-intl';

export default function AnnouncementModal({ onClose }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        audience: "",
        type: ""
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {
        console.log("New Announcement:", form);
        onClose();
    };
    const t = useTranslations();
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 border-collapse shadow-md">
            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{t('addnew')}</h3>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input type="text" name="title" className="w-full border border-[#dfb131] rounded-lg p-2 focus:ring focus:ring-[#dfb131]" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea name="description" className="w-full border border-[#dfb131] rounded-lg p-2 h-24 focus:ring focus:ring focus:ring-[#dfb131]" onChange={handleChange} />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Audience</label>
                <select name="audience" className="w-full border border-[#dfb131] rounded-lg p-2" onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="all">All Employees</option>
                    <option value="hr">HR Team</option>
                    <option value="managers">Managers</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Sending Type</label>
                <select name="type" className="w-full border border-[#dfb131] rounded-lg p-2" onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="immediate">Immediate</option>
                    <option value="scheduled">Scheduled</option>
                </select>
            </div>
            <div className="flex justify-end gap-3">
                <button onClick={onClose} className="cursor-pointer px-4 py-2 rounded-lg border border-[#dfb131]">{t('cancel')}</button>
                <button onClick={handleSubmit} className="cursor-pointer px-4 py-2 bg-[#dfb131] text-white rounded-lg">{t('save')}</button>
            </div>
        </div>
    </div>
  );
}
