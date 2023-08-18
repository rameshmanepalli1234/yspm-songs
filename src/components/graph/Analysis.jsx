import React, {useEffect} from "react";
import { Chart } from 'chart.js/auto';


const Analysis = () => {
    useEffect(()=>{
        const ctx = document.getElementById('analysis');

        const data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    label: 'X',
                    // backgroundColor: 'brown',
                    data: [10, 20, 15],
                    backgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
                },
                // {
                //     label: 'Y',
                //     backgroundColor: 'black',
                //     data: [20, 30, 10]
                // }
            ]
        }

        const configuration = {
            type: 'bar',
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
                                size: 20,
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

        const analysis = new Chart(ctx, configuration);

        return () => {
            analysis.destroy();
        }
    },[])


    return (
        <div>
          <canvas id='analysis' height='400' width='100%'></canvas>
        </div>
    )
}

export default Analysis;