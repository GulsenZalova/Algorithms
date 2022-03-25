//Verilmiş 3 ədədi böyükdən kiçiyə düzün.

let a=prompt("a ədədini daxil edin: ");
let b=prompt("b ədədini daxil edin: ");
let c=prompt("c ədədini daxil edin: ");

if(a>b && a>c){
    if(b>c){
        alert(`${a},${b},${c}`)
    }
    else{
        alert(`${a},${c},${b}`)
    }
}
else if(b>a && b>c){
    if(a>c){
        alert(`${b},${a},${c}`)
    }
    else{
        alert(`${b},${c},${a}`)
    }
}
else if(c>a && c>b){
    if(a>b){
        alert(`${c},${a},${b}`)
    }
    else{
        alert(`${c},${b},${a}`)
    }
}
else("Düzgün dəyər daxil edin.")