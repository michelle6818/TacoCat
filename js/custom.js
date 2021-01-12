// I write custom JS 
        
            

    //    How do I wire up an event handler for the click event of the btnDemo3 button
       
document.getElementById("btnWord").addEventListener("click", function(){
    let userWord = document.getElementById("input").value;
    let userWordReverse = userWord.split("").reverse().join("");

    if(userWord == userWordReverse){
        document.getElementById("answer").innerHTML = userWord + " is a palindrome!";
    }
    else{
        document.getElementById("answer").innerHTML = userWord + " is NOT a palindrome!";
    }   
    
});

            // clear form
document.getElementById("btnClear").addEventListener("click", function(){
    document.getElementById("input").value = "";
    document.getElementById("answer").innerText = "";
})  
            
            