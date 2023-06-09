/**
 * Create and return the Mur icon element.
 * @returns {HTMLDivElement} The Mur icon wrapper element.
 */
function createMurIcon() {
  const murIconWrapper = document.createElement('div');
  murIconWrapper.id = 'mur-icon-wrapper';

  const murIcon = document.createElement('img');
  murIcon.src = 'data:image/png;base64,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';
  murIcon.id = 'mur-icon';

  murIconWrapper.appendChild(murIcon);

  return murIconWrapper;
}

/**
 * Create and return the Mur popup element.
 * @param {HTMLDivElement} murIconWrapper - The Mur icon wrapper element.
 * @returns {HTMLDivElement} The Mur popup element.
 */
function createMurPopup(murIconWrapper) {
  const murPopup = document.createElement('div');
  murPopup.id = 'mur-popup';

  const dataVoids = [
    'data void',
    'vitamin k',
    'underwater basket weaving'
  ];
  
  const searchTerm = document.querySelector('input[name="q"]').value;
  
  if (dataVoids.some(dataVoid => searchTerm.includes(dataVoid))) {
    const popupContent = `
      <h1>Data Voids!!!</h1>
      <p>
        Be careful! Your search for "${searchTerm}" may lead you to incomplete or biased information. <a href="https://example.com" target="_blank">Click here</a> for more information.
      </p>
      <button id="mur-close-button">Close</button>
    `;
    murPopup.innerHTML = popupContent;
    murIconWrapper.classList.add('mur-has-data-void'); // Add a class to the Mur icon wrapper
    murPopup.classList.add('mur-has-data-void'); // Add a class to the Mur popup
    toggleMurPopup(murIconWrapper, murPopup); // show the popup automatically
  } else {
    const popupContent = `
      <h1>Mur - User Responsibility Guide</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="https://example.com" target="_blank">Click here</a> for more information.
      </p>
      <button id="mur-close-button">Close</button>
    `;
    murPopup.innerHTML = popupContent;
  }

  // Add the event listener for the close button after the content is added
  murPopup.querySelector('#mur-close-button').addEventListener('click', () => {
    toggleMurPopup(murIconWrapper, murPopup);
  });

  return murPopup;
}



/**
 * Position the Mur icon and popup elements on the page.
 * @param {HTMLDivElement} murIconWrapper - The Mur icon wrapper element.
 * @param {HTMLDivElement} murPopup - The Mur popup element.
 */
function positionMurElements(murIconWrapper, murPopup) {
  const targetElement = document.querySelector('.logo');
  targetElement.appendChild(murIconWrapper);

  const rect = murIconWrapper.getBoundingClientRect();
  murPopup.style.top = `${rect.bottom + window.scrollY + 5}px`;
  murPopup.style.left = `${rect.left}px`;
}

/**
 * Toggle the display of the Mur popup element.
 * @param {HTMLDivElement} murIconWrapper - The Mur icon wrapper element.
 * @param {HTMLDivElement} murPopup - The Mur popup element.
 */
function toggleMurPopup(murIconWrapper, murPopup) {
  if (murPopup.style.display === 'none') {
    const murIconWrapperRect = murIconWrapper.getBoundingClientRect();
    // murPopup.style.top = murIconWrapperRect.top + 'px';
    // murPopup.style.left = murIconWrapperRect.left + 'px';
    murPopup.style.top = '101.5px';
    murPopup.style.left = '56px';
    murPopup.style.display = 'block';
    murIconWrapper.classList.add('mur-active');
  } else {
    murPopup.style.display = 'none';
    murIconWrapper.classList.remove('mur-active');
  }
}

/**
 * Initialize the Chrome extension by creating and positioning the Mur elements.
 */
function init() {
  const murIconWrapper = createMurIcon();
  const murPopup = createMurPopup(murIconWrapper);
  document.body.appendChild(murIconWrapper);
  document.body.appendChild(murPopup);

  positionMurElements(murIconWrapper, murPopup);

  murIconWrapper.addEventListener('click', () => {
    toggleMurPopup(murIconWrapper, murPopup);
  });

  // show the popup automatically for data voids
  const dataVoids = [
    'data void',
    'underwater basket weaving',
    'vitamin k'
  ];
  const searchTerm = document.querySelector('input[name="q"]').value;
  if (dataVoids.some(dataVoid => searchTerm.includes(dataVoid))) {
    toggleMurPopup(murIconWrapper, murPopup);
  }
}

init();
