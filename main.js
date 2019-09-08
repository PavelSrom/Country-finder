// init classes
const countries = new Countries;
const ui = new UI;

// API call
const getCountries = () => {
  if (ui.input.value !== '') {
    countries.getAllCountries()
    .then(data => ui.paintList(data));
  } else {
    ui.hideList();
  }
}

// add keyup handler for user input
ui.input.addEventListener('keyup', getCountries);