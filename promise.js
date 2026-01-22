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


const promise= new Promise(function(resolve, reject){
    return resolve('I am student in tumba college')
})

