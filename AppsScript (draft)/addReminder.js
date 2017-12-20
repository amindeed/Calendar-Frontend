function addReminder() {
  
  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }
  
  //var eventDate = new Date("November 22, 2017 16:30:00 UTC");
  var now = new Date(); var eventDate = new Date(now.getTime() + (15 * 60 * 1000));
  var eventTitle = "\n\n" + Math.random().toString(36).substring(7) + " Test Event Title";
  
  // 5000 limit characters (line breaks included) 
  var eventDescription = "\n\n" + "This is a sample description of the Test event." + "\n\n\n";
  var event = CalendarApp.getDefaultCalendar().createEvent(eventTitle,eventDate,addMinutes(eventDate, 10), {'description' : eventDescription});
  event.addEmailReminder(5);
  
  Logger.log('Date start: ' + eventDate);
  Logger.log('Date end: ' + eventDate.setMinutes(eventDate.getMinutes() + 30));
  Logger.log('Event ID: ' + event.getId());
  Logger.log("Event Email Reminder (minutes before): " + event.getEmailReminders());
  
}