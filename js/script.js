"use strict";

const title = document.querySelectorAll(".title");
const current = document.querySelectorAll(".current");
const previous = document.querySelectorAll(".previous");
const activeState = document.querySelectorAll(".ulActive")

const hrs = 'hrs'

const getPosts = async () => {
      const response  = await fetch('./data.json')
      const data = await response.json()

      return data
}

const titles = getPosts().then(value => {
      value.forEach( (item, i, j) => {
         title[i].innerHTML = item.title
      })

})
 
const daily =() => getPosts().then(value => {
      value.forEach((item, i) => {
                  current[i].innerHTML = item.timeframes.daily.current + hrs
            
            previous[i].innerHTML = 'Last Week - ' +    item.timeframes.daily.previous + 'hrs'
            
            item.timeframes.daily.previous < 1 ? previous[i].innerHTML = 'Last Week - ' +    item.timeframes.daily.current + 'hrs':0
      })
})
daily()

const weekly = () => getPosts().then(value => {
      value.forEach((item, i) => {
            current[i].innerHTML = item.timeframes.weekly.current + hrs
            console.log(item.timeframes.weekly.previous)

            previous[i].innerHTML = 'Last Week - ' +    item.timeframes.weekly.previous + 'hrs'
      })
})

const monthly = () => getPosts().then(value => {
      value.forEach((item, i) => {
            current[i].innerHTML = item.timeframes.monthly.current + hrs
            
            previous[i].innerHTML = 'Last Week - ' +    item.timeframes.monthly.previous + 'hrs'

         
      })
})






;



const lastWeek = "Last week - ";

const rm = () => activeState.forEach((rm) => rm.classList.remove("active"));

const list = activeState.forEach((active) => {
  
    active.addEventListener("click", () => {
        rm();
        active.classList.add("active");
        
        if (active.textContent === "Daily") {
            daily()
        }
        if (active.textContent === "Weekly") {
            weekly()
        }
        if (active.textContent === "Monthly") {
            monthly()
        }
    });
});



