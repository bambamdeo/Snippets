var MyDate = new Date();
var MyDateString;

MyDate.setDate(MyDate.getDate() + 20);

MyDateString = ('0' + MyDate.getDate()).slice(-2) + '/'
             + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/'
             + MyDate.getFullYear();
