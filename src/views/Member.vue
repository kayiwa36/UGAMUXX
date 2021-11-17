<template>
  <div class="about">
    <h1>This is a member page</h1>

    <div v-for="member in members" :key="member.id" class="member">
      <router-link :to="{ name: 'MemberDetails', params: { id: member.id}}">
        <h2>{{ member.stageName }}</h2>
      </router-link>
      
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      members: [
        {
        id: 1,
        stageName: "Fik Fameica",
        numberOfAlbums: 2,
        numberOfSongs: 10,
        profileImg: "",
      },
      {
        id: 2,
        stageName: "Levixone",
        numberOfAlbums: 3,
        numberOfSongs: 75,
        profileImg: "",
      },
      {
        id: 3,
        stageName: "Azawi",
        numberOfAlbums: 5,
        numberOfSongs: 17,
        profileImg: "",
      },
      ]
    }

  }
}
</script>

<style >
.member h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.member h2:hover {
  background: pink;
}
.member a {
  text-decoration: none;
}

</style>
