$('.hero-slider').owlCarousel({
    loop:true,
    nav: true,
    margin:0,
    // autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


let toggle_p = document.querySelector(".toggle-p");

toggle_p.addEventListener("click", () => {
    let slide = document.querySelector(".nav-fixed");
    slide.classList.toggle("nav-fixed-active");
});

// chart-1

var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"];
var yValues = [0,30,110,20,90,80,70,82,110,50,33,80];

var ctx_1 = document.getElementById('chart-1');
var myChart = new Chart(ctx_1, {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [{
            data: yValues,
            backgroundColor:       
                "#fff"
            ,
            borderColor:
                "#FF7E07"
            ,
            borderWidth: 3,
            tension: .9
        }]
    },
    options: {
        layout: {
            padding: 10
        },
        plugins: {
            legend: {
              display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// chart-2

var xValues_2 = ["Aug 21", "Aug 22", "Aug 23", "Aug 24", "Aug 25", "Aug 26", "Aug 27"];
var yValues_2 = [40,88,60,13,65,48,43];

var ctx_2 = document.getElementById('chart-2');
var myChart = new Chart(ctx_2, {
    type: 'bar',
    data: {
        labels: xValues_2,
        datasets: [{
            data: yValues_2,
            backgroundColor:       
                "#FF7E07"
            ,
            borderColor:
                "rgba(185, 34, 39, 1)"
            ,
            tension: 0
        }]
    },
    options: {
        layout: {
            padding: 10
        },
        plugins: {
            legend: {
              display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});