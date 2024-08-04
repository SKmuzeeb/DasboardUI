import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './ActivityChart.css';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
    const [filter, setFilter] = useState('weekly');

    const weeklyData = {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23'],
        datasets: [
            {
                label: 'Activity',
                data: [4000, 3000, 5000, 7000, 10000, 12000, 8000, 13000, 15000],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderRadius: 10,
                barThickness: 20,
                categoryPercentage: 1.0,
                barPercentage: 0.2,
            },
        ],
    };

    const monthlyData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Activity',
                data: [20000, 18000, 25000, 30000],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderRadius: 10,
                barThickness: 20,
                categoryPercentage: 1.0,
                barPercentage: 0.2,
            },
        ],
    };

    const data = filter === 'weekly' ? weeklyData : monthlyData;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#fff',
                },
            },
            title: {
                display: true,
                text: 'Activity Chart',
                color: '#fff',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#fff',
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                ticks: {
                    color: '#fff',
                },
            },
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="activity-chart">
            <div className="chart-header">
                <h2>Activity</h2>
                <div className="filter-container">
                    <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
            </div>
            <div className="chart-container">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default ActivityChart;
