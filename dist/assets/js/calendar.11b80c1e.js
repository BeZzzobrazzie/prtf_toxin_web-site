/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/calendar/calendar.js":
/*!*****************************************!*\
  !*** ./src/blocks/calendar/calendar.js ***!
  \*****************************************/
/***/ (() => {

eval("class calendar {\n  constructor(calendar) {\n    \n    this.calendar = calendar;\n    this.calendarMonthAndYear = calendar.querySelector('.calendar__month-and-year');\n    this.calendarBody = calendar.querySelector('.calendar__body');\n    this.arrowBack = calendar.querySelector('.calendar__arrow_back');\n    this.arrowForward = calendar.querySelector('.calendar__arrow_forward');\n\n    this.arrowBack.addEventListener('click', this);\n    this.arrowForward.addEventListener('click', this);\n\n    this.DaysOfWeek = [\n      'Пн',\n      'Вт',\n      'Ср',\n      'Чт',\n      'Пт',\n      'Сб',\n      'Вс'\n    ];\n    this.Months =['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];\n    let d = new Date();\n    this.currMonth = d.getMonth();\n    this.currYear = d.getFullYear();\n    this.currDay = d.getDate();\n\n    this.showcurr();\n  }\n\n  handleEvent(event) {\n    if(event.target == this.arrowBack) {\n      this.previousMonth();\n    }\n    else if (event.target == this.arrowForward) {\n      this.nextMonth();\n    }\n  }\n\n  nextMonth() {\n    if ( this.currMonth == 11 ) {\n      this.currMonth = 0;\n      this.currYear = this.currYear + 1;\n    }\n    else {\n      this.currMonth = this.currMonth + 1;\n    }\n    this.showcurr();    \n  }\n\n  previousMonth() {\n    if ( this.currMonth == 0 ) {\n      this.currMonth = 11;\n      this.currYear = this.currYear - 1;\n    }\n    else {\n      this.currMonth = this.currMonth - 1;\n    }\n    this.showcurr();\n  }\n\n  createCell(elementClass, content) {\n    let cell = document.createElement('td');\n    cell.classList.add('calendar__cell');\n    cell.classList.add(elementClass);\n    cell.append(content);\n\n    return cell;\n  }\n\n  showcurr() {\n    this.showMonth(this.currYear, this.currMonth);\n  }\n\n  showMonth(y, m) {\n    let d = new Date();\n    // Первый день недели в выбранном месяце \n    let firstDayOfMonth = new Date(y, m, 7).getDay();\n    // Последний день выбранного месяца\n    let lastDateOfMonth =  new Date(y, m+1, 0).getDate();\n    // Последний день предыдущего месяца\n    let lastDateOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();\n\n    let table = document.createElement('table');\n    table.classList.add('calendar__table');\n\n    // Запись выбранного месяца и года\n    let MonthsAndYear = document.createTextNode(this.Months[m] + ' ' + y);\n    this.calendarMonthAndYear.firstChild.replaceWith(MonthsAndYear);\n\n    let RowDaysOfWeek = document.createElement('tr');\n    for(let i=0; i < this.DaysOfWeek.length; i++) {\n      RowDaysOfWeek.append(this.createCell('calendar__cell_days-of-week', this.DaysOfWeek[i]));\n    }\n    table.append(RowDaysOfWeek);\n\n    // Записываем дни\n    let i=1;\n    let row;\n    do {\n      let dow = new Date(y, m, i).getDay();\n      // Начать новую строку в понедельник\n      if ( dow == 1 ) {\n        row = document.createElement('tr');\n      }\n      // Если первый день недели не понедельник показать последние дни предыдущего месяца\n      else if ( i == 1 ) {\n        row = document.createElement('tr');\n        let k = lastDateOfLastMonth - firstDayOfMonth+1;\n        for(let j=0; j < firstDayOfMonth; j++) {\n          row.append(this.createCell('calendar__cell_not-current', k));\n          k++;\n        }\n      }\n      // Записываем текущий день в цикл\n      let chk = new Date();\n      let chkY = chk.getFullYear();\n      let chkM = chk.getMonth();\n      if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {\n        row.append(this.createCell('calendar__cell_today', i));\n      } else {\n        row.append(this.createCell('calendar__cell_default', i));\n      }\n      // закрыть строку в воскресенье\n      if ( dow == 0 ) {\n        table.append(row);\n      }\n      // Если последний день месяца не воскресенье, показать первые дни следующего месяца\n      else if ( i == lastDateOfMonth ) {\n        let k=1;\n        for(dow; dow < 7; dow++) {\n          row.append(this.createCell('calendar__cell_not-current', k));\n          k++;\n        }\n        table.append(row);\n      }\n      i++;\n    }while(i <= lastDateOfMonth);\n    this.calendarBody.firstChild.replaceWith(table);\n  }\n}\n\n\nlet calend = document.querySelector('.calendar');\n\nlet objCalendar = new calendar(calend);\n\n\n\n\n//# sourceURL=webpack://webpack-template-v.2/./src/blocks/calendar/calendar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/blocks/calendar/calendar.js"]();
/******/ 	
/******/ })()
;