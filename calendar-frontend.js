/**
 * @name Calendar Frontend
 * @version 0.1
 * @desc Backend code of Calendar Frontend
 * @author Amine Al Kaderi alkaderi@amindeed.com
 * @license GNU GPLv3 license
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html');
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function processForm(formObject) {

  var description = "\n\n" + formObject.description + "\n\n\n";
  var eventDate = new Date(formObject.date + "T08:00:00Z");

  var ActvUsrEml = Session.getActiveUser().getEmail();

  var event = CalendarApp.getDefaultCalendar().createEvent(formObject.title,
                                                           eventDate,
                                                           addMinutes(eventDate, 10),
                                                           {'description' : description});
  event.addEmailReminder(5);

  var body_cfmMsg = "<b>ADDED A NEW REMINDER</b><br /><br /><br /><b>Title:</b> " + event.getTitle() + "<br /><b>Due date:</b> " + event.getEndTime() + "<br /><br /><b>Description:</b> " + event.getDescription();
  MailApp.sendEmail(ActvUsrEml, '✓ Added a new reminder: ' + event.getTitle(), "", {htmlBody: body_cfmMsg, noReply: false});

}
