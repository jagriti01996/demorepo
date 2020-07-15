var name = 'john';

function first(){
    var a= 'Hello!';
    console.log(second());
    var x = a + name;
    return x;
}

function second(){
    var b= 'Hey!';
    console.log(third());
    var z = b + name;
    return z;
}

function third(){
    var c = 'Hi!';
    var z = c + name;
    return z;
}

console.log(first());