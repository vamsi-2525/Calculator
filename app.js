let output=document.getElementById("input")
function show(num){
    output.value+=num
}
function calculate(){
    try{
    output.value=eval(output.value)
    }
    catch{
        output.value="ERROR!!!"
    }
}
function removeAll(){
    output.value=" "
}
function del(){
    output.value=output.value.slice(0,-1)
}