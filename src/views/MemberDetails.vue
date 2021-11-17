<template >
    <p> The member Details page </p>
     <p> The member id is {{ id }}  </p>

</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>


