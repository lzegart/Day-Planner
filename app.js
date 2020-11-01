$(document).ready(function() {
    const currentDate = moment().format('MMMM Do YYYY, H:mm')
    console.log(currentDate)
    $("#current-date").text(currentDate)

    const times = [9, 10, 11, 12, 13, 14, 15, 16]

    times.forEach(time => {
        const timeCheck = window.localStorage.getItem(time)
        
        const currentHour = moment().hour()

        console.log(currentHour)
        console.log(time)


    })

    $("form").on("submit", function(e) {
        e.preventDefault()
        const time = e.target.querySelector("input").getAttribute("id")
        const text = e.target.querySelector("input").value

        window.localStorage.setItem(time, text)
})
})
