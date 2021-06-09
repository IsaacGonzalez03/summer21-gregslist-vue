<template>
  <div class="container-fluid">
    <div class="row">
      <Car v-for="car in cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { carsService } from '../services/CarsService'
export default {
  setup() {
    onMounted(() => {
      carsService.getCars()
    })

    return {
      cars: computed(() => AppState.cars)
    }
  }
}
</script>

<style>

</style>
