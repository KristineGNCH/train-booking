const coachClasses = {
  sitting: "sitting",
  reserved: "reserved",
  compartment: "compartment",
  luxe: "luxe",
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

const drowCoachList = (filterCoachList) => {
  if (filterCoachList.length === 0 || !filterCoachList.length) {
    return;
  }
  let obj = {};
  for (let i = 0; i < filterCoachList.length; i++) {
    i === 0 ? (obj[i] = true) : (obj[i] = false);
  }
  return obj;
};

const drowNumber = (index, coachType) => {
  const shemeNum = {
    first: 1,
    second: 6,
    third: 11,
    fourth: 16,
  };
  return shemeNum[coachType] + index;
};

const filterCoach = (result, coachType) => {
  let arr = result.filter((item) => item.coach.class_type === coachType);
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
  drowCoachList,
  drowNumber,
  filterCoach,
  sortByTime,
  sortByPrice,
  sortByDuration,
  makeArgs,
  seatToggle,
};
export { coachClasses };
