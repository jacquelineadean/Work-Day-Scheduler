# Work-Day-Scheduler
The app Work Day Scheduler was designed to accomodate employee's with busy schedules who need to keep track of important events with a daily planner so that they may manage their time effectively.

# Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

# How it Works
The app utilizes HTML, CSS, and Javascript. Furthermore, it employs Bootstrap for styling purposes, jQuery, and moment.js.

The app tracks the schedule of typical business hours (9-5pm). Each hour is broken out into its on time block. The time blocks provide the user the ability to input their scheduled events and save them by clicking the save button, which are then saved to the local storage. The app also takes into account the time of day and changes color based on whether the time is past, present, or future. 

