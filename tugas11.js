function tugas11(){
  var x = [2,4,5,10];
  // hasil = 25; hanya dengan + * /

  var cara1 = x[3]/(x[1]/x[0])*x[2]; // 10/(4/2)*5
  var cara2 = x[1]*x[3]/x[0]+x[2]; // 4*10/2+5
  var cara3 = x[0]*x[3]/x[1]*x[2]; // 2*10/4*5

  console.log(cara1);
  console.log(cara2);
  console.log(cara3);

}

tugas11();
