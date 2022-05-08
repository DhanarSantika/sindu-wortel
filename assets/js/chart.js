var ctx = document.getElementById("bar-chart-horizontal").getContext("2d");

new Chart(ctx, {
    type: "bar",
    data: {
    labels: ["Balita", "Ibu", "Lansia"],
    datasets: [{
        label: "Sudah diperiksa",
        tension: 0.4,
        borderWidth: 0,
        borderRadius: 0,
        borderSkipped: false,
        backgroundColor: "rgba(0, 0, 0, .8)",
        data: [3, 10, 8]
    },
    {
        label: "Terdaftar",
        tension: 0.4,
        borderWidth: 0,
        borderRadius: 0,
        borderSkipped: false,
        backgroundColor: "rgba(50, 50, 50, .8)",
        data: [87, 40, 32]
    }, ],
    },
    options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: false,
        }
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    scales: {
        y: {
        ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 10,
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        },
        },
        x: {
        grid: {
            drawBorder: true,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: 'rgba(0, 0, 0, .2)'
        },
        },
    },
    },
});