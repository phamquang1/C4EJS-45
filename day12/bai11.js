let a = prompt();
function check(a){
    let newPromise = new Promise(function(resolve,reject){
        if(isNaN(a) === true) resolve(a);
        else reject("no");
    })
    newPromise.then(function(a){
        console.log(a);
    }).catch(function(a){
        console.log("no");
    })
}
check(a)