import colors from 'colors';
import { franc } from 'franc';
import langs from 'langs';

const input = process.argv.slice(2);

const langCode = franc(input[0]);

const language = langs.where('3',langCode);

if (language === undefined) {
    console.log("Sorry, couldn't figure out! Try with more sample text".red);
}
else{
    console.log(`Our best guess is ${language.name}`.green);
}