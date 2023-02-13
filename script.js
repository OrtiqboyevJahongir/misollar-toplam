
                // number - 1

//     function wordCount(num){
//         let numbers = ["zero" , "one" , "two" , "three","four" ,  "five" , "six" , "seven" ,"eight" , "nine", "ten"]
//         let str = numbers[+num]
      
//         let newStr = ""
//         for(let i=0 ; i<num;i++){
//             newStr+=str
//         }
//         console.log( newStr);
//     }

//     wordCount("3")

                // number - 2

//     function doubleChar(text){
//         let newText = ""
//         for(let i=0; i<text.length;i++){
//                 newText+=text[i]+text[i]
//         }
//         console.log(newText);
//     }   
//     doubleChar("hello world")

                 // number - 3

    // function isValid(num){
    //     for(let i=0; i<num.length; i++){
    //        if(typeof num[i]==="number" ){
    //         console.log("true");
    //        }else{
    //         console.log("false");
    //        }
    //     }
    // }
    // isValid("165")
    


                    // number - 4

        // function chengeText(text){
        //     let newText = "" 
        //     for (let i=text.length-1; i>=0; i--) {
        //         newText +=text[i]     
        //     }
        //     console.log(newText);
        // }
        // chengeText("hello world")

                  // number - 5

        // function checkNumber(text){
        //     let newText = ""
        //     for(let i=1; i<=text.length;i++){
        //         if( text[i]*1==text[i]){
        //             newText +=text[i]
        //         }
        //     }
           
        //     if(newText>10){
        //         console.log("true");
        //     }else{
        //         console.log("false");
        //     }
        // }
        // checkNumber("zip codes consist of 12 consecutive digits")

                 // number - 6

        // function checkStr(text1 , text2){
        //     let newText = ""
        //     let newText2 = ""
        //     if(text1.length>text2.length){
        //         newText =text1.toUpperCase()
        //         for(let i = 0; i <newText.length; i++) {
        //             newText2 += newText[i]+text2  
        //         }
                
        //     }else{
        //         newText =text2.toUpperCase()
        //         for(let i = 1; i <= newText.length; i++) {
        //             newText2 += newText[i]+text1  
        //         }
               
        //     }
        //     console.log(newText2);
           
                
        // }
        // checkStr("hello" , "hi")




         //------------------ Middle ---------------
         
                
                        //  number 1

        // function changeZeroToOne(number){
        //         let n=""
        //         for (let i = 0; i < number.length; i++) {
        //            if(number[i]==1){
        //                n+=+number[i]*0  
        //            }else{
        //                 n+=+number[i]+1      
        //            }         
        //         }
        //         console.log(n);
        // }
        // changeZeroToOne("101010")

                        // number 2
        // function countLetters(text,letter){
        //         let n=0
        //         for (let i = 0; i < text.length; i++) {
        //              if(text[i]===letter){
        //                 n+=1
        //              }        
        //         }
        //         console.log(n);
        // }
        // countLetters("move capital letters to the Front " , "t")

                         // number 3

        // function docimator(text){
        //         n=""
        //         r=""
        //         for (let i = 0; i < text.length; i++) {
        //                 if(text[i]*1==text[i]){
        //                         n+=text[i]
        //                 }else{
        //                         r+=text[i]
        //                 }  
        //         }
        //         console.log("all.length: " + text.length);
        //         console.log("number length: " + n.length);
        //         console.log("remove.length: " + r.length);
        // }
        // docimator("test1234567890javascript")


                // number 4

        // function findInd(text, letter){
        //         let n = ""
        //         for (let i = 0; i < text.length; i++) {
        //                 if(text[i]===letter){ 
        //                   console.log(i);
        //                 }        
        //         }
        // }
        // findInd("Nemo will alweys look like Nemo , and not Nemo or other capital variations " , "N")




           //----------------------Hard ---------------------------    

                       // number 1

        // function doubleSwap(text , a , b){
        //         newText = ""
        //         for (let i = 0; i < text.length; i++) {   
        //                if(text[i]===a){
        //                 newText+=b
        //                } 
        //                if(text[i]===b){
        //                 newText+=a
        //                }if(text[i]!==a && text[i]!==b){
        //                         newText+=text[i]
        //                }
        //         }
        //         console.log(newText);
                    
        // }
        // doubleSwap("aabbccc","a" , "b")
        

               // number 2

                // ??????????????????

               // number 3

        // function wordedMath(num1 , operaion , num2){
        //        let numbers = ["zero","one" , "twoo" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten"] 
        //        let newNum = 0
        //         if(operaion==="plus"){
        //                 newNum = parseInt(num1) + parseInt(num2)
        //                 console.log(numbers[newNum]);
        //         }
        //         if(operaion==="minus"){
        //                 newNum = parseInt(num1) - parseInt(num2)
        //                 console.log(numbers[newNum]);
        //         }
        // }
        // wordedMath("10" , "plus" , "2")


                  // number 4

        //  function wordedMath(num1 , operaion , num2){
        //        let numbers = ["zero","one" , "twoo" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten"]  
        //        let newNum = 0
        //        let newNum2=0
        //        for (let i = 0; i < numbers.length; i++) {
        //         if(numbers[i]==num1 ){
        //                 newNum=i
        //         }if(numbers[i]==num2){
        //                 newNum2=i 
        //         }
        //        }
        //        if(operaion==="plus"){
        //         console.log(numbers[newNum + newNum2]);
        //       }
               
          
        // }
        // wordedMath("five" , "plus" , "twoo")










