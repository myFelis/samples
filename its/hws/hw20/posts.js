// const form = document.getElementById('postForm');
// const postsContainer = document.getElementById('postsContainer');

const UI_ELEMENTS = {
    CONTAINER: document.getElementById('postsContainer'),
    FORM: document.getElementById('postForm'),
    TITLE: document.getElementById('postTitle'),
    BODY: document.getElementById('postBody'),
  }


function createPost(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post-card';
    postElement.innerHTML = `
        <a>${post.userName}</a>
        <h3 class="post-title">${post.title}</h3>
        <p>${post.body}</p>
    `;
    return postElement;
}

function handleSubmit(e) {
    e.preventDefault();

    const title = UI_ELEMENTS.TITLE.value;
    const body = UI_ELEMENTS.BODY.value;
    const postData = {
            title,
            body,
            userName: "MyAwesomeName",
        }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        UI_ELEMENTS.CONTAINER.prepend(createPost(data));
        UI_ELEMENTS.FORM.reset();
    })
    .catch(error => console.error('Error:', error));
}

UI_ELEMENTS.FORM.addEventListener('submit', handleSubmit);