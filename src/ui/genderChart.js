import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {useTranslations} from 'next-intl';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Male', 'Female'],
    datasets: [
    {
        label: 'Users',
        data: [16, 8],
        backgroundColor: [
            '#6D7BC7',
            '#5ABAB1',
        ],
        borderColor: [
            '#ffffff',
            '#ffffff',
        ],
        borderWidth: 4,
    },
    ],
};

export function GenderChart() {
    const t = useTranslations()
    return(
        <div className='bg-white rounded-xl border-collapse shadow-md'>
            <h1 className='font-bold text-xl text-gray-700 text-center py-2'>{t('gender')}</h1>
            <Pie data={data} />
        </div>
    );
}
