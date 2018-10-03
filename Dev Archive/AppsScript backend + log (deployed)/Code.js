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

  /** Optional: Spreadsheet to log created reminders **/
  var LogSSId = '{SPREADSHEET-ID-GOES-HERE}';
  var log = SpreadsheetApp.openById(LogSSId);
  var ActvUsr = ActvUsrEml.split("@")[0];
  var log_sheet = log.getSheetByName(ActvUsr);
  /***************************************************/

  var event = CalendarApp.getDefaultCalendar().createEvent(formObject.title,
                                                           eventDate,
                                                           addMinutes(eventDate, 10),
                                                           {'description' : description});
  event.addEmailReminder(5);

  var body_cfmMsg = "<b>AJOUTÉ NOUVEAU RAPPEL DE RELANCE DE PAIEMENT</b><br /><br /><br /><b>Titre:</b> " + event.getTitle() + "<br /><b>Date:</b> " + event.getEndTime() + "<br /><br /><b>Description:</b> " + event.getDescription();
  MailApp.sendEmail(ActvUsrEml, '✓ Ajouté Rappel Paiement: ' + event.getTitle(), "", {htmlBody: body_cfmMsg, noReply: true});

  /** Optional: Log reminder **/
  log_sheet.appendRow([event.getTitle(), event.getEndTime(), formObject.description]);

}
