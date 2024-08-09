const fs = require('fs');
fs.mkdir('tutorial', (err) => {
    if(err){
        console.log(err);
    }
    // If successfully folder created then else statement will be created. 
    else{
        // console.log('Folder successfully created......!');
        // // deleting the folders. 
        // fs.rmdir('tutorial', (err) => {
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         // console.log("Successfully deleted the folder..");

        //     }
        // })
        // If the folder is successfully created then file is created inside that folder. 
        fs.writeFile('./tutorial/myExample.txt', 'This is my example file', (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log("Successfully created file.");
            }
        })
    }
})

// Deleting the folder with files inside that folder. 
fs.rmdir('tutorial', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('deleted folder');
        fs.unlink('./tutorial/myExample.txt', (err) => {
            if(err){
                console.log(err);
            }
            else{
                console.log('Deleted folder');
            }
        });
    }
});


// What happened if there is multiple files inside the folders. 
fs.readdir('myFolderName', (err, files) => {
    if(err){
        console.log(err);
    }
    else{
        // console.log(files);
        for (let file of files){
            fs.unlink('./myFolderName/' + file, (err) => {
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Successfully deleted file...");
                }
            });
        }
    }
});












