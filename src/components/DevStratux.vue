<template>
  <div class="DevStratux">
    <h1>H1</h1>
    <h2>H2</h2>
    <div>
      <p>
        <input :value="input" @input="input = $event.target.value">
        <button @click="$stratux.actions.getAxios(input)">Get</button>
        Temp: {{$stratux.state.temp}}
      </p>
      <p>
        <input :value="socketInput" @input="socketInput = $event.target.value">
        <button @click="$stratux.actions.openSocket(socketInput)">Open Socket</button>
        <button @click="$stratux.actions.closeSocket">Close Socket</button>
        <input :value="socketMessageInput" @input="socketMessageInput = $event.target.value">
        <button @click="$stratux.actions.sendSocket(socketMessageInput)">Send Socket</button>
        TempSocket: {{$stratux.state.tempSocket}}
      </p>
      <p>
        <button @click="$stratux.actions.getSettings">Get Settings</button>
      </p>
      <p>
        <button @click="$stratux.actions.getStatus">Get Status</button>
        <button @click="$stratux.actions.subscribeStatus(5)">Subscribe Status</button>
        <button @click="$stratux.actions.unsubscribeStatus">Un-Subscribe Status</button>
      </p>
      <p>
        <button @click="$stratux.actions.shutdown">Shutdown</button>
        <button @click="$stratux.actions.reboot">Reboot</button>
        <button @click="$stratux.actions.restart">Restart</button>
        <button >Reload Web App (tbd)</button>
        <button @click="$stratux.actions.downloadLog">Dwl Log</button>
        <button @click="$stratux.actions.downloadAHRSLog">Dwl AHRS Log</button>
        <button @click="$stratux.actions.downloadDB">Dwl DB</button>
        <button @click="$stratux.actions.deleteLog">Del Log</button>
        <button @click="$stratux.actions.deleteAHRSLog">Del AHRS Log</button>
        
        
      </p>
    </div>
    <ul>
      <li>
        Settings: {{$stratux.state.settings}}
      </li>
      <li>
        Status: {{$stratux.state.status}}
      </li>
      <li>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DevStratux',
  data () {
    return {
      input: "",
      socketInput: "",
      socketMessageInput: "",
    }
  },
  methods: {
    sendMessage(message) {
      this.$stratux.actions.subscribeSettings(1)
    }
  }
}
</script>

<style scoped>
</style>
