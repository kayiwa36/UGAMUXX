<template>
    <div>
        <form action="">
  <label>Birth Name:</label>
  <input type="text" required>

  <label>Stage Name:</label>
  <input type="text"  required>

  <label>Date of Birth:</label>
  <input type="date" required>

  <label>Base Location:</label>
  <input type="text" required>

  <label>Profile Photo:</label>
  <input type="file" id="profilePhoto" name="filename" required>

  <label>National ID Number:</label>
  <input type="text" required>

  <label>Location:</label>
  <input type="text" required>

  <label>Gender</label> <br>
  <label for="male">Male</label>
  <input type="radio" id="male" name="gender" value="Male" >
  <label for="female">Female</label>
  <input type="radio" id="female" name="gender" value="Female" >

  <br>

  <label>Number of Albums:</label>
  <input type="number" required>
<br>
  <input type="submit" value="Register Artist">

</form>

  

    </div>
</template>

<style>

</style>