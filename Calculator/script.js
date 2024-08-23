let clearDisplay=()=>{
    document.getElementById('display').value=" "
}
let appendToDispaly=(val)=>{
    
    document.getElementById('display').value+=val;
}
let backspace=()=>{
    let tot=document.getElementById('display').value;
    document.getElementById('display').value=tot.slice(0,-1);
}
let calculate=()=>{
    try{
        let res=eval(document.getElementById('display').value)
        document.getElementById('display').value=res;
    }
    catch(error){
        document.getElementById('display').value="Error"
    }
}