function checkEditReminders() {
  
  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }
  
  // Determines how many events are happening in the next two hours.
  var now = new Date();
  var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
  var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
  Logger.log('Number of events: ' + events.length);
  
  for(i=0;i<events.length;i++){
    
    Logger.log("Event: " + events[i].getStartTime() + ": " + events[i].getTitle() + " - " + events[i].getDescription());
    
    /** Edit Events **/
    var now = new Date(); var newStartTime = new Date(now.getTime() + (15 * 60 * 1000));
    events[i].setTitle("New title " + Math.random().toString(36).substring(7));
    events[i].setTime(addMinutes(events[i].getStartTime(), 20), addMinutes(events[i].getEndTime(), 20));
    events[i].setDescription("New Description " + Math.random().toString(36).substring(7));
    
    Logger.log("Edited Event: " + events[i].getStartTime() + ": " + events[i].getTitle() + " - " + events[i].getDescription());
    Logger.log("-------------------------------");
    
    /** Delete Events **/
    // events[i].deleteEvent();
    
  }
}
