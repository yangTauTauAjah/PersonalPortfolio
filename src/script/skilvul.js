function isNumber(string) {
  return !isNaN(string)
}

function checkboxIsChecked(Checkbox) {
  return Checkbox.checked
}

function validateFormData(formData) {

  if (
    formData === null ||
    !isNumber(formData.zipCode) ||
    !checkboxIsChecked(formData.status)
  ) return false

  return true

}

function submit({name, email, city, zipCode, status}) {

  const warning = document.getElementById('warning')

  if (!validateFormData({name, email, city, zipCode, status})) {
    warning.style.setProperty('display', 'block')
    warning.textContent = 'Periksa form anda sekali lagi'
  }
  else {
    warning.style.setProperty('display', 'none')
    warning.textContent = ''
  }

}

function handleGetFormData(e) {

  e.preventDefault()

  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const city = document.getElementById('city').value
  const zipCode = document.getElementById('zip-code').value

  const status = document.getElementById('status')

  console.log({name, email, city, zipCode, status})

  submit({name, email, city, zipCode, status})

  const obj = {
    name,
    email,
    city,
    zipCode,
    status,
  }

  return obj
}

