class Countries {
  constructor() {
    this.endpoint = 'https://restcountries.eu/rest/v2/all';
  }
  getAllCountries() {
    const data = fetch(this.endpoint)
    .then(res => res.json());

    return data;
  }
}