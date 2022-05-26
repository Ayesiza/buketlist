<template>
  <div >
    <img alt="Vue logo" src="../assets/logo.png">
   <Todos />
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'

export default {
  name: 'Todos',
  components: {
    Todos,
  }
}
</script>
