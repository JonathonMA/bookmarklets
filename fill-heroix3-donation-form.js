(function () {
  function createData () {
    var email = faker.internet.email()

    return {
      '#donation_donation_builder_defined_amount': '100',
      '#donor_attributes_salutation': faker.name.prefix().replace('.', ''),
      '#donor_attributes_first_name': faker.name.firstName(),
      '#donor_attributes_last_name': faker.name.lastName(),
      '#donor_attributes_email': email,
      '#donor_attributes_email_confirmation': email,
      '#donor_attributes_phone': '555-8675309',
      '#donor_attributes_address_1': faker.address.streetAddress(),
      '#donor_attributes_locality': faker.address.city(),
      '#donor_attributes_region': 'QLD',
      '#donor_attributes_postal_code': '4000'
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
