/**
 * 
 * callback
 * 
 */


// function getHuman(callback){
//     setTimeout(function(){ //서버에 요청한다는 가정(응답은 2초가 걸린다.)
//         callback({
//             name : "김시원",
//             age : 44
//         })


//     },2000)
// }

// getHuman(function(human){
//     console.log("응답완료");
//     console.log(human.name);
//     console.log(human.age);


// })
// function tmp(){

// }

// //this 안생김
// tmp = () => {

// }



// const timeoutPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("완료");
//     },2000)
// })


// timeoutPromise.then(function (res){
//     console.log(res);
// })



const getPromise = function(number){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(number > 5){
                resolve('성공');
            }else{
                reject('실패');
            }
        },2000)
    })
}



Promise.all([
    getPromise(1),
    getPromise(5),
    getPromise(7)
]).then(function(res){
    console.log(res);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log("끝");
})