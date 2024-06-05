function loadAccordionItems() {
    const accordionContainer = document.getElementById('faq-accordion');
    if (!accordionContainer) return;

    accordionData.forEach((item, index) => {
        const itemElement = createAccordionItem(item, index === 0);
        accordionContainer.appendChild(itemElement);
    });
}

// Helper function to create a single accordion item
function createAccordionItem(item, isActive) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'accordion-item';

    const header = document.createElement('h2');
    header.className = 'accordion-header';

    const button = document.createElement('button');
    button.className = `accordion-button ${!isActive ? 'collapsed' : ''}`;
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', `#${item.id}`);
    button.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    button.setAttribute('aria-controls', item.id);
    button.textContent = item.title;

    const collapseDiv = document.createElement('div');
    collapseDiv.id = item.id;
    collapseDiv.className = `accordion-collapse collapse ${isActive ? 'show' : ''}`;
    collapseDiv.setAttribute('data-bs-parent', '#faq-accordion');

    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'accordion-body';
    bodyDiv.textContent = item.content;

    collapseDiv.appendChild(bodyDiv);
    header.appendChild(button);
    itemDiv.appendChild(header);
    itemDiv.appendChild(collapseDiv);

    return itemDiv;
}

// Event listeners to handle window load and dynamic adjustments if necessary
document.addEventListener('DOMContentLoaded', loadAccordionItems);
