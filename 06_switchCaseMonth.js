var monthOfYear = function (month) {
  switch (month) {
    case 1:
      console.log(`${month} = january`);
      break;
    case 2:
      console.log(`${month} = february`);
      break;
    case 3:
      console.log(`${month} = march`);
      break;
    case 4:
      console.log(`${month} = april`);
      break;
    case 5:
      console.log(`${month} = may`);
      break;
    case 6:
      console.log(`${month} = june`);
      break;
    case 7:
      console.log(`${month} = july`);
      break;
    case 8:
      console.log(`${month} = august`);
      break;
    case 9:
      console.log(`${month} = september`);
      break;
    case 10:
      console.log(`${month} = october`);
      break;
    case 11:
      console.log(`${month} = november`);
      break;
    case 12:
      console.log(`${month} = december`);
      break;

    default:
      console.log(`${month} = invalid, provide valid data`);
      break;
  }
};

monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
