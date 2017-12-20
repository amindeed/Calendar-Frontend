function _doGet(e) {

  // Functions

  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }


  /*##### check session/cookies #####*/

  // ...


  /*##### Retrieve request parameters #####*/

  // Check/sanitize GET/POST request parameters first
  
  var params = JSON.stringify(e);
  var reminderTitle = params.parameter.title;
  var reminderDate = params.parameter.date; // format: "2017-11-15"
  var reminderTime = params.parameter.time; // format: "23%3A12" (11:12 PM)
  var reminderDescription = params.parameter.description;



  /****** Case #1: Add new reminder *******/

  //var eventDate = new Date("November 22, 2017 16:30:00 UTC");
  //var now = new Date(); var eventDate = new Date(now.getTime() + (15 * 60 * 1000));

  var remainderDatetime; // reminderDate + reminderTime
  var event = CalendarApp.getDefaultCalendar().createEvent(reminderTitle,
                                                           remainderDatetime,
                                                           addMinutes(remainderDatetime, 10),
                                                           {'description' : "\n\n" + reminderDescription + "\n\n\n"});
  event.addEmailReminder(5);



  /****** Case #2: List reminders *******/

  var now = new Date();
  var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
  var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);

  for(i=0;i<events.length;i++){

    Logger.log("Event: " + events[i].getStartTime() + ": " + events[i].getTitle() + " - " + events[i].getDescription());
  }



  /****** Case #3: Edit reminder *******/

  var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
  var i = 0;

  var now = new Date(); var newStartTime = new Date(now.getTime() + (15 * 60 * 1000));
  events[i].setTitle("New title " + Math.random().toString(36).substring(7));
  events[i].setTime(addMinutes(events[i].getStartTime(), 20), addMinutes(events[i].getEndTime(), 20));
  events[i].setDescription("New Description " + Math.random().toString(36).substring(7));



  /****** Case #4: Delete reminder *******/

  var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
  var i = 0;

  events[i].deleteEvent();








  /***********************************************************
  //var obj = {"BCC Address" : e.postData.contents.bcc};

  var DATA = JSON.parse(e.postData.contents);

  SpreadsheetApp.openById('{SPREADSHEET-ID-GOES-HERE}')
                         .getSheetByName('Sheet2')
                         .appendRow(['test', new Date().toLocaleString(), DATA.bcc, params]);


  var val = e.postData.contents.noreply;

  return ContentService
          .createTextOutput(JSON.stringify({"Provided TO_BL" : DATA.to_blacklist[0]})) // .createTextOutput(JSON.stringify({"Your data1" : e.parameter.data1})) won't work!
          .setMimeType(ContentService.MimeType.JSON);
  ***********************************************************/
}
