function forms() {
  let mainForms = document.querySelectorAll('.main_form'),
      formInput = document.querySelectorAll('.form_input'),
      message = {
        sending: 'Выполняется отправка...',
        success: 'Данные успешно отправлены!',
        failure: 'Что-то пошло не так...'
      },
      statusMessage = document.createElement('div'),
      popupForm = document.querySelector('.popup .form'),
      popupEngineerForm = document.querySelector('.popup_engineer .form'),
      calcEndForm = document.querySelector('.popup_calc_end .form');
      statusMessage.classList.add('status-message');

  for (let i = 0; i < formInput.length; i++) {
    if (formInput[i].getAttribute('name') === 'user_phone') {
      formInput[i].addEventListener('keyup', function () {
          if (this.value.length > 11) {
            this.value = this.value.substring(0, 12);
          }
        this.value = this.value.replace(/[^0-9]+/g, '');
      });
    }
  }

  mainForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      Send(form);
    })
  });

  popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    Send(popupForm);
  });

  popupEngineerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    Send(popupEngineerForm);
  });

  calcEndForm.addEventListener('submit', (event) => {
    event.preventDefault();
    Send(calcEndForm);
  });

  function Send(form) {
    let SendForm = form,
        SendFormInput = SendForm.querySelectorAll('input');

    SendForm.appendChild(statusMessage);

    let formData = new FormData(SendForm);

    function postData() {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        
        let obj = {};
        formData.forEach(function (value, key) {
          obj[key] = value;
        });
              
        let json = JSON.stringify(obj);
        request.send(json);

        request.addEventListener('readystatechange', function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4 && request.status == 200) {
            resolve();
          } else {
            reject();
          }
        });
      });
    }

    function clearInput() {
      SendFormInput.forEach((input) => {
        input.value = '';
      });
    }

    postData()
      .then(() => statusMessage.innerHTML = message.sending)
      .then(() => statusMessage.innerHTML = message.success)
      .catch(() => statusMessage.innerHTML = message.failure)
      .then(clearInput());
  }    
}

module.exports = forms;

