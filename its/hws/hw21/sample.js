const form = document.getElementById('searchForm');
const resultBox = document.getElementById('resultBox');
const errorBox = document.getElementById('errorBox');
const loading = document.getElementById('loading');
const entityTypeElement = document.getElementById('entityType')
const entityIdElement = document.getElementById('entityId')

const showLoading = () => {
    loading.style.display = 'block';
    resultBox.style.display = 'none';
    errorBox.style.display = 'none';
};

const entityIdFrom = 1;
const entityIdTo = 10;

const beautifyTitle = (title) => {
    return title.replace(/_/g, ' ').toUpperCase()
};

const showResult = (data) => {
    let html = '';
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) continue;

        const isLink = typeof value === 'string' && value.startsWith('http')
        const isValue = isLink ? `<a href="${value}" target="_blank">${value}</a>` : value
        html += `
            <div class="result-item">
                <strong>${beautifyTitle(key)}:</strong>
                ${isValue}
            </div>
        `;
    }
    resultBox.innerHTML = html;
    resultBox.style.display = 'block';
    errorBox.style.display = 'none';
};

const showError = (message) => {
    errorBox.textContent = message;
    errorBox.style.display = 'block';
    resultBox.style.display = 'none';
};

const handleResponse = async (response) => {
    if (!response.ok) {
        return Promise.reject({
            status: response.status,
            message: response.statusText
        });
    }
    return response.json();
};

const fetchData = async (fetchType, fetchId) => {
    const response = await fetch(`https://swapi.py4e.com/api/${fetchType}/${fetchId}/`);
    return await handleResponse(response);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const entityType = entityTypeElement.value;
    const entityId = entityIdElement.value;

    if (!entityType) {
        showError('Please select entity type');
        return;
    }

    if (entityId < entityIdFrom || entityId > entityIdTo) {
        showError(`ID must be between ${entityIdFrom} and ${entityIdTo}`);
        return;
    }

    try {
        showLoading();
        const data = await fetchData(entityType, entityId);
        showResult(data);
    } catch (error) {
        const errorMessage = error.status
            ? `Error ${error.status}: ${error.message || 'Resource not found'}`
            : 'Server is not available';
        showError(errorMessage);
    } finally {
        loading.style.display = 'none';
    }
});