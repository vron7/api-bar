const enumTopics = {
    JOKE: 'joke',
    QUOTE: 'quote',
    FACTS: 'facts',
    CATS: 'cats',
    CAT_IMG: 'cat_img'

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
    },
    {
        id: enumTopics.CAT_IMG,
        name: 'Cat image'
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

        case enumTopics.CAT_IMG:
            return 'https://aws.random.cat/meow';

        default:
            return '';
    }
}

export const wisdomFormat = {
    TEXT: 'text',
    IMAGE: 'image'
}
function Wisdom (data, format) {
    this.data = data;
    this.format = format;
}

export const convertDataToWisdom = (topic, data) => {
    console.log('dbg data to wisdom', topic, data);
    switch(topic){
        case enumTopics.JOKE:
            const joke = data.type === 'single' ? data.joke : data.setup + ' ' + data.delivery;
            return new Wisdom(joke, wisdomFormat.TEXT);

        case enumTopics.QUOTE:
            return new Wisdom((`${data.en} - ${data.author}`), wisdomFormat.TEXT);
    

        case enumTopics.FACTS:
            return new Wisdom(data.text, wisdomFormat.TEXT);

        case enumTopics.CATS:
            return new Wisdom(data.data[0], wisdomFormat.TEXT);

        case enumTopics.CAT_IMG:
            return new Wisdom(data.file, wisdomFormat.IMAGE);

        default:
            return '';
    }
}
