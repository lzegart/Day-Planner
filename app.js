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

        if (currentHour > time) {
            $(`#${time}`).addClass("bg-secondary  text-light")
            $(`#${time}`).attr("disabled", true)
        } else if (currentHour === time) {
            $(`#${time}`).addClass("bg-danger  text-light")
        } else {
            $(`#${time}`).addClass("bg-info  text-light")
        }

        if (timeCheck === null) {
            window.localStorage.setItem(time, "")
        } else if (timeCheck.length > 0) {
            $(`#${time}`).attr("value", window.localStorage.getItem(time))
        }
    })

    $("form").on("submit", function(e) {
        e.preventDefault()
        const time = e.target.querySelector("input").getAttribute("id")
        const text = e.target.querySelector("input").value

        window.localStorage.setItem(time, text)
})
})
