function myddFunction() {
  
  /*** 1 ***
  var tst = Math.random().toString(36).substring(7);
  Logger.log(tst);
  
  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }
  
  var eventDate = new Date("November 22, 2017 11:40:00 UTC");
  
  Logger.log(eventDate);
  Logger.log(addMinutes(eventDate, 5));
  *** 1 ***/
  
  //var event = CalendarApp.getDefaultCalendar().createEvent('test title','dfdfd', {'description' : 'test desciption'});
  
  function addrmnd(date){

    return CalendarApp.getDefaultCalendar().createEvent('test title',date, {'description' : 'test desciption'});
  }
  
  try {
    addrmnd('sdfjdh');
  } catch (e) {
    Logger.log(e.message);
  }
  
}
