let firstName = prompt("Enter your your first name:");
let State = prompt("Enter your state (two letters capitolized) :");
let Temp = Number(prompt("Enter the current outside temperature (F):"));

let Message = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you wont need a hat, scarf or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']
switch(State) {
case (State == "NE"):
    switch(Temp) {
        case (Temp <=32):
          console.log(`${firstName}, ${Message[0]}`)
          break;
        case (Temp >=32 && Temp <=50):
          console.log(`${firstName}, ${Message[1]}`)
          break;
          }
case (State == "FL"):
      switch(Temp) {
        case Temp >=32 && Temp <=50:
          console.log(`${firstName}, ${Message[2]}`)
          break;
        case Temp >=50 && Temp <=70:
          console.log(`${firstName}, ${Message[3]}`)
          break;
          }
default:
  console.log(`Invalid Data`)
    }