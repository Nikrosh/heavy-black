//forms
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('._form')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        let action = form.getAttribute('action')
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        event.preventDefault()
        event.stopPropagation()
        

        if (form.checkValidity()) {
          // заполним FormData данными из формы
          let formData = new FormData(form);

		  if (action) {
			// отправим данные
			let xhr = new XMLHttpRequest();
			xhr.open("POST", action);
			xhr.send(formData);


			xhr.onload = function() {
				console.log(xhr.response);
				if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
					alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
				} else { // если всё прошло гладко, выводим результат
					//form.querySelector('button').setAttribute('disabled', 'disabled');
					//form.innerHTML = xhr.response; 
					document.querySelector('body').insertAdjacentHTML('beforeend', xhr.response)
				}
			};
		  }
		  else {
			form.querySelector('[type="submit"]').setAttribute('disabled','disabled')
			document.querySelector('body').insertAdjacentHTML('beforeend',`<section class="modal__block modal__mini-block visible">
				<div class="modal__box modal__box--feedback active anim">
					<div class="modal__box-topline">
						<button class="modal__header-cross-btn modal__header-cross-btn--feedback _close"></button>
					</div>
					<h2 class="modal-title">Заявка отправлена</h2>
					<p class="modal-text">Наш менеджер свяжется с вами в ближайшее время</p>
					<button class="button _close">Хорошо</button>
				</div>
			</section>`)
			feedBackModalsAction()
		  }
        }
      }, false)
    })
})()

//masked input
let masks = document.querySelectorAll('._masked');
if (masks) {
  masks.forEach(element =>{
    IMask(
      element, {
        mask: '+{7} (000) 000-00-00'
    });
  })
}

//modal
function feedBackModalsAction() {
	let feedBackModals = document.querySelectorAll('.modal__box--feedback')
	feedBackModals.forEach(m => {
		let btns = m.querySelectorAll('._close')
		btns.forEach(btn=>{
			btn.addEventListener('click',  function(){ 
				m.classList.remove('active');
				m.parentElement.classList.remove('visible');
				m.parentElement.classList.add('invisible');
			})
		})
	})
}
feedBackModalsAction()
