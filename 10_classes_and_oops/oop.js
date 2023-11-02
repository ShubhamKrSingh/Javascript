const user = {
    username: "Shubham",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

const user2 = {
    username: "Shyam",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this
}

const userOne =  new User('SHUBHAM',12,true)
const userTwo = new User('SHYAM', 14, false)
console.log(userOne.constructor);
// console.log(userTwo);