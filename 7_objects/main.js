var people = {
    name: "alex",
    family: "williams",
    age: 29
}

console.log(people)
console.log(people.age)
console.log(people['name'])

function user(id, name, family, age){
    this.id = id
    this.name = name
    this.family = family
    this.age = age
}

var p1 = new user(1, "jack", "williams", 25)
console.log(p1)