
    //    Wire up an event handler for the click event of the btnDemo3 button
       
document.getElementById("btnWord").addEventListener("click", function(){
    let userWordOrig = document.getElementById("input").value;
    let userWord = userWordOrig.toLowerCase();
    //Global regex
    userWord = userWord.replace(/ /g, "");
    let userWordReverse = userWord.split("").reverse().join("");
    
    if(userWordOrig == 0)
    {document.getElementById("answer").innerHTML = "You need to enter a word!";}
    else
    {
    document.getElementById("reverseUserWord").innerHTML = userWord + " spelled backwords is: " + userWordReverse

    if(userWord == userWordReverse){
        document.getElementById("answer").innerHTML = userWord + " is a palindrome!";
    }
    else{
        document.getElementById("answer").innerHTML = userWord + " is NOT a palindrome!";
    }   
}
});

            // clear form
document.getElementById("btnClear").addEventListener("click", function(){
    document.getElementById("input").value = "";
    document.getElementById("answer").innerText = "";
    document.getElementById("reverseUserWord").innerText = "";
})  
            
            