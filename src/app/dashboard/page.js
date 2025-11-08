"use client";
import TransactionsTable from "@/components/table";
import Card from "@/ui/card";
import { GenderChart } from "@/ui/genderChart";
import { LocationChart } from "@/ui/locationChart";
import {useTranslations} from 'next-intl';

export default function Dashboard() {
    const t = useTranslations()
    return(
        <div className="bg-[#f9fafb] p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 py-4">
                <Card icon="fa-light fa-dollar-sign" text={t('totalaum')} number="250000$" />
                <Card icon="fa-light fa-arrows-retweet" text={t('transaction')} number="80" />
                <Card icon="fa-light fa-user" text={t('user')} number="24" />
                <Card icon="fa-light fa-cart-shopping" text={t('product')} number="8" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-4">
                <GenderChart />
                <LocationChart />
            </div>
            <TransactionsTable />
        </div>
    );
}
