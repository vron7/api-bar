const enumTopics = {
    JOKE: 'joke',
    QUOTE: 'quote',
    FACTS: 'facts',
    CATS: 'cats'

}
export const topics = [
    {
        id: enumTopics.JOKE, 
        name:"Joke"
    },
    {
        id: enumTopics.QUOTE,
        name:"Programming"
    },
    {
        id: enumTopics.FACTS,
        name: 'Fact'
    },
    {
        id: enumTopics.CATS,
        name: 'Meow'
    }
];

export const getUriForTopic = (topic) => {
    console.log('dbg get uri for topic', topic);
    switch(topic){
        case enumTopics.JOKE:
            return 'https://sv443.net/jokeapi/v2/joke/Any';

        case enumTopics.QUOTE:
            return 'https://programming-quotes-api.herokuapp.com/quotes/random';


        case enumTopics.FACTS:
            return 'https://uselessfacts.jsph.pl/random.json?language=en';

        case enumTopics.CATS:
            return 'https://meowfacts.herokuapp.com/';

        default:
            return '';
    }
}

export const convertDataToWisdom = (topic, data) => {
    console.log('dbg data to wisdom', topic, data);
    switch(topic){
        case enumTopics.JOKE:
            return data.type === 'single' ? data.joke : data.setup + ' ' + data.delivery;

        case enumTopics.QUOTE:
            return data.en + " - " + data.author;
    

        case enumTopics.FACTS:
            return data.text;

        case enumTopics.CATS:
            return data.data[0];

        default:
            return '';
    }
}
