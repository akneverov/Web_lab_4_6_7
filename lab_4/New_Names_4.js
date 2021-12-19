names = ['Pudge', 'Joe', 'Jugger']
function User(name) {
    this.name = name
    this.getName = () => console.log('My name is', this.name)
}

for (name of names) {
    user = new User(name)
    user.getName()
}