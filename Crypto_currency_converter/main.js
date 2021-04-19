const cryptoRate = document.querySelector('.convert');
        cryptoRate.addEventListener('click', getPrice);

        function getPrice() {
            const secondInput = document.querySelector('.second-input');
            const firstOption = document.querySelector('.first-option').value;
            const secondOption = document.querySelector('.second-option').value;
            const url = `https://api.cryptonator.com/api/ticker/${firstOption}-${secondOption}`;

            fetch(url)
                .then(response => {
                    return response.json();
                }).then(data => {
                    const firstInput = document.querySelector('.first-input').value;
                    secondInput.value = (firstInput * data.ticker.price).toFixed(2);
                });
        }