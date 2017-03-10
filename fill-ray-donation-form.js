(function () {
  function createData () {
    var email = 'faker@example.com'

    return {
      '#donor_name_given': faker.name.firstName(),
      '#donor_name_family': faker.name.lastName(),
      '#donor_email': email,
      '#donor_telephone': '555-8675309',
      '#card_number': '4005550000000001',
      '#expiry': '05/17',
      '#security_code': '222',
    }
  }

  function fillForm (data) {
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        var value = data[key]

        $(key).val(value)
      }
    }
  }

  $.getScript('//cdnjs.cloudflare.com/ajax/libs/Faker/3.0.1/faker.min.js', function (data, textStatus, jqxhr) {
    fillForm(createData())
  })
})()
