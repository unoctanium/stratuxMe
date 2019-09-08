//let URL_HOST_BASE           = window.location.hostname + (window.location.port ? ':' + window.location.port : '')
let URL_HOST_BASE           = "192.168.1.1" // TODO: ODO: We must put this in settings and in the store...
let URL_HOST_PROTOCOL       = "http://" // window.location.protocol + "//"
let URL_WS_PROTOCOL         = "ws://"

const api = 
{
  "getSettings":        { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/getSettings", name: "Settings" },
  "radar":              { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/radar", name: "Radar" },

  "getStatus":          { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/getStatus", name: "Status" },
  "status":             { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/status", name: "Status" },
  
  "getSituation":       { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/getSituation", name: "Status" }, 
  "situation":          { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/situation", name: "Situations" },
  
  "getSatellites":      { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/getSatellites", name:" Satellites" },
  
  "getTowers":          { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/getTowers", name: "Towers" },

  "traffic":            { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/traffic", name: "Traffic" },
  
  "weather":            { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/weather", name: "Weather" },



  "shutdown":           { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/shutdown", name: "" },
  
  "restart":            { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/restart", name: "" },
  "reboot":             { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/reboot", name: "" },
  
  "downloadlog":        { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/downloadlog", name: "" },
  "deletelogfile":      { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/deletelogfile", name:"" },
  "downloadahrslogs":   { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/downloadahrslogs", name: "" },
  "deleteahrslogfiles": { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/deleteahrslogfiles", name: "" },
  "downloaddb":         { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/downloaddb", name: "" },
  

  "developer":          { method: "SOCK", url: URL_WS_PROTOCOL   + URL_HOST_BASE + "/developer", name: "Developer" },
  "develmodetoggle":    { method: "GET",  url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/develmodetoggle", name: "Devmode Toggle" },
  "cageAHRS":           { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/cageAHRS", name: "" },
  "calAHRS":            { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/calibrateAHRS", name: "" },
  "orientAHRS":         { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/orientAHRS", name: "" },
  "resetGMeter":        { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/resetGMeter", name: "" },
  "setSettings":        { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/setSettings", name: "" },
  "updateUpload":       { method: "POST", url: URL_HOST_PROTOCOL + URL_HOST_BASE + "/updateUpload", name: "" },
  }

export default api


/*
status
towers // UAT
weather // UAT
traffic // ADS-B + FLARM + GPS
gps/ahrs // GPS
radar // GPS + 
flarmstatus // GPS + FLARM
logs
settings
developer

*/

/* 
status
--
panel a
penel b
panel c
--

towers /UAT
weather / UAT
traffic (list)
radar (trafficradar)
ahrs (gps)
g-meter (gps)
map (gps)
gps (detail status and satellites)
flarm (detail status)
settings
datalog
developer
*/
