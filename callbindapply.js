const a ={}
const b={a:1}

Object.assign(a,b)

console.log(a)

// Call - invoke the function with a given this value and arguments provided

var employee1= {firstName:'John', lastName:"Cherry"}
var employee2={firstName:'Tom', lastName:"Hardy"}

function invite(greeting1,greeting2){
    console.log(greeting1 + ' ,' + this.firstName+ " " + this.lastName + ' ,'+ greeting2)
}


invite.call(employee1,"hello","how are you")

invite.apply(employee1, ['Hello', 'How are you?']);

// Apply- invoke the function with given this value and can take arguments as an array 

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);


inviteEmployee1("hello","how are you BIND!","HAHAH")

// Bind returns a new function which can take numbers of arguments 