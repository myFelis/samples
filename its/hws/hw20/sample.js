const UI_ELEMENTS = {
  CONT: document.getElementById('postsContainer'),
}

      // Функция для создания HTML-разметки поста
function createPostMarkup(post) {
    return `
        <article class="post-card">
            <h2 class="post-title">Post ${post.id}: ${post.title}</h2>
            <p class="post-body">${post.body}</p>
        </article>
    `;
}

async function addPostToContainer(container, markup) {
    container.insertAdjacentHTML('beforeEnd', markup);
}

async function fetchAndShowPosts() {
    const container = UI_ELEMENTS.CONT;
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        // clean before the loading
        container.innerHTML = '';
        
        posts.forEach(post => {
            const postMarkup = createPostMarkup(post);
            addPostToContainer(container, postMarkup);
        });
    } catch (error) {
        container.innerHTML = '<div class="loading">Error loading posts. Please try again later.</div>';
        console.error('Error fetching posts:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchAndShowPosts);
