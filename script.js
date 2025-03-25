document.getElementById("check-btn").addEventListener("click", function() {
    let input = document.getElementById("text-input").value;
    if (!input) 
    {
       alert("Please input a value.");
       return;
   }
               
   let cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
   let isPalindrome = cleanedInput === cleanedInput.split("").reverse().join("");
               
   document.getElementById("result").textContent = isPalindrome ? `${input} is a palindrome.`: `${input} is not a palindrome.`;
   });