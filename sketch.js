
var combo

function setup()
{
  for(var i = 1; i <10; i++)
  {
    var combo = makeid(4)
    console.log(combo)

  }
}

function makeid(length) {
  var result           = '';
  var characters       = 'abcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;

}

 combo = makeid(4)
console.log(combo);



//let response = fetch('https://api.scratch.mit.edu/users/'+combo);
//console.log(response)

/*async function getUser()
{    
  var response = await fetch('https://api.scratch.mit.edu/users/'+combo)

  var myMode = response.mode;
response.mode = no-cors

  var responseJSON = await response.json()
  console.log(responseJSON)
}
*/




//zqsh
//sqsh