let persons = [
    {name: 'Peter', right: 'user'},
    {name: 'Mark', right: 'user'},
    {name: 'John', right: 'admin'},
    {name: 'Jane', right: 'admin'},
    {name: 'Tony', right: 'admin'},
]

let admin = persons.filter(person => person.right == 'admin')
console.log(admin)