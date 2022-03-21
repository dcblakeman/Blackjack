//User Object
const user = 
{
    name: "",
    age: 0,
    hometown: ""
}

//Prompt intro casino, ask for name, age, and hometown
const yourName = prompt ("What is your name?");
const yourAge = prompt ("How old are you?");
const yourHometown = prompt ("Where are you from?");

//Update User Object
user.name = yourName;
user.age = yourAge;
user.hometown = yourHometown;


//Welcome the user, output name and hometown results, and ask if they're ready to play blackjack
alert ("Welcome, " + user.name + " from " + user.hometown + ", to the Codesmith Casino!");

//Blackjack Question Function
function blackjackQuestion ()
{
    let blackJack = confirm ("Okay, " + yourName + ", would you like play blackjack?"); 
    return blackJack;
}

//User random number
function blackjackNumber () 
{
return Math.ceil(Math.random() * 11)
}//end random number function

//Dealer's random number
function dealerFunction () 
{
  return Math.ceil(Math.random() * 11)
}

//Blackjack Game Loop
while (blackjackQuestion() === true)
{
  //Initalize values
  let playerTotal = 0;
  let answer = true;
  let dealerTotal = 0;

  //Dealer's cards
  while (dealerTotal <= 17)
  {
    let dealerResult = dealerFunction()
    dealerTotal += dealerResult
    if (dealerTotal > 17)
    {
      dealerTotal + dealerResult;
    }
    if (dealerTotal <= 17)
    {
      dealerTotal = dealerTotal
    }
  }
  
  //Player's Card Selection Loop
  while(playerTotal <= 21 && answer == true) 
  {
    //Get player card
    let result = blackjackNumber();
    playerTotal += result;
    answer = confirm ("You got a " + result + "." + " Your playerTotal is now " + playerTotal + "." + " Would you like to hit or stay? OK to hit, Cancel to stay");
      
    //If the player gets blackjack
    if (playerTotal === 21)
    {
      alert ("Congrats, " + yourName + ", you got Blackjack! You Win!!");
    }

    //If the player busts
    if (playerTotal > 21)
    {
      alert ("Sorry, " + yourName + ", you busted.")
    }//end player busts

    //If the player does not want to hit again
    if (answer === false && playerTotal < 21)
    {
      if (playerTotal > dealerTotal)
      {
      alert ("Congrats, " + yourName+ ", you won, the dealer had " + dealerTotal);
      }

      //If the dealer wins
      else if (playerTotal < dealerTotal && dealerTotal <= 21)
      {
        alert ("Sorry, " + yourName + ", the dealer had " + dealerTotal + " you lost :(");
      }

      //If the dealer busts
      else if (playerTotal < dealerTotal && dealerTotal > 21)
      {
      alert ("Congrats, " + yourName+ ", you won, the dealer had " + dealerTotal + " and busted.");
      }
    }//end player does not want to hit again  
  }//end player card selection loop
}//end blackjack game

//Closing statement
alert ("Thank you " + user.name + " for playing at the Codesmith Casino. Have a safe trip back to " + user.hometown + "." );
