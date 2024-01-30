const chart = document.querySelector("#chart").getContext('2d');


// create a new chart instance 

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        datasets: [
            {
                label: 'Nike',
                data: [29374, 33537, 49631, 59095, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },

            {
                label: 'Puma',
                data: [29364, 33557, 69631, 59095, 46684, 34572, 49974, 46847, 68116, 65004],
                borderColor: 'blue',
                borderWidth: 2
            },

           
        ]
    },
    options: {
        responsive: true
    }
})