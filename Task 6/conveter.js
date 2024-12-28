

function converter(){

    let select=document.getElementById("select").value
    let num=document.getElementById("val").value

    if(select == "cel"){
        document.getElementById("result").innerHTML=`F : ${(num * 1.8 + 32).toFixed(2)}`;
       
    }
    else if(select=='fah'){
        document.getElementById("result").innerHTML=`C : ${((num - 32) / 1.8).toFixed(2)}`;
    }

    else if(select=='usd'){
        document.getElementById("result").innerHTML=`RS : ${(num * 	84.9225).toFixed(2)}`;
    }
    else if(select=='inr'){
        document.getElementById("result").innerHTML=`$ : ${(num / 	84.9225).toFixed(2)}`;
    }   

}



