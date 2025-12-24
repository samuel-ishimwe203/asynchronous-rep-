// how asyncronous works 

console.log('samuel');
console.log('mucyo')
setTimeout(()=>{
    console.log("mugabe")

},4000)

console.log('mugume')
console.log('mugisha')


// what we call , callback

function one(){
    console.log("step 1")
}

function two(){
    console.log("step 2")
}

two(one)