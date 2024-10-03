function getNum(num){
    var getResult = document.getElementById("result")
    getResult.value += num
}

function clearBtn(){
    var getResult = document.getElementById("result")
    getResult.value = ""
    
}
 function finalOutput(){
    var getResult = document.getElementById("result")
    getResult.value = eval(getResult.value)

 }