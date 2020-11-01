# Day-Planner

This webpage deploys a day planner in which the user can add items hourly to keep track of their schedule.
Once an hour block has past, it will become gray and uneditable. If it is within the hour, the timeblock will be displayed as red and still be editable. If the time is before the hour block, it will be teal and editable.
Once the user clicks the button 'add to planner' the scheduled items will be saved to local storage and display in the timeblock in which they were entered.

In order to display current date and time, moment().format method was used from momentjs.com and H was used to obtain 24h time. 

This project uses bootstap and css to style elements. 

### Screen Shot:
Note: this image shows the timeblocks after they have occured.
<img width="1174" alt="Work-Day-Planner-ScreenShot" src="https://user-images.githubusercontent.com/71571952/97794422-14fca980-1bb7-11eb-9ae5-2a56ea9575d9.png">

### Deployed Link:
https://lzegart.github.io/Day-Planner/.