<template>
  <div v-if="car">
    <Car :car="car">
    </car>
  </div>
  <div v-else>
    loading....
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import { carsService } from '../services/CarsService'

export default {
  setup() {
    const route = useRoute()

    watchEffect(() => {
      carsService.getCarById(route.params.id)
    })

    return {
      car: computed(() => AppState.activeCar)
    }
  }
}
</script>

<style>

</style>
