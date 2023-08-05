class FormValidation extends HTMLElement {
  constructor() {
    super();
    const inputElement = this.querySelector('#FormInput');

    inputElement.addEventListener('input', () => {
      if (inputElement.value.trim() === '') {
        inputElement.style.border = '2px solid red';
      } else {
        inputElement.style.border = '2px solid green';
      }
    });
  }
}

customElements.define('form-validation', FormValidation);