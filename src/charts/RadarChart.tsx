import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface DataTypeScore {
  id: string;
  score: number;
}

interface RadarChartProps {
  datatypeScores: DataTypeScore[];
  title: string;
}

const getGraphData = (datatypeLabels: string[], scoresData: number[]) => {
  return {
    labels: datatypeLabels,
    datasets: [
      {
        data: scoresData,
        backgroundColor: 'rgba(255, 255, 255, .2)',
        borderColor: 'rgb(52, 137, 202)',
        pointBackgroundColor: 'rgb(52,137,202)',
      },
    ],
  };
};

const getoptions = (title: string) => {
  return {
    responsive: true,
    beginAtZero: true,
    scales: {
      r: {
        grid: {
          circular: true,
          borderColor: 'rgb(255, 255, 255)',
          lineWidth: 2,
        },
        angleLines: {
          borderColor: 'rgb(255, 255, 255)',
          lineWidth: 2,
        },
        min: -0.1,
        max: 1,
        ticks: {
          stepSize: 0.25,
          callback(tick: number) {
            return tick.toFixed(3);
          },
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

function RadarChart({ datatypeScores, title }: RadarChartProps) {
  const datatypeLabels: string[] = [];
  const scoresData: number[] = [];
  datatypeScores.forEach((datatypeScore) => {
    datatypeLabels.push(datatypeStringFormat(datatypeScore.id));
    scoresData.push(datatypeScore.score);
  });
  return (
    <Radar
      data={getGraphData(datatypeLabels, scoresData)}
      options={getoptions(title)}
    />
  );
}

export default RadarChart;
