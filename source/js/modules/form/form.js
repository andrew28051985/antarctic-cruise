const validityEmail = /^[A-Za-z0-9]{1,19}@[A-Za-z0-9]{1,19}.{1,20}$/;
const validityInputNumber = /^[0-9]{1,20}$/;
const bookingForm = document.querySelector('.booking__form');
const inputPhone = bookingForm.querySelector('#phone');
const inputEmail = bookingForm.querySelector('#email');
const MIN_LENGTH_PHONE = 5;
const MAX_LENGTH_PHONE = 11;
const URL_SERVER = 'https://echo.htmlacademy.ru';

const onInputValueMissing = (evt) => {
  const field = evt.target;
  if (field.validity.valueMissing) {
    field.setCustomValidity('Заполните обязательное поле');
    setFormError(field);
  }
};

const onInputValueError = (evt) => {
  const field = evt.target;
  setFormError(field);
};

const setFormError = (nameInput) => {
  nameInput.classList.add('invalid');
};

const setFormValidityOk = (evt) => {
  const field = evt.target;
  field.classList.remove('invalid');
};

const validityForm = (namePhone, nameEmail) => {
  namePhone.addEventListener('input', (evt) => {
    const lengthInputPhone = namePhone.value.length;

    if (!validityInputNumber.test(namePhone.value)) {
      onInputValueError(evt);
      namePhone.setCustomValidity('Номера телефона должен содержать только цыфры');
    } else if (lengthInputPhone < MIN_LENGTH_PHONE) {
      onInputValueError(evt);
      namePhone.setCustomValidity(`Еще нужно ввести минимум ${MIN_LENGTH_PHONE - lengthInputPhone} цыфр`);
    } else if (lengthInputPhone > MAX_LENGTH_PHONE) {
      onInputValueError(evt);
      namePhone.setCustomValidity(`Нужно удалить ${lengthInputPhone - MAX_LENGTH_PHONE} цыфр`);
    } else {
      namePhone.setCustomValidity('');
      setFormValidityOk(evt);
    }
    namePhone.reportValidity();
  });
  nameEmail.addEventListener('input', (evt) => {
    if (!validityEmail.test(nameEmail.value)) {
      onInputValueError(evt);
      nameEmail.setCustomValidity('Введите корректный Email');
    } else {
      nameEmail.setCustomValidity('');
      setFormValidityOk(evt);
    }
    nameEmail.reportValidity();
  });

  namePhone.addEventListener('invalid', onInputValueMissing, true);
  nameEmail.addEventListener('invalid', onInputValueMissing, true);
};

const reset = (nameForm) => {
  const formInputs = nameForm.querySelectorAll('input');
  formInputs.forEach((input) => {
    input.value = '';
  });
};

const openErrorAlert = (nameForm) => {
  const alertText = document.createElement('p');

  alertText.classList.add('error');
  alertText.textContent = 'Ошибка отправки данных!';
  nameForm.append(alertText);
  const errorTrue = nameForm.querySelectorAll('.error');
  if (errorTrue.length > 1) {
    alertText.remove();
  }
};

const sendData = ((body, onSuccess, onFail) => {
  fetch(URL_SERVER, {method: 'POST', body}
  ).then((responce) => {
    if (responce.ok) {
      onSuccess();
    } else {
      onFail();
    }
  }).catch(() => {
    onFail();
  });
});

const sendUserFormData = (nameForm) => {
  nameForm.addEventListener('submit', (evt) => {
    const field = evt.target;
    evt.preventDefault();
    sendData(new FormData(field), () => reset(nameForm), () => openErrorAlert(nameForm));
  });
};

export {validityForm, sendUserFormData, bookingForm, inputPhone, inputEmail};
