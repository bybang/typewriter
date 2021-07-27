let sentence = "hello there from lighthouse labs";
// sentence += "\n" //("hello there from lighthouse labs\n")

const myFunction = (myParameter) => {
  for (let i = 0; i < myParameter.length; i++){
    setTimeout (() => {
      // print the char here
      process.stdout.write(myParameter[i]);
    }, 50 * i); // <= 1s delay
  }
  setTimeout(() => {
    console.log("")
  }, 50 * sentence.length)
};

myFunction(sentence);

//const listFridgeContent = fridge => {
//  fridge.forEach((ingredient, index) => {
//    setTimeout(() => {
//      const sentence = `There is some ${ingredient}`
//      console.log(sentence)
//    }, 1000 * index)
//  })