const calendarModal = document.querySelector('.calendar');
const modalInnerCalendar = document.querySelector('.calendar-inner');
const openCalendarCheckIn = document.querySelector('#check-in');
const openCalendarCheckOut = document.querySelector('#check-out');

function clickCalendarBtn(inOrOut) {
  inOrOut.addEventListener('click', (e) => {
    e.preventDefault();
    calendarModal.classList.add('active');
    modalInnerCalendar.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (e.target === calendarModal) {
      calendarModal.classList.remove('active');
      modalInnerCalendar.classList.remove('active');
    }
  });
}

clickCalendarBtn(openCalendarCheckIn);
clickCalendarBtn(openCalendarCheckOut);

const Cal = function (divId) {
  this.divId = divId;
  this.DaysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  this.Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = new Date();
  this.currMonth = d.getMonth('9');
  this.currYear = d.getFullYear('22');
  this.currDay = d.getDate('3');
};

Cal.prototype.nextMonth = function () {
  if (this.currMonth === 11) {
    this.currMonth = 0;
    this.currYear += 1;
  } else {
    this.currMonth += 1;
  }
  this.showCurrentMonth();
};

Cal.prototype.previousMonth = function () {
  if (this.currMonth === 0) {
    this.currMonth = 11;
    this.currYear -= 1;
  } else {
    this.currMonth -= 1;
  }
  this.showCurrentMonth();
};

Cal.prototype.showCurrentMonth = function () {
  this.showMonthYear(this.currYear, this.currMonth);
};

Cal.prototype.showMonthYear = function (y, m) {
  const d = new Date();
  const firstDayOfMonth = new Date(y, m, 7).getDay();
  const lastDateOfMonth = new Date(y, m + 1, 0).getDate();
  const lastDayOfLastMonth =
    m === 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();

  let html = '<table>';
  html += '<thead><tr>';
  html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';

  html += '<tr class="days">';
  for (let i = 0; i < this.DaysOfWeek.length; i++) {
    html += '<td>' + this.DaysOfWeek[i] + '</td>';
  }
  html += '</tr>';
  let i = 1;
  do {
    let dow = new Date(y, m, i).getDay();

    if (dow === 1) {
      html += '<tr>';
    } else if (i === 1) {
      html += '<tr>';
      let k = lastDayOfLastMonth - firstDayOfMonth + 1;
      for (let j = 0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    const chk = new Date();
    const chkY = chk.getFullYear();
    const chkM = chk.getMonth();
    if (chkY === this.currYear && chkM === this.currMonth && i === this.currDay) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    if (dow === 0) {
      html += '</tr>';
    } else if (i === lastDateOfMonth) {
      let k = 1;
      for (dow; dow < 7; dow++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }
    i++;
  } while (i <= lastDateOfMonth);

  html += '</table>';

  document.getElementById(this.divId).innerHTML = html;
};

function getId(id) {
  return document.getElementById(id);
}

window.onload = function () {
  const c = new Cal('divCal');
  c.showCurrentMonth();

  getId('btnNext').onclick = function () {
    c.nextMonth();
  };
  getId('btnPrev').onclick = function () {
    c.previousMonth();
  };
};
