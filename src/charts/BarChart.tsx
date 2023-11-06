import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DataTypeScore {
  id: string;
  score: number;
}

interface BarChartProps {
  datatypeScores: DataTypeScore[];
  title: string;
}

const getGraphData = (datatypeLabels: string[], scoresData: number[]) => {
  return {
    labels: datatypeLabels,
    datasets: [
      {
        backgroundColor: 'rgb(52, 137, 202)',

        borderWidth: 1,

        data: scoresData,
        barPercentage: 0.6,
      },
    ],
  };
};

const getoptions = (title: string): ChartOptions<'bar'> => {
  return {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Data Type',
        },
        grid: {
          display: false,
          borderColor: 'rgb(94,94,94)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Association Score',
        },
        ticks: {
          stepSize: 0.25,
          callback(tick: string | number) {
            return Number(tick).toFixed(3);
          },
        },
        grid: {
          borderWidth: 2,
          borderColor: 'rgb(255,255,255)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        color: 'rgb(121, 121, 121)',
        text: `Data Type Score:${title} and lung carcinoma`,
        align: 'start',
        padding: {
          top: 10,
          bottom: 30,
        },
        font: {
          weight: 'normal',
        },
      },
    },
  };
};

const datatypeStringFormat = (str: string) => {
  const arr = str.split('_');
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
};

function BarChart({ datatypeScores, title }: BarChartProps) {
  const datatypeLabels: string[] = [];
  const scoresData: number[] = [];
  datatypeScores.forEach((datatypeScore) => {
    datatypeLabels.push(datatypeStringFormat(datatypeScore.id));
    scoresData.push(datatypeScore.score);
  });
  return (
    <Bar
      options={getoptions(title)}
      data={getGraphData(datatypeLabels, scoresData)}
    />
  );
}

export default BarChart;
