<template>
  <div class="col-lg-4 listing my-3">
    <div class="card">
      <img src="${this.imgUrl}" height="250" />

      <div class="card-body">
        <p>
          <b>${this.make} ${this.model}</b>
        </p>
        <p>
          <em>$${this.price.toFixed(2)}</em>
        </p>

        <button class="btn btn-warning btn-block" onclick="app.carsController.editCar('${this.id}')">
          EDIT CAR
        </button>
        <button class="btn btn-danger btn-block" onclick="app.carsController.deleteCar('${this.id}')">
          DELETE CAR
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
    }
  }
}
</script>

<style>

</style>
