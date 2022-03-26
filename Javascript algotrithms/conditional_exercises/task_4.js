// 5 ədəddən böyüyünü tapın.
let a=prompt("a ədədini daxil edin: ");
let b=prompt("b ədədini daxil edin: ");
let c=prompt("c ədədini daxil edin: ");
let d=prompt("d ədədini daxil edin: ");
let e=prompt("e ədədini daxil edin: ");

if(a>b&&a>c&&a>d&&a>e){
    alert("a ədədi verilən ədədlər içərisində ən böyükdür.")
}else if(b>a&&b>c&&b>d&&b>e){
    alert("b ədədi verilən ədədlər içərisində ən böyükdür.")
}else if(c>a&&c>b&&c>d&&c>e){
    alert("b ədədi verilən ədədlər içərisində ən böyükdür.")
}else if(d>a&&d>b&&d>c&&d>e){
    alert("b ədədi verilən ədədlər içərisində ən böyükdür.")
}else if(e>a&&e>b&&e>c&&e>d){
    alert("b ədədi verilən ədədlər içərisində ən böyükdür.")
}else{
    alert("Düzgün dəyər daxil edin")
}
