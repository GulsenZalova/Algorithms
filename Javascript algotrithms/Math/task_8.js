// Verilən ədədin 2-nin qüvvəti olub-olmadığını yoxlayın
let a;

function powerFind(a){
    for(let n=0; n<100; n++){
        if(a==Math.pow(2,n)){
            console.log(true)
            break;
        }else{
            console.log(false)
          
        }
    }
}
powerFind(32)

