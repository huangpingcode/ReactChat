/*
 *  常用工具方法
**/


// export let $q = {
// 	deffer: function(){
// 		var promise = new Promise(function(resolve, reject){
// 		    resolve()
// 		    reject()
// 		 });
// 	},
// 	resolve: function(data){},
// 	reject: function(date){}
// }


// var promise = new Promise(function(resolve, reject){
//     resolve();
//     reject();
//   });

let recordLog = function(str){
    console.log(str)
}
export let logger = {
    log: function(str){recordLog("[log]"+str)},
    warn: function(str){recordLog("[war]"+str)},
    error: function(str){recordLog("[err]"+str)},
}

//
function randomInt(min,max){
    return  Math.floor( Math.random() * ( max + 1 - min ) ) + min;
}

document.oncontextmenu = function(e){
    // e.preventDefault()
    // return false
}
