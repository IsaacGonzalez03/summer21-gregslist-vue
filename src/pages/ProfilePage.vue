<template>
  <div>
    hello from the profile
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h3>Selling these cars</h3>
        </div>
      </div>
      <div class="row">
        <Car v-for="car in cars" :key="car.id" :car="car" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import { carsService } from '../services/CarsService'

export default {
  setup() {
    const route = useRoute()
    watchEffect(() => {
      // go load a profile by its id
      profileService.getProfile(route.params.id)
      carsService.getCarsBySellerProfileId(route.params.id)
    })

    return {
      profile: computed(() => AppState.profile),
      cars: computed(() => AppState.cars)
    }
  }
}
</script>

<style>

</style>
