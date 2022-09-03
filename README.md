# GoogleSheets-Webhook-Flowroute
A Google Apps Script to receive and parse Flowroute SMS and MMS messages into a Google Sheets Spreadsheet. Set up to send SMS to a tab titled "SMS" and MMS (one row per attachment) to a sheet called "MMS"

See https://developer.flowroute.com/api/messages/v2.1/receive-an-sms/ and https://developer.flowroute.com/api/messages/v2.1/receive-an-mms/

Note that SMS comes through in standard format (same fields each time), MMS includes all those plus each attachment or item in an array.

You can use email notifications (https://support.google.com/a/users/answer/9308855?hl=en) or similar to be notified when row(s) are added.


