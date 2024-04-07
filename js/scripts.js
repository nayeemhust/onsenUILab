if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .catch(function (error) {
      console.log('Service Worker failed to register:', error);
    });
} else {
  console.log('Service Worker is not supported by this browser.');
}

function aboutUsClick(pageName) {
  var myNavigator = document.getElementById('my-navigator');
  myNavigator.pushPage(pageName);
}

function goBackClick(pageName) {
  var myNavigator = document.getElementById('my-navigator');
  myNavigator.pushPage(pageName);
}

function loadPage() {
  var myNavigator = document.getElementById('my-navigator');
  myNavigator.pushPage('about.html');
}

function navigateTo(pageName) {
  var myNavigator = document.getElementById('my-navigator');
  myNavigator.resetToPage(pageName);
}

function submitForm() {
  var nameInput = document.querySelector('#name input'),
      emailInput = document.querySelector('#email input');
  if (!nameInput.checkValidity() || !emailInput.checkValidity()) {
    ons.notification.toast('Please fill all the required fields.', { timeout: 2000 });
    return;
  }

  nameInput.value = '';
  emailInput.value = '';
  document.querySelector('ons-checkbox[name="checkbox"] input').checked = false;
  document.querySelector('ons-radio[name="radio"] input').checked = false;
  document.querySelector('ons-select select').selectedIndex = 0;

  displaySuccessMessage();
}

function displaySuccessMessage() {
  hideSuccessMessage();
  var successMessage = document.createElement('div');
  successMessage.textContent = 'Form Submitted Successfully';
  successMessage.style.cssText = 'font-size: 24px; text-align: center; color: green';
  successMessage.id = 'success';
  document.querySelector('#setting-form ons-button').parentNode.appendChild(successMessage);
}

function hideSuccessMessage() {
  var existingSuccessMessage = document.querySelector('#success');
  if (existingSuccessMessage) {
    existingSuccessMessage.parentNode.removeChild(existingSuccessMessage);
  }
}





