const submit = document.querySelector('button');

    submit.addEventListener('click', function () {
        const inputEl = document.querySelector('.form-control').value;
        const ulEl = document.querySelector('ul');

        const url = `https://api.github.com/users/${inputEl}/repos`;

        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(repo => {

            console.log(repo.html_url);

            const liEl = document.createElement('li');
            const aEl = document.createElement('a');
            liEl.classList.add('list-group-item');
            aEl.href = repo.html_url;
            aEl.innerHTML = repo.name;
            liEl.append(aEl);
            ulEl.append(liEl);
            });
        })
    });