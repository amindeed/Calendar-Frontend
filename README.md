# Calendar Frontend

Basic responsive Bootstrap frontend to [Google Calendar](https://www.google.com/calendar) with backend [Google Apps Script](https://developers.google.com/apps-script/) code.

Best suited for users (typically office users), who are more tied to their desktop email clients than to mobile and web applications, and want a quick way to set reminders on the fly.
The user will receive a notification from `calendar-notification@google.com` to his Google Mail inbox on the selected date. These notifications can then be easily [filtered](https://support.google.com/mail/answer/6579?hl=en) and forwarded to any other email address.

## Installation

1. While logged in to your Google account, go to [Apps Script Dashboard](https://script.google.com/) and create a new project by clicking on **`+ New script`**.
2. Create a script file *`calendar-frontend.gs`* under the project and copy the content of **[`calendar-frontend.js`](calendar-frontend.js)** into it.
3. Create a HTML file *`index.html`* and copy the content of **[`index.html`](index.html)** into it.
4. Go to `Publish -> Deploy as web app` and apply the following settings:
    - **Project version**: *New*
    - **Execute the app as**: *Me*
    - **Who has access to the app**: *Only myself*
    - Click **Update**
5. Go to the URL under **`Current web app URL`** (web app URL)
6. Confirm Apps Scripts authorizations.

## Demo

You can try it here: https://script.google.com/macros/s/AKfycbyJAb5tyhU9j73o0fluMah0toXzjkNguafQ9HOxYxjf85qdS5o/exec

![Animated Gif Demo](calendar-frontend-demo.gif)

Please, note that this demo is hosted by a free Google account, which is subject to Apps Script services [quotas and limitations.](https://developers.google.com/apps-script/guides/services/quotas)

To later revoke app's access to your data, follow the steps described here: [Revoking access rights | Authorization for Google Services  |  Apps Script](https://developers.google.com/apps-script/guides/services/authorization#revoking_access_rights)

## TO DO
- [ ] Select due time (current version set the reminder to 8:00AM)
- [ ] List, edit and delete created/upcoming reminders
- [ ] Publish the application as "API Executable" for authenticated access without having to be logged in to a Google account.
- [ ] Logs in a standard format

## Used components

* Google Apps Script
* Bootstrap 4
* Bootstrap-datepicker 1.7.1
* Font Awesome 4.4

## License

Copyright © 2018 Amine Al Kaderi

This software is released under the GNU GPLv3 license. For more information read the [license](https://www.gnu.org/licenses/gpl-3.0.txt).
