const containerNextYear = document.querySelector('.next-year')
const getdays = document.querySelector(".days")
const gethours = document.querySelector(".hours")
const getminutes = document.querySelector(".minutes")
const getsecounds = document.querySelector(".secounds")
const containerCountdown = document.querySelector("#container-countdown")

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)


containerNextYear.textContent = nextYear
const updateCountdown = () => {
   
    const currentTime = new Date()
    const diference = newYearTime - currentTime
    const days = Math.floor(diference / 1000 / 60 / 60/ 24)
    const hours = Math.floor(diference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(diference / 1000 / 60) % 60
    const secounds = Math.floor(diference / 1000) % 60


    getsecounds.textContent = secounds < 10 ? '0' + secounds : secounds
    getminutes.textContent = minutes < 10 ? '0' + minutes : minutes
    gethours.textContent = hours < 10 ? '0' + hours : hours
    getdays.textContent = days < 10 ? '0' + days : days

}


setTimeout(() => {
    containerCountdown.style.display = 'flex'
}, 1000)

setInterval( () => updateCountdown() , 1000)













// const countDownReveillon = () => {
//     const data = new Date()
//     const getDays = data.getDay()
//     const getHours = data.getHours()
//     const getMinutes = data.getMinutes()
//     const getSeconds = data.getSeconds()


    
// }

// countDownReveillon()

