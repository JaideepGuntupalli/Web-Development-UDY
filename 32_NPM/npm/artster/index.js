const figlet = require('figlet');
const colors = require('colors');

figlet('Jaideep Guntupalli', (err, data) => {
    if(err){
        console.log('Something went wrong...');
        console.log(err);
        return;
    }
    console.log(data.green);
})