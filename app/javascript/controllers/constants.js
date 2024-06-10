export const Constants = {
  car: {
    Tesla: {
      'Model S': {'2020': '', '2021': '', '2022': '', '2023': ''},
      'Model 3': {'2020': '', '2021': '', '2022': '', '2023': ''},
      'Model X': {'2020': '', '2021': '', '2022': '', '2023': ''},
      'Model Y': {'2020': '', '2021': '', '2022': '', '2023': ''},
      'Cybertruck': {'2020': '', '2021': '', '2022': '', '2023': ''},
    },
    Toyota: {
      'Toyota 1': {'2020': '', '2021': '', '2022': '', '2023': ''},
      'Toyota 2': {'2020': '', '2021': '', '2022': '', '2023': ''},
      'Toyota 3': {'2020': '', '2021': '', '2022': '', '2023': ''},
    },
    Honda: {
      'Honda 1': {'2020': '', '2021': '', '2022': '', '2023': ''},
      'Honda 2': {'2020': '', '2021': '', '2022': '', '2023': ''},
      'Honda 3': {'2020': '', '2021': '', '2022': '', '2023': ''},
    },
    Peugeot: {
      'Peugeot 2008': {'2008 ACTIVE': '', '2008 GT LINE': ''},
      'Peugeot 3008': {'3008 ALLURE': '', '3008 PREMIUM': '', '3008 GT': ''},
      'Peugeot 408': {"ALLURE": '', 'PREMIUM': '', 'GT': ''},
    }
  },
  carBrands() {
    return Object.keys(Constants.car)
  },
  carModels(carBrand) {
    return Object.keys(Constants.car[carBrand])
  },
  carVersions(carBrand, carModel) {
    return Object.keys(Constants.car[carBrand][carModel])
  },






  user: '',
  english: '',
  chat: '',
  review: '',
}