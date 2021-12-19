function Student(name) {
    this.name = name

    this.sayHi = () => {
        console.log('Меня зовут:', this.name)
    }
}

let Klinker = new Student('Klinker')
Klinker.sayHi()