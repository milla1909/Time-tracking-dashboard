let buttons = document.querySelectorAll('.category-item');
let hours = document.getElementsByClassName("hours");
let textBelowHours = document.getElementsByClassName('last');

let dailyButton = document.getElementById('daily');
let weeklyButton = document.getElementById('weekly');
let monthlyButton = document.getElementById('monthly');
let objData = [{
        title: "Work",
        timeframes: {
            daily: {
                current: 5,
                previous: 7
            },
            weekly: {
                current: 32,
                previous: 36
            },
            monthly: {
                current: 103,
                previous: 128
            }
        }
    },
    {
        title: "Play",
        timeframes: {
            daily: {
                current: 1,
                previous: 2
            },
            weekly: {
                current: 10,
                previous: 8
            },
            monthly: {
                current: 23,
                previous: 29
            }
        }
    },
    {
        title: "Study",
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 7
            },
            monthly: {
                current: 13,
                previous: 19
            }
        }
    },
    {
        title: "Exercise",
        timeframes: {
            daily: {
                current: 1,
                previous: 1
            },
            weekly: {
                current: 4,
                previous: 5
            },
            monthly: {
                current: 11,
                previous: 18
            }
        }
    },
    {
        title: "Social",
        timeframes: {
            daily: {
                current: 1,
                previous: 3
            },
            weekly: {
                current: 5,
                previous: 10
            },
            monthly: {
                current: 21,
                previous: 23
            }
        }
    },
    {
        title: "Self Care",
        timeframes: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 2,
                previous: 2
            },
            monthly: {
                current: 7,
                previous: 11
            }
        }
    }
]
buttons.forEach((button) => {
    button.addEventListener("click", (bt) => {
        let category = button.innerHTML.toLowerCase();

        changeTime(category);
    })
});

function changeTime(obj) {
    for (let i = 0; i < hours.length; i++) {
        hours[i].innerHTML = objData[i].timeframes[obj].current + 'hrs';

        switch (obj) {
            case "daily":
                weeklyButton.classList.remove('active');
                textBelowHours[i].innerHTML = "Last day " + objData[i].timeframes[obj].previous + 'hrs';
                break;

            case "weekly":
                textBelowHours[i].innerHTML = 'Last week ' + objData[i].timeframes[obj].previous + 'hrs';
                break;

            case "monthly":
                weeklyButton.classList.remove('active');
                textBelowHours[i].innerHTML = 'Last month ' + objData[i].timeframes[obj].previous + 'hrs';
                break;
            default:
                break;
        }
    }
};
window.addEventListener('DOMContentLoaded', () => {
    changeTime('weekly');
});