document.getElementById('promiseButton').addEventListener('click', () => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = "Loading...";

    fetchData()
        .then(posts => {
            outputDiv.innerHTML = '';
            posts.forEach(post => {
                const postElement = document.createElement('p');
                postElement.textContent = post.title;
                outputDiv.appendChild(postElement);
            });
        })
        .catch(error => {
            outputDiv.innerText = "Error: " + error?.message;
        });
});

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Operation timed out"));
        }, 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then(data => resolve(data.posts))
            .catch(error => reject(error));
    });
}
