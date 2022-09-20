class calendar {
  constructor(elem) {
    this.elem = elem;
    this.DaysOfWeek = [
      'Пн',
      'Вт',
      'Ср',
      'Чтв',
      'Птн',
      'Суб',
      'Вск'
    ];
    this.Months =['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let d = new Date();
    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();
    /*let arr = document.querySelectorAll('.text-field-input');
    for (let elem of arr) {
      elem.addEventListener('focus', this.handleTextFieldInputFocus);
      elem.addEventListener('blur', this.handleTextFieldInputBlur);
    }*/

  }

  nextMonth() {
    if ( this.currMonth == 11 ) {
      this.currMonth = 0;
      this.currYear = this.currYear + 1;
    }
    else {
      this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
  }
  previousMonth() {
    if ( this.currMonth == 0 ) {
      this.currMonth = 11;
      this.currYear = this.currYear - 1;
    }
    else {
      this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
  }
  showcurr() {
    this.showMonth(this.currYear, this.currMonth);
  }
  showMonth(y, m) {
    let d = new Date();
    // Первый день недели в выбранном месяце 
    let firstDayOfMonth = new Date(y, m, 7).getDay();
    // Последний день выбранного месяца
    let lastDateOfMonth =  new Date(y, m+1, 0).getDate();
    // Последний день предыдущего месяца
    let lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
  var html = '<table>';
  // Запись выбранного месяца и года
  html += '<thead><tr>';
  html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';
  // заголовок дней недели
  html += '<tr class="days">';
  for(var i=0; i < this.DaysOfWeek.length;i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';
  // Записываем дни
  var i=1;
  do {
    var dow = new Date(y, m, i).getDay();
    // Начать новую строку в понедельник
    if ( dow == 1 ) {
      html += '<tr>';
    }
    // Если первый день недели не понедельник показать последние дни предыдущего месяца
    else if ( i == 1 ) {
      html += '<tr>';
      var k = lastDayOfLastMonth - firstDayOfMonth+1;
      for(var j=0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }
    // Записываем текущий день в цикл
    var chk = new Date();
    var chkY = chk.getFullYear();
    var chkM = chk.getMonth();
    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    // закрыть строку в воскресенье
    if ( dow == 0 ) {
      html += '</tr>';
    }
    // Если последний день месяца не воскресенье, показать первые дни следующего месяца
    else if ( i == lastDateOfMonth ) {
      var k=1;
      for(dow; dow < 7; dow++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }
    i++;
  }while(i <= lastDateOfMonth);
  // Конец таблицы
  html += '</table>';
  // Записываем HTML в div
  document.getElementById(this.divId).innerHTML = html;
  }

  /*handleTextFieldInputFocus() {
    if(event.target.value == event.target.getAttribute('value')) {
      event.target.value = '';
    }
  }
  
  handleTextFieldInputBlur() {
    if(event.target.value == '') {
      event.target.value = event.target.getAttribute('value');
    }
  }*/

}

let objCalendar = new calendar();


console.log(new Date(2022, 9, 0).getDay());