document.addEventListener('click', delTheDefaultValue);

let elem = document.querySelector('.text-field-input');

elem.addEventListener('blur', delTheDefaultValue2);
//elem.onblur = function() {
//  elem.value = "222";
//}

function delTheDefaultValue() {

  let i;

  if(event.target.dataset.pressing == "False") {
    //event.target.value = '';
    //event.target.dataset.pressing = "True";
    //event.target.value = "111";
    //i = event.target;
    //console.log(event.target.value);
  }


}

function delTheDefaultValue2() {
  console.log('1');
  let elem = document.querySelector('.text-field-input');
  console.log(elem.value);
  if(elem.value == '') {
    elem.value = '10000';
    console.log('2');
  }
}
