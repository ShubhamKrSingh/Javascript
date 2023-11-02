const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
        // DB calls, cryptography, network
        setTimeout(function(){
            console.log('Async task is complete');
            resolve()
        }, 1000)
        
})

promiseOne.then(function(){
    console.log('promise comsumed');
})

new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resoved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "ShubhamSingh",
            email: "shubham@example.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username: "ShubhamSingh",
                password: "1234"
            })
        }else{
            reject('ERROR: Something went Wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
}).finally(function(){
    console.log('The Promise is either resolved or rejected');
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({
                username: "JavaScript",
                password: "1234"
            })
        }else{
            reject('ERROR: JS went Wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})