// Get calendars.
calendars
  .getAll()
  .then(function(calendars) {
    // Remove one.
    var mozillaCalendar = calendars[0];
    return calendars.remove(mozillaCalendar);
  })
  .then(function() {
    // Add one.
    var birthdayCalendar = new Calendar();
    birthdayCalendar.name = 'Birthdays';
    birthdayCalendar.visible = true;
    return calendars.add(birthdayCalendar);
  })
  .then(function(calendar) {
    // The birthday calendar that was just added!
    var bobBirthday = new CalendarEvent();
    bobBirthday.title = 'Bob\'s Birthday Bash!';
    bobBirthday.allday = true;
    bobBirthday.recurrence = 'FREQ=YEARLY';
    bobBirthday.alarms = [60 * 60 * 1000];  // One hour beforehand.
    return calendar.add(bobBirthday);
  })
  .then(function(calendarEvent) {
    // calendarEvent is Bob's birthday.
    var now = new Date();
    var future = new Date('3000-01-01 00:00:00');
    return calendarEvent.expandOccurrences(now, future);
  })
  .then(function(calendarEventOccurrences) {
    // calendarEventOccurrences is an array of
    // CalendarEventOccurrence objects.

    // Print out the start times for Bob's birthdays
    // between now and the year 3000.
    calendarEventOccurrences.forEach(function(occurrence) {
      console.log(occurrence.start.toString());
    });
  })
  .catch(function(error) {
    // ...
  });

// Listen for changes to calendars.
calendars.oncalendarchange = function(event) {
  // Calendar that was changed...
  var calendar = event.target;
};
