let a = prompt();
function check(a){
let newPromise = new Promise(function(resolve,reject){
    if(isNaN(a) === true) resolve(a);
    else reject("no");
    })
    return newPromise;
}
function call(){
    check(a).then(function(){
        console.log(a);
    }).catch(function(){
        console.log("no");
    })
}
call()