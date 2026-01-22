/* 
    - promise is an object the execute event completion or fielded

* promise state :

 -pending: initially when  state value is pending. 
 -fulfied: when promise is resolved.
 -rejected: when promise rejected.
 
 * promise result

  - Undefined: initially when state value is pending.
  - value: The value you get after promise resolved.
  -Errror: The when promise is rejected rejected.

  * promise handling 

  - .then : It handle the promise when it resolved or rejected but it usualy used to resolved it.
  - .catch : It handle the promise when it is only rejected.
  - .finally:

*/

/// how then handling handle either resolved or rejected values
const promise= new Promise(function(resolve, reject){
     reject('I am student in tumba collegeeee')
})

promise.then(
    (result)=>console.log(result)
    // null,
    // (error)=>console.log(error )
)

// promise


const getUser=new Promise(function(resolve, reject){
    const user={
        name: 'samuel',
        email: 'samuel@gmail.com',
        password :12344
    }

    resolve(user)
})

getUser().then(result=>console.log(results));

