"use client";
import { useEffect } from "react";
import "@/assets/fontawesome/css/all.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { useVisibility } from "@/hooks/useVisibility";

export default function RootLayout({ children }) {
    useEffect(() => {
        import("@/assets/fontawesome/js/all.js");
    }, []);
    const { hidden } = useVisibility();

    return (
        <div className="flex">
            <Sidebar />
            <div className={`flex-1 ${hidden ? "ms-[72px]" : "ms-[203px]"} overflow-hidden`}>
                <Header />
                {children}
            </div>
        </div>
    );
}
