

var leapYear = function(year){
    if (isNaN(year) || year==null) {
        console.log(`${year} is invalid data`);
    } else {
        if ((year%4==0 && year%100==0) || year%400==0) {
            console.log(`year ${year} is leap year`);
        }
        else{
            console.log(`year ${year} is not leap year`);
        }

    }
}

leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("twenty twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);