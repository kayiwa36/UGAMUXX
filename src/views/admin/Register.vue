<template>
<div class="about">
    <h4>Add music artists, performing artists, music bands and music labels...</h4>
</div>

<div>
  <router-link :to="{name: 'RegisterArtist'}" >Register Artist</router-link>
  <router-link :to="{name: 'RegisterBand'}" >Register Band</router-link>
  <router-link :to="{name: 'RegisterLabel'}" >Register Label</router-link>
  <router-link :to="{name: 'RegisterClerk'}" >Register Clerk</router-link>
</div>

</template>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input[type="text"], input[type="date"] ,input[type="number"], input[type="file"], input[type="email"],input[type="password"] {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border:none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
 input[type="file"], input[type="submit"] {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border:none;
  border-bottom: 0px solid #ddd;
  color: #555;
}

</style>
