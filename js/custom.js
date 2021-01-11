// I write custom JS 
        // I want to write a piece of JS code that knows what to do when the button is clicked...add anEventListener Row 1
        document.getElementById("btnDemo1").addEventListener("click", function(){
            // Step 1: I want to collect the number the user entered
            // Declare a local variable named num1
            // Then set it equal to whatever the user typed
            let num1 = document.getElementById("input1").value;

            // Step 2: I want to collect the word the user entered
            let word1 = document.getElementById("input2").value;

            // Step 3: I want to print out to the user the number and word they entered
            // Use JS to find the output element and then stuff some data into it
            document.getElementById("output1").innerHTML = `The number you entered is <span class="boldy">${num1}</span>`;
            document.getElementById("output2").innerHTML = `The word you entered is <span class="boldy">${word1}</span>`;           
       });
             //  Another EventListerner for Row 2  
       document.getElementById("btnDemo2").addEventListener("click", function(){
        let num2 = document.getElementById("input3").value;
        let word2 = document.getElementById("input4").value;
        document.getElementById("output3").innerHTML = `The number you entered is <span class="boldy">${num2}</span>`;
        document.getElementById("output4").innerHTML = `The word you entered is <span class="boldy">${word2}</span>`;           
       });

    //    How do I wire up an event handler for the click event of the btnDemo3 button
        document.getElementById("btnDemo3").addEventListener("click", function(){
            for(let loop = 1; loop <= 100; loop++){
                // I want to bold all the even numbers
                // I will use a MODULUS operator (%)
                // loop = 1 var specialValue = 1 % 2 = 2
                // loop = 2 var specialValue = 2 % 2 = 0
                var specialValue = loop % 2;
            
                if(specialValue != 0)  //if specialValue IS NOT 0
                {
                    var printableNum = `<b>${loop}</b> `
                }
                else 
                {
                    var printableNum = `${loop} `
                }
                    document.getElementById("output5").innerHTML += printableNum;
            }        
    });
            document.getElementById("btnWord").addEventListener("click", function(){
                let word = document.getElementById("input5").value;
                let newWord = "";
                for(let loop = 0; loop < word.length; loop++)  
                {
                    newWord += `${word.substr(loop, 1)}-`;
                } 
                document.getElementById("output6").append(newWord);
                document.getElementById("output7").append(newWord.substr(0, newWord.length-1));
            });

            document.getElementById("btnClear").addEventListener("click", function(){
                
                document.getElementById("input5").value = "";
                document.getElementById("output6").innerText = "";
                document.getElementById("output7").innerText = "";

            });
            