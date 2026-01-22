
// callback is function that passed as an argument to another to be executed later after asyncronous complete


function greet(name, callback){
    console.log(`hello ${name}`);
    callback();
    

}

function SayBy(){
    console.log(`by for sure`)
}

greet('Ishimwe',SayBy);