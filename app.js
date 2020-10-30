
const currentDate = moment().format('MMMM Do YYYY, h:mm')
console.log(currentDate)
$("#current-date").text(currentDate)

$("form").on("submit", function(e) {
    e.preventDefault()
    console.log(e.target)
})