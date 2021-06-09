import { AppState } from '../AppState'
import { Car } from '../Models/Car'
import { api } from './AxiosService'

class CarsService {
  async getCars() {
    const res = await api.get('api/cars')
    AppState.cars = await res.data.map(c => new Car(c))
  }

  async getCarById(id) {
    AppState.activeCar = null
    const res = await api.get('api/cars/' + id)
    AppState.activeCar = new Car(res.data)
  }

  async getCarsBySellerProfileId(id) {
    const res = await api.get('api/cars?creatorId=' + id)
    AppState.cars = await res.data.map(c => new Car(c))
  }
}

export const carsService = new CarsService()
