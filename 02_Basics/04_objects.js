// const tinderUser = new Object()

const tinderUser = {

}

tinderUser.id = "123abc"
tinderUser.name = "Shubham"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Shubham",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj4 = {
    5: "e",
    6: "f"
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3)

const users = [
    {
        id: 1,
        email: "shubham@mail.com"
    },
    {
        id: 2,
        email: "pushpanjaly@mail.com"
    },
    {
        id: 3,
        email: "anshika@mail.com"
    }
]

console.log(users[1].email)

console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Shubham"
}

// course.courseInstruct

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

const navbar = ({company}) => {

}

navbar(company = "shubham")

// {
//     "name": "Shubham",
//     "coursename": "JS course in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]