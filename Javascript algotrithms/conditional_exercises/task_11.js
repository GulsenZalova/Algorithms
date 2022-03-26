// İki müsbət tam ədədin ən böyük ümumi bölənini (GCD) hesablamaq üçün JavaScript proqramı yazın.

let a=prompt("a ədədini daxil edin: ");
let b=prompt("b ədədini daxil edin: ");
for(let i=1; i<a; i++){
    if(a%i==0&&b%i==0){
        c=i
    }
    console.log(c)
}