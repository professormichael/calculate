let result = document.getElementById('result');
function insert(num){
    result.value += num
}
function calculate(){
    result.value = eval(result.value)
}
function Delete1(){
    result.value = result.value.slice(0, -1)
}
function Deleteall(){
    result.value = ""
}

