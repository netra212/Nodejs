const fs = require('fs');
fs.readFile('/largeFile.txt', (err,file) => {
    if(err){
        console.log(log(err));
    }
    else{
        console.log(file);
    }
})





