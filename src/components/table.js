import data from "@/data/transaction.json";
import {useTranslations} from 'next-intl';

export default function TransactionTable() {
    const t = useTranslations()
    return (
        <div className="w-full border border-gray-200 rounded-xl bg-white overflow-hidden p-2 border-collapse shadow-md">
            <h1 className="font-bold text-xl p-2">{t('transactionssummary')}</h1>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="text-gray-700">
                        <tr>
                            <th className="py-3 px-4 text-left">ID</th>
                            <th className="py-3 px-4 text-left">Date</th>
                            <th className="py-3 px-4 text-left">Amount</th>
                            <th className="py-3 px-4 text-left">Currency</th>
                            <th className="py-3 px-4 text-left">Type</th>
                            <th className="py-3 px-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.transaction.map((txn) => (
                        <tr key={txn.id} className="border-t border-gray-200 hover:bg-gray-50 transition">
                            <td className="py-3 px-4 font-medium">{txn.id}</td>
                            <td className="py-3 px-4 whitespace-nowrap">{txn.date}</td>
                            <td className="py-3 px-4">${txn.amount.toFixed(2)}</td>
                            <td className="py-3 px-4">{txn.currency}</td>
                            <td className="py-3 px-4 capitalize">{txn.type}</td>
                            <td className={`py-3 px-4 font-semibold ${txn.status === "completed" ? "text-green-600 bg-green-50" : txn.status === "pending" ? "text-yellow-500 bg-yellow-50" : "text-red-600 bg-red-50"}`}>{txn.status}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  );
}
