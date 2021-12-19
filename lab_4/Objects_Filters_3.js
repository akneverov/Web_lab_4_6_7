let users = [
    {name: 'Pudge', surname: 'Mom', age: 13},
    {name: 'Joe', surname: 'Biden', age: 66},
]

let orders =[
    {dishesAmount: 40,time: 1523, totalPrice: 8000},
    {dishesAmount: 3,time: 2027, totalPrice: 1600},
]

let restaurants = [
    {name: 'Subway', type: 'Franchise', city: 'London'},
    {name: 'Dodo', type: 'Franchise', city: 'Moscow'},
]

console.log(users.filter(users => users.age > 18))
//console.log(restaurants.filter(restaurant => restaurant.city === 'Moscow'))