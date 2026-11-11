window.addEventListener('load', function () {
  const lookupBtn = document.getElementById('lookup');
  const input = document.getElementById('country');
  const result = document.getElementById('result');

  lookupBtn.addEventListener('click', function () {
    const country = encodeURIComponent(input.value.trim());

    fetch('world.php?country=' + country)
      .then(response => response.text())
      .then(data => {
        result.innerHTML = data;
      })
      .catch(error => {
        result.textContent = 'Something went wrong: ' + error;
      });
  });
});