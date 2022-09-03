
//this is a function that fires when the webapp receives a GET request
function doGet(e) {
  return HtmlService.createHtmlOutput("request received");
}

//this is a function that fires when the webapp receives a POST request
function doPost(e) {
  var contents = JSON.parse(e.postData.contents)
  var data = contents.data
  var attributes = data.attributes
  var mms = attributes.is_mms
  var webhook_timestamp = new Date()
  var sheet
  var lastRow
 try {
  var body = attributes.body
  var direction = attributes.direction
  var from = attributes.from
  var message_type = attributes.message_type
  var timestamp = attributes.timestamp
  var to = attributes.to

   if (mms == true) {
     var included = contents.included[0]
     var type = included.type
     var attributes = included.attributes
     var file_name = attributes.file_name
     var file_size = attributes.file_size
     var mime_type = attributes.mime_type
     var url = attributes.url
     body = "MMS"
   }

 }


  finally {
 if (mms == false) {
  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SMS")
  lastRow = Math.max(sheet.getLastRow(),1)
  sheet.insertRowAfter(lastRow)
  sheet.getRange(lastRow + 1, 1).setValue(webhook_timestamp)
  sheet.getRange(lastRow + 1, 2).setValue(direction)
  sheet.getRange(lastRow + 1, 3).setValue(from)
  sheet.getRange(lastRow + 1, 4).setValue(to)
  sheet.getRange(lastRow + 1, 5).setValue(mms)
  sheet.getRange(lastRow + 1, 6).setValue(message_type)
  sheet.getRange(lastRow + 1, 7).setValue(timestamp)
  sheet.getRange(lastRow + 1, 8).setValue(body)
 }
 if (mms == true) {
  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("MMS")
  lastRow = Math.max(sheet.getLastRow(),1)
  sheet.insertRowAfter(lastRow)
  sheet.getRange(lastRow + 1, 1).setValue(webhook_timestamp)
  sheet.getRange(lastRow + 1, 2).setValue(direction)
  sheet.getRange(lastRow + 1, 3).setValue(from)
  sheet.getRange(lastRow + 1, 4).setValue(to)
  sheet.getRange(lastRow + 1, 5).setValue(mms)
  sheet.getRange(lastRow + 1, 6).setValue(type)
  sheet.getRange(lastRow + 1, 7).setValue(timestamp)
  sheet.getRange(lastRow + 1, 8).setValue(body)
  sheet.getRange(lastRow + 1, 9).setValue(mime_type)
  sheet.getRange(lastRow + 1, 10).setValue(file_size)
  sheet.getRange(lastRow + 1, 10).setValue(file_name)
  sheet.getRange(lastRow + 1, 11).setValue(url)
 }
  SpreadsheetApp.flush()
  return HtmlService.createHtmlOutput("post request received")
   }
}
