import country from 'country-list-js';
import { COUNTRY } from '../constants/country';

const AddressHelpers = {

  country() {
    const countryCode = document.documentElement.dataset.countryCode
    return COUNTRY.where({alpha2: countryCode})
  },

  provinces() {
    return country.findByIso2(this.country().alpha2).provinces
  }

}

export default AddressHelpers;
