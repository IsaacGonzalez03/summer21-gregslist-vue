<template>
  <div class="col-lg-4 listing my-3">
    <div class="bg-white rounded">
      <div class="text-center">
        <router-link :to="{name: 'Car', params: { id: car.id } }">
          <img :src="car.imgUrl" height="250" class="img-fluid" />
        </router-link>
      </div>

      <div class="card-body">
        <p>
          <b>{{ car.make }} {{ car.model }}</b>
        </p>
        <p>
          <em>${{ car.price.toFixed(2) }}</em>
        </p>

        <router-link :to="{name: 'Car', params: { id: car.id } }">
          More...
        </router-link>

        <hr>

        <div class="text-right">
          <router-link :to="{name: 'Profile', params: { id: car.creator.id }}">
            <img :src="car.creator.picture" alt="creator avatar" class="rounded-circle my-2" height="55">
            {{ car.creator.name }}
          </router-link>
        </div>

        <div v-if="car.creator.id === account.id">
          <button class="btn btn-warning btn-block" @click="editCar">
            EDIT CAR
          </button>
          <button class="btn btn-danger btn-block" @click="deleteCar">
            DELETE CAR
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    car: { type: Object, required: true }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      editCar() {

      },
      deleteCar() {

      }
    }
  }
}
</script>

<style>

</style>
