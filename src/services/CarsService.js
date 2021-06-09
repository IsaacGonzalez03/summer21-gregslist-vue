import { AppState } from '../AppState'
import { Car } from '../Models/Car'
import { api } from './AxiosService'

class CarsService {
  async getCars() {
    const res = await api.get('/cars')
    AppState.cars = await res.data.map(c => new Car(c))
  }
}

export const carsService = new CarsService()
