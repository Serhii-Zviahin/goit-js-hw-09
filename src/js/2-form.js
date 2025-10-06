const formData = {
    email: '',
    message: '',
}

const Storage_Key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const userEmail = form.querySelector('input');
const textarea = form.querySelector('textarea');
populateForm();

userEmail.addEventListener('input', saveData);
textarea.addEventListener('input', saveData);

function saveData() {
    formData.email = userEmail.value.trim();
    formData.message = textarea.value.trim();
    localStorage.setItem(Storage_Key, JSON.stringify(formData));
} ;

function populateForm() {
    const restoreForm = JSON.parse(localStorage.getItem(Storage_Key));
    if (!restoreForm) {
        return;
    }
    if (restoreForm.email) {
        userEmail.value = restoreForm.email || '';
    } if (restoreForm.message) {
        textarea.value = restoreForm.message || '';
    }
}

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
    event.preventDefault();
    const restoreForm = JSON.parse(localStorage.getItem(Storage_Key));
    if (!restoreForm.email) {
        return alert ('Fill please all fields');
    }
    if (!restoreForm.message) {
        return alert ('Fill please all fields');
    }
    event.currentTarget.reset();
    localStorage.removeItem(Storage_Key);
}