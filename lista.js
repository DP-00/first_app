<template>
  <div>
    <div>
      <h1>Participants list</h1>
      <ol>
        <li>John Doe</li>
        <li>Robin Hood</li>
        <li>Chuck Norris</li>
      </ol>
    </div>

    <h3>New participant</h3>
    <form @submit.prevent="addNewParticipant()">
      <label>Firstname</label>
      <input type="text">
      <label>Lastname</label>
      <input type="text">
      <button>Add new participant</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      addNewParticipant() {
        // dunno, what's next?
      }
    }
  };
</script>