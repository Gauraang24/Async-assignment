document.getElementById('asyncButton').addEventListener('click', async () => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = "Loading...";

    try {
        const posts = await fetchData();
        outputDiv.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('p');
            postElement.textContent = post.title;
            outputDiv.appendChild(postElement);
        });
    } catch (error) {
        outputDiv.innerText = "Error: " + error.message;
    }
});

async function fetchData() {
    const response = await fetch('https://dummyjson.com/posts');
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.posts;
}
