let a = prompt();
function check(a){
    let newPromise = new Promise(function(resolve,reject){
        if(isNaN(a) === true) resolve(a);
        else reject("no");
    })
    return newPromise;
}
async function check(a){
    try {   
        let b = await newPromise;
        console.log(b);
} catch (err){
    console.log(err)
}
call(a);

