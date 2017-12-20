function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html');
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function processForm(formObject) {
  //var formBlob = formObject.myFile;
  //var driveFile = DriveApp.createFile(formBlob);
  //return driveFile.getUrl();
  
  var description = "\n\n" + formObject.description + "\n\n\n";
  var eventDate = new Date(formObject.date + "T08:00:00Z");
  //var eventDate = eventDateStr.toUTCString();
  
  var event = CalendarApp.getDefaultCalendar().createEvent(formObject.title,
                                                           eventDate,
                                                           addMinutes(eventDate, 10),
                                                           {'description' : description});
  event.addEmailReminder(5);
  
  
  var body_cfmMsg = "<b>AJOUTÉ NOUVEAU RAPPEL DE RELANCE DE PAIEMENT</b><br /><br /><br /><b>Titre:</b> " + event.getTitle() + "<br /><b>Date:</b> " + event.getEndTime() + "<br /><br /><b>Description:</b> " + event.getDescription();
  
  MailApp.sendEmail(Session.getActiveUser().getEmail(), 'CONFIRMATION: Rappel Paiement: ' + event.getTitle(), "", {htmlBody: body_cfmMsg, noReply: true});
  
  
  /*
  var result = event.getId() + ' *** ' + formObject.date;
  return result;
  */
  /*
  var result = event.getId();
  return result;
  */
  
}

