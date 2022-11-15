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

// let r = prompt("Enter a radius.");
// console.log(r)

// function circleArea (radius)
// {
//     const radiusP = document.querySelector("#radius");
//     const resultP = document.querySelector("#result");
//     radiusP.textContent =radius;
//     let calculatedArea = Math.PI * radius * radius;
//     resultP.textContent = calculatedArea
//     return calculatedArea;
// }

// let area = circleArea(r).toFixed(2);

// alert(`The area of a circle with radius ${r} is ${area}`)
const unorderedList = document.querySelector(".shopping");
 

function populateList(list)
{
    for (let i = 0 ; i < list.length; i++)
    {
       let listItem =  document.createElement("li");
       listItem.textContent = list[i]
       unorderedList.appendChild(listItem);
    }
}

const shoppingList = ["cheese", "bread", "green pepper"];
populateList(shoppingList);