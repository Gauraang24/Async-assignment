document.getElementById('callbackButton').addEventListener('click', () => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = "Result will be displayed in 5 sec...";

    simulateDelay(5000, () => {
        fetchData((posts) => {
            outputDiv.innerHTML = 'Posts :';
            posts.forEach(post => {
                const postElement = document.createElement('p');
                postElement.textContent = post.title;
                outputDiv.appendChild(postElement);
            });
        });
    });
});

function simulateDelay(delay, callback) {
    setTimeout(callback, delay);
}

function fetchData(callback) {
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => callback(data.posts))
        .catch(error => console.error('Error fetching data:', error));
}
