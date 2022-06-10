function writeCards( namesArray) {
  let messagesCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    messagesCards.push( `Thank you, ${namesArray[i]}, for the wonderful surprise gift!` )
  }
  return messagesCards

}

function countDown (num){
  while ( num > 0){
    console.log(num);
    num -=1

  }
  console.log (num);
}
