function createStateOptions() {
    let states = document.getElementById('state');
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
    for (let index = 0; index < stateOptions.length; index += 1) {
      let option = document.createElement('option');
      option.innerText = stateOptions[index];
      option.value = stateOptions[index];
      states.appendChild(option);
    }
  }
  window.onload = function () {
    createStateOptions();
    let submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', handleSubmit);
  
    let clearButton = document.querySelector('.clear-button');
    clearButton.addEventListener('click', clearFields)
  }
  function handleSubmit(event) {
    event.preventDefault();
  
    let validation = validateData();
  
    clearDivs();
    
    if(validation.errorQtd === 0){
      renderData();
    } else {
      validation.messages.unshift('Dados Inválidos')
  
      renderErrorMessages(validation.messages)
    }
  }
  function validateData(){
    let validationsList = {};
  
    for(let inputName in inputs){
      let isValid = validateInput(inputName);
      validationsList[inputName] = isValid;
    }
    
    let counter = 0;
    let messages = [];
  
    for(let index in validationsList){
      if(validationsList[index] === false){
        counter += 1;
      }
  
      if(validationsList[index].message){
        counter += 1;
        messages.push(validationsList[index].message);
      }
    }
  
    return {
      errorQtd: counter,
      messages,
    }
  }
  function validateInput(inputName){
    let inputType = inputs[inputName].type;
    let input = document.querySelector(`[name=${inputName}]`)
  
    if(inputType){
      let validationFunction = validationStrategies[inputType];
      return validationFunction(input, inputName);
    }
  
    return validationStrategies.default(input, inputName);
  }
  let validationStrategies = {
    default: defaultValidation,
    date: dateValidation,
    select: selectValidation,
    radio: radioValidation,
  }
  function defaultValidation(input, name){
    let trimmed = input.value.trim();
    let validation = inputs[name];
  
    if(validation.required && trimmed.length === 0){
      return false;
    }
  
    if(validation.maxLength && trimmed.length > validation.maxLength){
      return false;
    }
    
    return true;
  }
  function dateValidation(input, name){
    if(input.value.length === 0){
      return {
        message: 'A data não foi preenchida!'
      }
    }
  
    let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    
    if(!regex.test(input.value)){
      return {
        message: 'Data: Formato inválido'
      };
    }
  
    let splitted = input.value.split('/');
    let day = splitted[0];
    let month = splitted[1];
    let year = splitted[2];
  
    if(day < 0 || day > 30){
      return {
        message: 'Dia inválido'
      };
    }
  
    if(month < 0 || month > 12){
      return {
        message: 'Mês inválido'
      }
    }
  
    if(year < 0) {
      return {
        message: 'Ano inválido'
      };
    }
  
    return true;
  }
  function dateValidation(input, name){
    if(input.value.length === 0){
      return {
        message: 'A data não foi preenchida!'
      }
    }
  
    let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    
    if(!regex.test(input.value)){
      return {
        message: 'Data: Formato inválido'
      };
    }
  
    let splitted = input.value.split('/');
    let day = splitted[0];
    let month = splitted[1];
    let year = splitted[2];
  
    if(day < 0 || day > 30){
      return {
        message: 'Dia inválido'
      };
    }
  
    if(month < 0 || month > 12){
      return {
        message: 'Mês inválido'
      }
    }
  
    if(year < 0) {
      return {
        message: 'Ano inválido'
      };
    }
  
    return true;
  }