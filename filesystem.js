const fs = require('fs');

// create a file. 
fs.writeFile('example.txt', "This is an example", (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File successfully created.");
        fs.readFile('example.txt','utf8',(err, file) => {
            if (err){
                console.log(err);
            }
            else{
                console.log(file);
            }
        });
    }
});

// Renaming the file. 
fs.rename('example.txt', 'example2.txt', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('successfully renamed the file..');
    }
})

// Appending the data to the file. 
fs.appendFile('example2.txt', 'Some data being appended', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Successfully appended data to file...');
    }
})

// Deleting the file. 
// fs.unlink('example2.txt', (err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Successfully deleted the file....');
//     }
// })