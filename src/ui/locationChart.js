import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {useTranslations} from 'next-intl';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const data = {
    labels: ['Cairo', 'Giza', "Damietta", "Other"],
    datasets: [
    {
        label: 'Users',
        data: [10, 4, 2, 8],
        backgroundColor: [
            '#6D7BC7',
            '#5ABAB1',
            '#6D7BC7',
            '#5ABAB1',
        ],
        borderColor: [
            '#ffffff',
            '#ffffff',
            '#ffffff',
            '#ffffff',
        ],
        borderWidth: 2,
    },
    ],
};

export function LocationChart() {
    const t = useTranslations()
    return(
        <div className='bg-white rounded-xl border-collapse shadow-md'>
            <h1 className='font-bold text-xl text-gray-700 text-center py-2'>{t('location')}</h1>
            <Bar data={data} />
        </div>
    );
}



// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };
