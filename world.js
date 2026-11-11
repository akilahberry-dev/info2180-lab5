window.addEventListener('load', function () {
  const lookupBtn = document.getElementById('lookup');
  const citiesBtn = document.getElementById('lookup-cities');
  const input = document.getElementById('country');
  const result = document.getElementById('result');

  function lookup(type) {
    const country = encodeURIComponent(input.value.trim());
    let url = 'world.php?country=' + country;

    if (type === 'cities') {
      url += '&lookup=cities';
    }

    fetch(url)
      .then(response => response.text())
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        result.textContent = 'Something went wrong: ' + error;
      });
  }

  lookupBtn.addEventListener('click', function () {
    lookup('country');
  });

  citiesBtn.addEventListener('click', function () {
    lookup('cities');
  });
});