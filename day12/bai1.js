let a = prompt();
let newPromise = new Promise(function(resolve,reject){
    if(isNaN(a) === true) resolve(a);
    else reject("no");
})
newPromise.then(function(){
    console.log(a);
}).catch(function(){
    console.log("no");
})