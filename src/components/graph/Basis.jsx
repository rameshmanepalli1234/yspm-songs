import React, {useEffect} from "react";
import { Chart } from 'chart.js/auto';


const Basis = () => {
    useEffect(()=>{
        const ctx = document.getElementById('basis');

        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    label: 'X',
                    backgroundColor: 'blue',
                    data: [10, 20, 15],
                    borderColor: 'red',
                    fill: true,
                    pointRadius: 8
                },
                {
                    label: 'Y',
                    backgroundColor: 'orange',
                    data: [20, 30, 10],
                    borderColor: 'purple',
                    fill: true,
                    pointRadius: 8
                }
            ]
        }

        const configuration = {
            type: 'line',
            data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {  // Added labels configuration
                            usePointStyle: true,
                            pointStyle: 'rectRounded',
                            boxWidth: 12,
                            padding: 25,
                            font: {
                                size: 13,
                                family: 'Rubik',
                                weight: 400,
                                style: 'normal'
                            },
                            color: 'red'
                        }
                    }
                },

                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: false,
                            drawTicks: false
                        },
                        ticks: {
                            font: {
                                size: 13,
                                family: 'Rubik',
                                weight: 400,
                                style: 'normal'
                            },
                            color: '#6B7386',
                            lineHeight: 18
                        },
                        border: {
                            color: 'blue'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        stacked: true,
                        border: {
                            display: false,
                            color: 'yellow'
                        },
                        title: {
                            display: true,
                            text: 'Analysis',
                            padding: 2,
                            count: 10,
                            font: {
                                size: 13,
                                weight: 400,
                                family: 'Rubik',
                                style: 'normal'
                            },
                            color: 'green'
                        },
                        grid: {
                            drawTicks: false,
                            color: 'orange'
                        },
                        ticks: {
                            font: {
                                size: 12,
                                family: 'Rubik',
                                weight: 400,
                                style: 'normal'
                            },
                            precision: 0,
                            color: 'purple',
                            lineHeight: 18,
                            padding: 10,
                            callback: function (value) {
                                return `${value}k`;
                            },
                        },
                    },
                },
            }
        };

        const basis = new Chart(ctx, configuration);

        return () => {
            basis.destroy();
        }
    },[])


    return (
        <div>
            <canvas id='basis' height='400' width='100%'></canvas>
        </div>
    )
}

export default Basis;