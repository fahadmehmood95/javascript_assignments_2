var name="fahad mehmood";
var dates=new Date();
var month=dates.getMonth();
var months_arr=["january","fabuary","march","april","may","june","july","august","september","october","november","december"];
var current_month=months_arr[month];
var no_of_units=410;
var charges_per=20;
var net_amount=no_of_units*charges_per;
var late_payment_charges=350;
var gross_amount=net_amount+late_payment_charges;

document.write("Customer Name:"+name+"<br>");
document.write("Month:"+current_month+"<br>");
document.write("Number of units :"+no_of_units+"<br>");
document.write("Charges per unit:"+charges_per+"<br>");
document.write("Net Amount Payable (with in due date):"+net_amount+"<br>");
document.write("Gross Amount Payable (after due date):"+gross_amount+"<br>");