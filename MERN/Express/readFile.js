const fs = require('fs');

fs.readFile('./santasHelper.txt', (err, data)=>{
  if (err) {
    console.log(err)
  }
  return(
    console.log('async', data.toString('utf-8'))
  );
})

const file = fs.readFileSync('./readFile.txt', (err,data)=>{
  return (console.log('sync', file.toString())
  );
})

// //Append
// fs.appendFile('./readFile.txt', 'YOOOOOOOOOOOOOOOOOOOOOOOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU', err =>{
//   console.log(err)
// })

//Write
// fs.writeFile('new.txt', 'Crank that soulja boy',err => {
//   if (err) {
//     console.log(err);
//   }
// })


// ///DELETE
// fs.unlink('new.txt', err =>{
//   if (err) {
//     console.log(err)
//   }
//   console.log('andddd its gone...')
// })