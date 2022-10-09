const fs= require("fs");

fs.copyFileSync("file1.txt", "file2.txt");

fs.readFile("file1_2.txt", (err, data) => {

    if (!err) {

        console.log('data: ' + data);

    } else {

        console.log(err);

    }

});

fs.writeFile('helloworld.txt', 'Hello World!', (err) => {

  if (err) return console.log(err);

  console.log('Hello World > helloworld.txt');

});


