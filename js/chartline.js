const ctx = document.getElementById('myChartline').getContext("2d");

let delayed;

let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0, 'rgba(24,190,237,1');
gradient.addColorStop(1, 'rgba(0,242,190,237.3');

const labels = [
    'Ana Sousa',
    'Alina Costa',
    'João Alfonso',
    'Inês Lopes',
    'Sergio Lopes',
    'Teresa Costa',
    'Rúber Madeiros',
    'Ivo Silva',
    'Maria Soares',
    'Viktoria Sousa'
];

const data = {
    labels,
    datasets: [
        {
            data:[75, 95, 65, 78, 85, 74, 90, 71, 60, 83],
            label: 'Teste Técnico',
            fill: true,
            backgroundColor: gradient,
            borderColor: "#fff",
            pointBackgroundColor: "rgb(189, 195, 199)",
            //tension: 0.4,
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
        animation: {
            onComplete: () => {
                delay = true;
            },
            delay: (context) => {
                let delay = 0;
                if(context.type === "data" && context.mode === "default" && !delayed){
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            
            y: {
                beginAtZero: true,
                ticks: {
                    callback:function(value){
                        return  value + "%";
                    },
                },
            },
        },
    },
};

const myChartline = new Chart(ctx, config)