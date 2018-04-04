function myFunction() {
  
  var description = "TEST 5 DESCRIPTION";
  var now = new Date(); var eventDate = new Date(now.getTime() + (15 * 60 * 1000));
  var title = "TEST 5 TITLE"
  //var eventDate = eventDateStr.toUTCString();
  
  var event = CalendarApp.getDefaultCalendar().createEvent(title,
                                                           eventDate,
                                                           addMinutes(eventDate, 10),
                                                           {'description' : description});
  event.addEmailReminder(5);
  
  var body_cfmMsg = "<b>AJOUTÉ NOUVEAU RAPPEL DE RELANCE DE PAIEMENT</b><br /><br /><b>Titre:</b> " + event.getTitle() + "<br /><b>Date:</b> " + event.getEndTime() + "<br /><br /><b>Description:</b> " + event.getDescription();
  
  MailApp.sendEmail(Session.getActiveUser().getEmail(), 'CONFIRMATION: Rappel Paiement: ' + event.getTitle(), "", {htmlBody: body_cfmMsg, noReply: true});
}
