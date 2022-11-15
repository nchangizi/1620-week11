// function greet(user, time = "day")
// {
//     console.log(`Good ${time} ${user}`);
//     // console.log('Hello ' + user);
// }
// greet("Neda");
// greet("Neda", "Night");
// const greet = function (user)
// {
//     console.log(`Hello ${user}`);
//     // console.log('Hello ' + user);
// }

// const greet =  (user) =>
// {
//     console.log(`Hello ${user}`);
//     // console.log('Hello ' + user);
// }

let r = prompt("Enter a radius.");
console.log(r)

function circleArea (radius)
{
    return Math.PI * radius * radius;
}

let area = circleArea(r).toFixed(2);
console.log(radius)
alert(`The area of a circle with radius ${r} is ${area}`)

