# GoogleSheets-Webhook-Flowroute
A Google Apps Script to receive and parse Flowroute SMS and MMS messages into a Google Sheets Spreadsheet. Set up to send SMS to a tab titled "SMS" and MMS (one row per attachment) to a sheet called "MMS"

See https://developer.flowroute.com/api/messages/v2.1/receive-an-sms/ and https://developer.flowroute.com/api/messages/v2.1/receive-an-mms/

Note that SMS comes through in standard format (same fields each time), MMS includes all those plus each attachment or item in an array.

Keep in mind that in the case of MMS, attachments are forwarded with a link to a temporary S3 bucket. This link is non-permanent and expires (usually after ~7 days).

The latest example includes email notification codes


