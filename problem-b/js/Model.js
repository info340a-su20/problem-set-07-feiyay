import allTweets from './uw_ischool_tweets'

let array = allTweets.map((tweet)=>{
    let element = {
        text: tweet.text,
        timestamp:Date.parse(tweet.created_at)
    }
    return element;
});

export function getRecentTweets(){
    array.sort((tweet1,tweet2)=>{
        return tweet2.timestmap - tweet1.timestmap;
    });
    return array.slice(0,5);
}

export function searchTweets(string){
    let tweetarray = array.filter((tweet)=>{
        return tweet.text.toLowerCase().indexOf(string.toLowerCase()) >=0
    });
    return tweetarray;

}