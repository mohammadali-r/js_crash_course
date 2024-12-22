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

function fruit(name, color, taste){
    this.name = name
    this.color = color
    this.taste = taste
    this.change_name = function(new_name){
        this.name = new_name
    }
}

var f1 = new fruit("banana", "yellow", "sweet")
console.log(f1)

f1.change_name("pineapple")
console.log(f1)