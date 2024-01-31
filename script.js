document.addEventListener('DOMContentLoaded', function() {
    fetchJoke(); 
    setInterval(fetchJoke, 10000); 
});

function fetchJoke() {
    const jokeText = document.getElementById('jokeText');
    jokeText.innerText = 'Loading joke...';

    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(data => {
            jokeText.innerText = data.joke;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            jokeText.innerText = 'Error fetching joke';
        });
}
 