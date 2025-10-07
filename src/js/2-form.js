const formData = {
    email: '',
    message: '',
}

const Storage_Key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const userEmail = form.querySelector('input');
const textarea = form.querySelector('textarea');
populateForm();

form.addEventListener('input', saveData);

function saveData() {
    formData.email = userEmail.value.trim();
    formData.message = textarea.value.trim();
    localStorage.setItem(Storage_Key, JSON.stringify(formData));
} ;

function populateForm() {
    const restoreForm = JSON.parse(localStorage.getItem(Storage_Key));   
    if (restoreForm) {
        userEmail.value = restoreForm.email || '';
        textarea.value = restoreForm.message || '';
        formData.email = restoreForm.email || '';
        formData.message = restoreForm.message || '';
    }
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();

    if (!userEmail.value.trim() || !textarea.value.trim()) {
        return alert ('Fill please all fields');
    }
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(Storage_Key);
    
    formData.email = '';
    formData.message = '';
}
