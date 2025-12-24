// how asyncronous works 

// console.log('samuel');
// console.log('mucyo')
// setTimeout(()=>{
//     console.log("mugabe")

// },4000)

// console.log('mugume')
// console.log('mugisha')


// what we call , callback

// function one(callback){
//     console.log("step 1 complete please call next step")
//     callback();
// }

// function two(){
//     console.log("step 2")
// }

// one(two)

//  relationship between two functions with callback

// const order=(call_production)=>{
//     console.log('order placed, call productions?')
//     call_production()

// }

// const production=()=>{
//     setTimeout(()=>{
//           console.log('production recieved now ')
//     },2000)
  
// }

// order(production)


// 2 example 


// const stock={
//     fruits:['banana', 'orange', 'mango'],
//     liquid: ['water', 'ice'],
//     holder: ['cone', 'cup','stick'],
//     toppings: ['chocolates','peanuts']

// }


// const orderFunction=(fruit_name, callback)=>{
//     setTimeout(()=>{
//         console.log(`${stock.fruits[fruit_name]} was selected`)
//     },4000)

//     callback()
// }

// const production2=()=>{
//     setTimeout(()=>{
//         console.log('production has started')
//     },0)
// }

// orderFunction(1,production2)


// promise 

const stock={
    fruits:['banana', 'orange', 'mango'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup','stick'],
    toppings: ['chocolates','peanuts']
}


const is_stock_opennin=true;
const orderFunction2=(time,work)=>{

    return new Promise((resolve, reject)=>{

            if(is_stock_opennin){

                setTimeout(()=>{
                  console.log(work())
                },time)

    }else{
        reject("please we don't have it it our stock")
    }
        
    })

}

orderFunction2(2000, ()=>console.log(`${stock.fruits[2]}`))