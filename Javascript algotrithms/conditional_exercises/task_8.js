// Üç rəqəmli Armstronq nömrəsi elə tam ədəddir ki, onun rəqəmlərinin kublarının cəmi ədədin özünə bərabər olsun. Məsələn, 371 Armstronq nömrəsidir, çünki 3**3 + 7**3 + 1**3 = 371.

let a=prompt("Birinci ədədi daxil edin:");
let b=prompt("İkinci ədədi daxil edin:");
let c=prompt("Üçüncü ədədi daxil edin:");

let akub=Math.pow(a,3);
let bkub=Math.pow(b,3);
let ckub=Math.pow(c,3);
let kublarCemi=akub+bkub+ckub;
let eded=a*100+b*10+c

if(kublarCemi==eded){
    alert(kublarCemi);
    alert("Bu Armstronq nömrəsidir ")
}else {
    alert(kublarCemi);
    alert("Bu Armstronq nömrəsi deyildir")
}