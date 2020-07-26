<template>
  <div class="home">
    <landing />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Landing from '../components/Landing.vue';

@Component({
  components: {
    Landing,
  },
})
export default class Home extends Vue {}
</script>
