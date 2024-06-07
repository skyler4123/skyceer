export const Constants = {
  car: {
    "": '',
    Tesla: {
      'Model S': 's',
      'Model 3': '3',
      'Model X': 'x',
      'Model Y': 'y',
      'Cybertruck': 'cybertruck',
    },
    Toyota: {
      'Toyota 1': '1',
      'Toyota 2': '2',
      'Toyota 3': '3',
    },
    Honda: {
      'Honda 1': '1',
      'Honda 2': '2',
      'Honda 3': '3',
    },
  },
  get car_brands() {
    return Object.keys(Constants.car)
  },






  user: '',
  english: '',
  chat: '',
  review: '',
}