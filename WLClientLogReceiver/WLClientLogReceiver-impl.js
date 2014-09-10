/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 *  WL.Server.invokeHttp(parameters) accepts the following json object as an argument:
 *  
 *  {
 *  	// Mandatory 
 *  	method : 'get' , 'post', 'delete' , 'put' or 'head' 
 *  	path: value,
 *  	
 *  	// Optional 
 *  	returnedContentType: any known mime-type or one of "json", "css", "csv", "javascript", "plain", "xml", "html"  
 *  	returnedContentEncoding : 'encoding', 
 *  	parameters: {name1: value1, ... }, 
 *  	headers: {name1: value1, ... }, 
 *  	cookies: {name1: value1, ... }, 
 *  	body: { 
 *  		contentType: 'text/xml; charset=utf-8' or similar value, 
 *  		content: stringValue 
 *  	}, 
 *  	transformation: { 
 *  		type: 'default', or 'xslFile', 
 *  		xslFile: fileName 
 *  	} 
 *  } 
 */

/**
 * @param interest
 *            must be one of the following: world, africa, sport, technology, ...
 *            (The list can be found in http://edition.cnn.com/services/rss/)
 * @returns json list of items
 */


function log(deviceInfo, logMessages) {
  WL.Logger.warn(new Date() + 'logging is called');
  WL.Logger.warn(deviceInfo);
  //WL.Logger.warn(logMessages);
  /* The adapter can choose to process the parameters, 
     for example to forward them to a backend server for 
     safekeeping and further analysis.

     The deviceInfo object may look like this:
     {
       "appName":       "wlapp",
       "appVersion":    "1.0",
       "deviceId":      "66eed0c9-ecf7-355f-914a-3cedac70ebcc",
       "model":         "Galaxy Nexus - 4.2.2 - API 17 - 720x1280",
       "systemName":    "Android",
       "systemVersion": "4.2.2",
       "os.arch":       "i686",           // Android only
       "os.version":    "3.4.0-qemu+"     // Android only
      }
      The logMessages parameter is a JSON array 
      that contains JSON object elements, and might look like this:

        [{
          "timestamp"    : "17-02-2013 13:54:23:745",  // "dd-MM-yyyy hh:mm:ss:S"
          "level"        : "ERROR",                    // ERROR || WARN || INFO || LOG || DEBUG
          "package"      : "your_tag",                 // typically a class name, app name, or JavaScript object name
          "msg"          : "the message",              // a helpful log message
          "threadid"     : 42,                         // (Android only) id of the current thread
          "metadata"     : { "$src" : "js" }           // additional metadata placed on the log call
        }]

  */

  //return true;
  return {"something" : true};

}

