// Natural ədədlərin tapılması
let a;

function naturalNumber(a){
    if((a>0)&&(Math.floor(a)-a==0)){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
naturalNumber(-15);
naturalNumber(1)
naturalNumber(10.22);
naturalNumber(10/0);

