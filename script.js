const min=1;
const max=100;

const ans= Math.floor(Math.random() * (max-min+1))+min;

let attempts=0;
let guess;
let running =true;



while(running){
guess=Number(window.prompt(`Guess any number between ${min} and ${max}`));

if(isNaN(guess)){
    window.alert("Please enter a valid number");

}
else if(guess<min){
    window.alert(`Please enter a number greater than ${min}`);
}

else if(guess>max){
    window.alert(`Please enter a number smaller than ${max}`);
    
}
else{
    attempts++;
    if(ans<guess){
    window.alert(`Too High, try againn!`);
        
    }
    else if(ans>guess){
    window.alert(`Too Low, try again !`);
        
    }
    else{
    window.alert(`Congratulations !!, The correct answer is ${ans} , It took you ${attempts} attempts to guess it correctly`);

    running=false;
        
    }
    }
}







/* '------------------------------------._
'------------------------------------._
   .-------------------------------------'
    `-. _          _.-'
 _   /     `'----------------'      _
( )  |     C O D E   B Y   V 3 D N T T     | ( )
 `--./         _.-'        `--'
  .-'-------------------------------------`--'
`------------------------------------._
`------------------------------------._
*/


