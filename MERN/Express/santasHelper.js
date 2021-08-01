const fs = require('fs');


const INPUT = fs.readFileSync('./santasHelper.txt', 'utf-8').split('');
const result = INPUT.reduce((floor, direction) => direction === '(' ? ++floor : --floor, 0);

console.log('copy and paste code: ', result);



//Start of by creating a function
function Q1 (){
//Grab the file you need 
  fs.readFile('./santasHelper.txt', (err, data)=>{
    //Start the timer 
    console.time('myTimer')
    //Convert into string or object so we can use it
    const directions = data.toString()
    //this is usually were you either filter, reduce or map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    const dirArr = directions.split('')
    //var for our answer
    const ans = dirArr.reduce((accum, currentVal)=>{
      if (currentVal === '(') {
      return  accum += 1;
      }
      else if (currentVal === ')' ) {
      return  accum -= 1;
      }
    }, 0)
    console.timeEnd('myTimer');
    return console.log('my code... -___- : ', ans)
    }
  )  
}

Q1();

//Start of by creating a function
function Q2 (){
  //Grab the file you need 
    fs.readFile('./santasHelper.txt', (err, data)=>{
      //Start the timer 
      console.time('myTimer')
      //Convert into string or object so we can use it
      const directions = data.toString()
      //this is usually were you either filter, reduce or map - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
      const dirArr = directions.split('')
      //var for our answer
      let accum = 0;
      let counter = 0;
      const ans = dirArr.some((currentVal)=>{
        if (currentVal === '(') {
          accum += 1;
        }
        else if (currentVal === ')' ) {
          accum -= 1;
        }
        counter++;
        return accum < 0;
      })
        console.timeEnd('myTimer');
        console.log('basment entered at : ', counter)
      }
    )  
  }
  
  Q2();

// const file = fs.readFileSync('./santasHelper.txt', (err,data)=>{
//   return (console.log('sync', file.toString())
//   );
// })

// // //Append
// // fs.appendFile('./readFile.txt', 'YOOOOOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU', err =>{
// //   console.log(err)
// // })

// //Write
// // fs.writeFile('new.txt', 'Crank that soulja boy',err => {
// //   if (err) {
// //     console.log(err);
// //   }
// // })

// ///De
// fs.unlink('new.txt', err =>{
//   if (err) {
//     console.log(err)
//   }
//   console.log('andddd its gone...')
// })