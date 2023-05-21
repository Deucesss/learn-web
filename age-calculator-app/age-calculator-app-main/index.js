const inputList = document.querySelector(".input-list");

const inputEntries = document.querySelector(".input-entry");

const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const labels = document.querySelectorAll("form > label");
const dayError = document.querySelector(".day-msg");
const monthError = document.querySelector(".month-msg");
const yearError = document.querySelector(".year-msg");

const outputYears = document.querySelector(".output.years");
const outputMonths = document.querySelector(".output.months");
const outputDays = document.querySelector(".output.days");

let btnSubmit = document.querySelector(".image-button");

btnSubmit.addEventListener("click", validateForm);

const EMPTY_FIELD_MSG = "This field is required";

let errMsgs = {
  day: "",
  month: "",
  year: "",
};

function validateForm() {
  let day = dayInput.value;
  let month = monthInput.value;
  let year = yearInput.value;
  btnSubmit.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--color-purple");

  if (
    isFilled(day, month, year) &&
    isDayOfMonthInRange(day) &&
    isMonthInRange(month) &&
    isDayValid(day, month, year) &&
    isDayBeforeToday(day, month, year)
  ) {
    normalState();
    compute(day, month, year);
  } else {
    errorState();
  }
}

function isFilled(day, month, year) {
  let result = true;
  if (day.length == 0) {
    errMsgs.day = EMPTY_FIELD_MSG;
    result = false;
  } else {
    errMsgs.day = "";
  }
  if (month.length == 0) {
    errMsgs.month = EMPTY_FIELD_MSG;
    result = false;
  } else {
    errMsgs.month = "";
  }

  if (year.length == 0) {
    errMsgs.year = EMPTY_FIELD_MSG;
    result = false;
  } else {
    errMsgs.year = "";
  }

  return result;
}

function isDayOfMonthInRange(day) {
  if (day.length > 0 && day > 0 && day <= 31) {
    return true;
  }
  errMsgs.day = "Must be a valid day";
  return false;
}

function isMonthInRange(month) {
  if (month.length > 0 && month >= 1 && month <= 12) {
    return true;
  }
  errMsgs.month = "Must be a valid month";
  return false;
}

function isDayValid(day, month, year) {
  let dateRegex =
    /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;
  let result = dateRegex.test(`${day}/${month}/${year}`);
  console.log(result);
  console.log(`${day}/${month}/${year}`);
  if (!result) {
    errMsgs.day = "Must be a valid date";
    errMsgs.month = "Must be a valid date";
    errMsgs.year = "Must be a valid date";
  } else {
    errMsgs.day = "";
    errMsgs.month = "";
    errMsgs.year = "";
  }
  return result;
}

function isDayBeforeToday(day, month, year) {
  const now = new Date();
  const pastDate = new Date(year, month - 1, day);
  if (now.getTime() <= pastDate.getTime()) {
    errMsgs.day = "Must be a valid date";
    errMsgs.month = "Must be a valid date";
    errMsgs.year = "Must be a valid date";
    return false;
  } else {
    errMsgs.day = "";
    errMsgs.month = "";
    errMsgs.year = "";
    return true;
  }
}
/**
 * compute date from today
 * @param {*} day
 * @param {*} month
 * @param {*} year
 */
function compute(day, month, year) {
  let now = new Date();
  let dob = new Date(year, month - 1, day);
  const diff = now - dob;
  const yearInMs = 365.25 * 24 * 60 * 60 * 1000;
  const monthInMs = 30.4375 * 24 * 60 * 60 * 1000;
  const dayInMs = 24 * 60 * 60 * 1000;

  // Calculate the number of years, months, and days
  const years = Math.floor(diff / yearInMs);
  const months = Math.floor((diff % yearInMs) / monthInMs);
  const days = Math.floor(((diff % yearInMs) % monthInMs) / dayInMs);
  outputYears.textContent = years;
  outputMonths.textContent = months;
  outputDays.textContent = days;
}

let elements = document.querySelectorAll(".input-list *");

function normalState() {
  elements.forEach((element) => {
    element.classList.remove("error");
  });
  errorMsgs();
}

function errorState() {
  let elements = document.querySelectorAll(".input-list *");
  elements.forEach((element) => {
    element.classList.add("error");
  });
  errorMsgs();
}

/*
 * show error messages if not empty.
 */
function errorMsgs() {
  if (errMsgs.day.length > 0) {
    dayError.classList.remove("hidden");
    dayError.textContent = errMsgs.day;
  } else {
    dayError.classList.add("hidden");
    dayError.textContent = "";
  }

  if (errMsgs.month.length > 0) {
    monthError.classList.remove("hidden");
    monthError.textContent = errMsgs.month;
  } else {
    monthError.classList.add("hidden");
    monthError.textContent = "";
  }

  if (errMsgs.year.length > 0) {
    yearError.classList.remove("hidden");
    yearError.textContent = errMsgs.year;
  } else {
    yearError.classList.add("hidden");
    yearError.textContent = "";
  }
}
