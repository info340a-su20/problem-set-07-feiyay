import readline from 'readline-sync';
import  * as modelfunction from './Model';
import {printTweets} from './View';

export function runSearch(){
    console.log("Here are some tweets by @UW_iSchool");
    printTweets(modelfunction.getRecentTweets());

    let response = readline.question("Search tweets, or EXIT to quit: ");
    if (response == "EXIT"){
        return;
    }
    else{
        return printTweets(modelfunction.searchTweets(response));
    }

}