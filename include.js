function includeHTML() {
    const elements = document.querySelectorAll('[data-include-html]');
    elements.forEach((el) => {
        const file = el.getAttribute('data-include-html');
        fetch(file)
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then((data) => {
                el.innerHTML = data;
                el.removeAttribute('data-include-html');
                includeHTML(); // Call again to handle nested includes
            })
            .catch((error) => console.error('Error loading include file:', error));
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);
