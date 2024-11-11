const vanClasses = {
  first: "first",
  second: "second",
  third: "third",
  fourth: "fourth",
};

function showDate(timestamp) {
  let d = new Date(timestamp);
  let timeStampCon =
    d.getUTCDate() + "." + d.getUTCMonth() + 1 + "." + d.getUTCFullYear();
  return timeStampCon;
}

function showTime(timestamp) {
  let d = new Date(timestamp);
  let timeStampCon = d.getHours() + ":" + d.getMinutes();
  return timeStampCon;
}

const makeArgs = (list) => {
  let args = "";
  for (let key in list) {
    if (list[key] !== "" && list[key]) {
      args = args + `${key}=${list[key]}&`;
    }
  }
  return args.slice(0, -1);
};

function showDuration(time) {
  let hours = Math.floor(time / 60 / 60);
  let min = (time / 60) % 60;
  let timeStamp = hours + ":" + min;

  return timeStamp;
}

function showDurationHours(time) {
  let hours = Math.floor(time / 60 / 60);
  return hours;
}

function showDurationMinutes(time) {
  let min = (time / 60) % 60;
  return min;
}

const showPrice = (arg) => {
  if (arg === undefined) {
    return;
  }
  return arg.bottom_price;
};

const showSeats = (arg) => {
  return arg > 0 ? arg : 0;
};

const sortByTime = (arr) => {
  let arr2 = arr.slice().sort((a, b) => {
    if (a.departure.from.datetime > b.departure.from.datetime) {
      return 1;
    }
    if (a.departure.from.datetime < b.departure.from.datetime) {
      return -1;
    }
    return 0;
  });
  return arr2;
};
const sortByPrice = (arr) => {
  let arr2 = arr.slice().sort((a, b) => {
    if (a.min_price > b.min_price) {
      return 1;
    }
    if (a.min_price < b.min_price) {
      return -1;
    }
    return 0;
  });
  return arr2;
};
const sortByDuration = (arr) => {
  let arr2 = arr.slice().sort((a, b) => {
    if (a.departure.duration > b.departure.duration) {
      return 1;
    }
    if (a.departure.duration < b.departure.duration) {
      return -1;
    }
    return 0;
  });
  return arr2;
};

const drowVansList = (filterVansList) => {
  if (filterVansList.length === 0 || !filterVansList.length) {
    return;
  }
  let obj = {};
  for (let i = 0; i < filterVansList.length; i++) {
    i === 0 ? (obj[i] = true) : (obj[i] = false);
  }
  return obj;
};

const drowNumber = (index, typeVan) => {
  const shemeNum = {
    first: 1,
    second: 6,
    third: 11,
    fourth: 16,
  };
  return shemeNum[typeVan] + index;
};

const filterVans = (result, typeVan) => {
  let arr = result.filter((item) => item.coach.class_type === typeVan);
  return arr.map((item) => ({ ...item, checked: true }));
};

const seatToggle = (arr, elem) => {
  if (arr.indexOf(elem) === -1) {
    return arr.push({ num: elem });
  } else {
    return arr.filter((item) => item.num !== elem);
  }
};

export {
  showDate,
  showTime,
  showDuration,
  showDurationHours,
  showDurationMinutes,
  showPrice,
  showSeats,
  drowVansList,
  drowNumber,
  filterVans,
  sortByTime,
  sortByPrice,
  sortByDuration,
  makeArgs,
  seatToggle
};
export { vanClasses };