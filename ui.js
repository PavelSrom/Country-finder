class UI {
  constructor() {
    this.countryCont = document.querySelector('.countryContainer');
    this.countryList = document.querySelector('.countryList');
    this.input = document.querySelector('.userInput');
  }
  paintList(data) {
    this.countryCont.style.display = 'block';
    this.countryList.innerHTML = '';

    // capitalize the first letter
    let val = this.input.value;
    val = val[0].toUpperCase() + val.slice(1).toLowerCase();
    let countries = data.filter(cnt => cnt.name.startsWith(val));

    // if no countries found, hide the list
    if (countries.length == 0) this.hideList();

    // content for each <li>
    countries.forEach(cnt => 
      this.countryList.innerHTML += `
        <li class="list-group-item">
          <div class="d-flex justify-content-between align-items-center countryBanner">
            <h4>${cnt.name}</h4>
            <i class="fas fa-chevron-down"></i>
          </div>

          <div class="row countryContent">
            <div class="col-md-6">
              <img src="${cnt.flag}" class="img-fluid d-block mt-2 mt-md-0" />
            </div>
            <div class="col-md-6">
              <p>Region: ${cnt.region}</p>
              <p>Capital city: ${cnt.capital}</p>
              <p>Population: ${cnt.population.toLocaleString()}</p>
              <p>Currency: ${cnt.currencies[0].code}</p>
              <p>Calling code(s): +${cnt.callingCodes}</p>
            </div>
          </div>

        </li>
      `);
    this.makeAccordions();
  }
  hideList() {
    this.countryCont.style.display = 'none';
  }
  makeAccordions() {
    let banners = document.querySelectorAll('.countryBanner');
    banners.forEach(bnr => bnr.addEventListener('click', () => {
      const bannerContent = bnr.nextElementSibling;
      const arrow = bnr.lastElementChild;
      const background = bnr.parentElement;

      if (bannerContent.style.height) {
        bannerContent.style.height = null;
        arrow.style.transform = 'rotate(0deg)';
        background.classList.remove('bg-light');
      } else {
        bannerContent.style.height = `${bannerContent.scrollHeight}px`;
        arrow.style.transform = 'rotate(180deg)';
        background.classList.add('bg-light');
      }
    }));
  }
}