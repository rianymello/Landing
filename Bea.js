const popup = document.querySelector('.popup-wrapper');
const inputName = document.querySelector("#name");

    document.querySelectorAll('.cada-servico').forEach((servico) =>
  servico.addEventListener("click", (event) => {
    popup.style.display ='block' ;
  })
);


popup.addEventListener('click',event => {
  const classNameOfClickedElement = event.target.classList[0]
  const classNames = ['popup-close', 'popup-botao', 'popup-wrapper']
  const sholdClosePopup = classNames.some(className => className === classNameOfClickedElement)

  if (sholdClosePopup) {
     popup.style.display ='none' ;
  }
});