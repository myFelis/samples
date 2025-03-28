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

const showResult = (data) => {
    let html = '';
    for (const [key, value] of Object.entries(data)) {
        if (Array.isArray(value)) continue;
        const isValue = typeof value === 'string' && value.startsWith('http')
                    ? `<a href="${value}" target="_blank">${value}</a>`
                    : value
        html += `
            <div class="result-item">
                <strong>${key.replace(/_/g, ' ').toUpperCase()}:</strong>
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

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const entityType = entityTypeElement.value;
    const entityId = entityIdElement.value;

    if (!entityType) {
        showError('Please select entity type');
        return;
    }

    if (entityId < 1 || entityId > 10) {
        showError('ID must be between 1 and 10');
        return;
    }

    try {
        showLoading();
        const responseUrl = `${entityType}/${entityId}/`
        const response = await fetch(`https://swapi.py4e.com/api/${responseUrl}`);

        const data = await handleResponse(response);
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