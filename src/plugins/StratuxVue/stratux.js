import Vue from 'vue'
//import axios from 'axios'

import api from './api'


////// TODO: Subscription counter

// state is reactive
const state = Vue.observable({
  tempSocket: {},
  temp: {},
  app: {},
  settings: {},
  satellites: {},
  towers: {},
  status: {},
  weather: {},
  radar: {},
  traffic: {},
  developer: {},
})

// props are non-reactive!!
const props = {
  temp: {},
  tempSocket: {},
  settings: {},
  satellites: {},
  towers: {},
  status: {},
  weather: {},
  radar: {},
  traffic: {},
  developer: {},
}

const getters = {
  radius: () => state.radius,
  ip: () => state.ip,
  //settings: () => 
}

const mutations = {
  //setRadius: (val) => state.radius = val,
  //setIp: (val) => state.settings = { ip: val },
  //clearIp: () => state.settings.ip = "empty",
  settings: (payload) => state.settings = payload,
  status: (payload) => state.status = payload,
  towers: (payload) => state.towers = payload,

  
}

const actions = {

  // TEMP

  getAxios(url) {

    /*
    axios
      .get("http://192.168.1.1/" + url)
      .then((res) => {
        state.temp = res.data
      })
      .catch(error => {
        actions.debugAxiosError(error)
      })
      */
    fetch("http://192.168.1.1/" + url)
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
      state.temp = data
    })
    .catch(error => actions.debugAxiosError(error))
  },

  openSocket (url) {
    var socket = new WebSocket("ws://192.168.1.1/" + url)
    props.tempSocket.socket = socket

    socket.onopen = function(event) {
      console.log("socket opened: " + url)
    }

    socket.onclose = function(event) {
      console.log("socket closed: " + url)
      if (props.tempSocket.reconnectTimeoutId) 
        clearTimeout(props.tempSocket.reconnectTimeoutId)
      
      var reconnectTimeoutId = setTimeout(() => {
        console.log("reopening socket: " + url)
        actions.openSocket(url)
      }, 5000)//.bind(this)
      props.tempSocket.reconnectTimeoutId = reconnectTimeoutId
    }

    socket.onmessage = function(event) {
      console.debug("WebSocket message received:", event.data)
      state.tempSocket = JSON.parse(event.data)
    }

    socket.onerror = function(event) {
      console.log("socket error: " + url + ": ", event)
    }
  },

  closeSocket() {
    clearTimeout(props.tempSocket.reconnectTimeoutId)
    props.tempSocket.reconnectTimeoutId = null
    props.tempSocket.socket.close()
    props.tempSocket.socket = null  
    console.log("closed socket", props.tempSocket)
  },

  sendSocket (message) {
    if (props.tempSocket.socket.readyState === 1)
      props.tempSocket.socket.send(message)
  },


  // HELPER FUNCTIONS

  debugAxiosError(error) {
    //this.$f7.dialog.alert(error,"Error");
    if (error.response) {
      // Request made and server responded
      console.log("axios response error:")
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      // The request was made but no response was received
      console.log("axios no response error: ", error.request)
    } else {
      console.log('axios error', error.message)
    }
  },

  postAxios(url, message) {
    //axios.post('url')
    /*
    axios({ 
      method: "POST", 
      "url": url, 
      "data": message, 
      crossDomain: true,
      dataType: 'jsonp',
      "headers": { 
        "content-type": "application/zip", 
      }
    })
    .then(result => {
        console.log("axios sent")
        console.log(result.data.origin)
        console.log(result.data)
    }, error => {  
      actions.debugAxiosError(error)
    })
    */
    
    
    fetch(url, {
      //credentials: 'same-origin', // 'include', default: 'omit'
      //mode: "cors",
      method: 'POST',             // 'GET', 'PUT', 'DELETE', etc.
      body: '', // JSON.stringify(data), // Use correct payload (matching 'Content-Type')
      headers: { 
        'Accept': 'application/zip',
        'Content-Type': 'application/json',
      },
    })
    .then(
      response => console.log(response)
      //response => response.json()
    )
    .catch(error => console.log(error))
    
  },

  // STRATUX SETTINGS

  getSettings() {

    /*
    axios
      .get(api.getSettings.url)
      .then((res) => {
        mutations.settings(res.data)
      })
      .catch(error => {
        actions.debugAxiosError(error)
      })
    */

    fetch(api.getSettings.url)
    .then(response => response.json())
    .then(data => {
      console.log(data) // Prints result from `response.json()` in getRequest
      mutations.settings(data)
    })
    .catch(error => actions.debugAxiosError(error))
  
  },

  updateSettings() {

  },

  // STRATUX STATUS

  getStatus() {
    /*
    axios
      .get(api.getStatus.url)
      .then((res) => {
        mutations.status(res.data)
      })
      .catch(error => {
        actions.debugAxiosError(error)
      })
      */

     fetch(api.getStatus.url)
     .then(response => response.json())
     .then(data => {
       console.log(data) // Prints result from `response.json()` in getRequest
       mutations.status(data)
     })
     .catch(error => actions.debugAxiosError(error))
  },

  subscribeStatus(interval) {
      if (!interval) interval = 1
      props.status.pollIntervalId = setInterval(() => {
        console.log("reopening url: " + api.getStatus.url)
        actions.getStatus()
      }, 1000 * interval)
  },

  unsubscribeStatus() {
    if (props.status.pollIntervalId)
      clearInterval(props.status.pollIntervalId)
  },


  // STRATUX COMMANDS

  shutdown() { actions.postAxios(api.shutdown.url, "") },
  reboot() { actions.postAxios(api.reboot.url, "") },
  restart() { actions.postAxios(api.restart.url, "") },
  downloadLog() { actions.postAxios(api.downloadlog.url, "") }, //Target?
  deleteLog() { actions.postAxios(api.deletelogfile.url, "") }, //Target?
  downloadAHRSLog() { actions.postAxios(api.downloadahrslogs.url, "") }, //Target?
  deleteAHRSLog() { actions.postAxios(api.deleteahrslogfiles.url, "") }, //Target?
  downloadDB() { actions.postAxios(api.downloaddb.url, "") }, //Target?


}

export default {
  state,
  props,
  getters,
  mutations,
  actions
}
