var penumpang = []; 
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if(penumpang.length == 0){
    penumpang.push(namaPenumpang);
    return penumpang;

  }else{
    for (i=0; i<penumpang.length; i++){
        if(penumpang[i] == undefined) {
            penumpang[i] = namaPenumpang;
            return penumpang;

    }else if (penumpang[i] == namaPenumpang){
        console.log('penumpang tersebut sudah ada didalam angkot.');
        return penumpang;
    
    }else if(i == penumpang.length - 1){
        penumpang.push(namaPenumpang);
        return penumpang;
    }
    }
  }
 
}                                                             



  














































// var angka = [1, 2, 6, 4, 7, 10, 20, 30, 12, 8, 3, 5,]
// var angka2 = angka.find(function (x) {
//    return x < 5 || x > 20;
// });
// console.log(angka2.join(" - "));
