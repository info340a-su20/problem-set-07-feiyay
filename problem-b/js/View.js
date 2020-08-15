export function printTweets(array){
    if(array.length==0){
    console.log("No tweets found");}
    else{
    for(let tweet of array){
        let time = new Date(tweet.timestamp);
        console.log("- \""+tweet.text+"\" ("+
        time.toLocaleString("en-US")+")");}
    }
}