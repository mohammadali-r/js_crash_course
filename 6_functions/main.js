function say_hello() {
  console.log("Hello World !");
}

// say_hello()

function hello_person(name) {
  alert("Hi " + name);
}

// hello_person("Alex")

function add(a, b) {
  return a + b;
}

res = add(12, 22);
console.log(res);

function hello_input() {
  var name = prompt("Please enter your name: ");
  if (name == "") {
    alert("Hi there");
  } else {
    alert("Hello " + name);
  }
}

hello_input();
