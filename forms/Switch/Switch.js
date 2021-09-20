let firstName = prompt("Enter your your first name:");
let state = prompt("Enter your state (two letters capitolized) :");
let Temp = Number(prompt("Enter the current outside temperature (F):"));

let FirstName = firstName.charAt(0).toUpperCase + firstName.slice(1);
let State= state.toUpperCase();
let userArray = [FirstName, State, Temp];

let Message = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you wont need a hat, scarf or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']

switch(true) {
case (Temp <32 && State === "NE"):
  console.log(`${FirstName}, ${Message[0]}`)
  break;
case (Temp >=32 && Temp <=50 && State === "NE"):
  console.log(`${FirstName}, ${Message[1]}`)
  break;
case (Temp >=32 && Temp <=50 && State === "FL"):
  console.log(`${FirstName}, ${Message[2]}`)
  break;
case (Temp >50 && Temp <=70 && State === "FL"):
  console.log(`${FirstName}, ${Message[3]}`)
  break;
default:
  console.log(`${FirstName}, I do not know what you should wear.`)
    }