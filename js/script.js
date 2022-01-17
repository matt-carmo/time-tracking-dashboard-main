const title = document.querySelectorAll(".title");
const current = document.querySelectorAll(".current");
const previous = document.querySelectorAll(".previous");
const activeState = document.querySelectorAll(".ulActive");
const lastWeek = "Last week - ";

const rm = () => activeState.forEach((rm) => rm.classList.remove("active"));

const list = activeState.forEach((active) => {
  
    active.addEventListener("click", () => {
        rm();
        active.classList.add("active");
        
        if (active.textContent === "Daily") {
            dailyPress();
        }
        if (active.textContent === "Weekly") {
            weeklyPress();
        }
        if (active.textContent === "Monthly") {
            monthly();
        }
    });
});

const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const myObj = JSON.parse(this.responseText);        


        myObj.forEach(() => {
            for (let i = 0; i < title.length; i++) {
                title[i].innerHTML = myObj[i].title;
            }
        });

        dailyPress = () => {
            current.forEach((element) => {
                for (let j = 0; j < current.length; j++) {
                    current[j].innerHTML =
                        myObj[j].timeframes.daily.current + "hrs";
                    previous[j].innerHTML =
                        lastWeek + myObj[j].timeframes.daily.previous + "hrs";
                }
            });
        };
        dailyPress()
        

        weeklyPress = () => {
            for (let j = 0; j < current.length; j++) {
                current[j].innerHTML =
                    myObj[j].timeframes.weekly.current + "hrs";
                previous[j].innerHTML =
                    lastWeek + myObj[j].timeframes.weekly.previous + "hrs";
            }
        };
        monthly = () => {
            for (let j = 0; j < current.length; j++) {
                current[j].innerHTML =
                    myObj[j].timeframes.monthly.current + "hrs";
                previous[j].innerHTML =
                    lastWeek + myObj[j].timeframes.monthly.previous + "hrs";
            }
        };
    }
};

xmlhttp.open("GET", "js/data.json", true);
xmlhttp.send();
