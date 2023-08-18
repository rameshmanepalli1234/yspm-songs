import React, {useEffect} from "react";
import { Chart } from 'chart.js/auto';



const Cost = () => {
    useEffect(()=>{
        const ctx = document.getElementById('cost');

        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    label: 'X',
                    // backgroundColor: 'brown',
                    data: [10, 20, 15],
                    backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
                }
            ]
        }

        const configuration = {
            type: 'pie',
            data,
            options: {
                title: {
                    display: true,
                    text: 'My Pie Chart', // Make sure this is a valid title
                },
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

                // scales: {
                //     // x: {
                //     //     display: false,
                //     //     stacked: true,
                //     //     grid: {
                //     //         display: false,
                //     //         drawTicks: false
                //     //     },
                //     //     ticks: {
                //     //         font: {
                //     //             size: 13,
                //     //             family: 'Rubik',
                //     //             weight: 400,
                //     //             style: 'normal'
                //     //         },
                //     //         color: '#6B7386',
                //     //         lineHeight: 18
                //     //     },
                //     //     border: {
                //     //         color: 'blue'
                //     //     }
                //     // },
                //     // y: {
                //     //     display: false,
                //     //     beginAtZero: true,
                //     //     stacked: true,
                //     //     border: {
                //     //         display: false,
                //     //         color: 'yellow'
                //     //     },
                //     //     title: {
                //     //         display: true,
                //     //         text: 'Analysis',
                //     //         padding: 2,
                //     //         count: 10,
                //     //         font: {
                //     //             size: 13,
                //     //             weight: 400,
                //     //             family: 'Rubik',
                //     //             style: 'normal'
                //     //         },
                //     //         color: 'green'
                //     //     },
                //     //     grid: {
                //     //         drawTicks: false,
                //     //         color: 'orange'
                //     //     },
                //     //     ticks: {
                //     //         font: {
                //     //             size: 12,
                //     //             family: 'Rubik',
                //     //             weight: 400,
                //     //             style: 'normal'
                //     //         },
                //     //         precision: 0,
                //     //         color: 'purple',
                //     //         lineHeight: 18,
                //     //         padding: 10,
                //     //         callback: function (value) {
                //     //             return `${value}k`;
                //     //         },
                //     //     },
                //     // },
                // },
            }
        };

        const cost = new Chart(ctx, configuration);

        return () => {
            cost.destroy();
        }
    },[]);


    return (
        <div>

            <canvas id='cost' height='400' width='100%'></canvas>
        </div>
    )
}

export default Cost;

