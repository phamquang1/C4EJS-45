let a = prompt();
function check(a){
    let newPromise = new Promise(function(resolve,reject){
        if(isNaN(a) === true) resolve(a);
        else reject("no");
    })
    return newPromise;
}
async function call(){
    try {   
        let b = await check(a);
        console.log(b);
} 
catch (err){
    console.log(err)
}
}
call();

