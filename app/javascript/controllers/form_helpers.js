const FormHelpers = {

  formData({formElement}) {
    let formData = new FormData(formElement)
    let formDataObject = {}
    for (var pair of formData.entries()) {
      formDataObject[pair[0]] = pair[1]
    }   
    return formDataObject
  }

}

export default FormHelpers;
