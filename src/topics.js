import userEvent from "@testing-library/user-event";

const enumTopics = {
    JOKE: 'joke',
    QUOTE: 'quote',
    FACTS: 'facts',
    CATS: 'cats',
    CAT_IMG: 'cat_img',
    COVID: 'covid'

}
export const topics = [
    {
        id: enumTopics.JOKE, 
        name:"Joke"
    },
    {
        id: enumTopics.QUOTE,
        name:"Dev"
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
        name: 'Cat pic'
    },
    {
        id: enumTopics.COVID,
        name: 'Covid'
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

        case enumTopics.COVID:
            return `https://api.covid19tracking.narrativa.com/api/${getCurrentDate()}/country/estonia`;

        default:
            return '';
    }
}

export const wisdomFormat = {
    TEXT: 'text',
    IMAGE: 'image',
    INITIAL: 'initial',
    COVID_TEXT: 'covid-text',
}

export const initTopic = (name) => {
    const data = name;
    const format = wisdomFormat.INITIAL 
    return new Wisdom(data, format)
}

function Wisdom (data, format) {
    this.data = data;
    this.format = format;
}
function getCurrentDate() {
    var dt = new Date();
    return dt.getFullYear() + "-" + 
        ('0' + (dt.getMonth() + 1)).slice(-2) + "-" + 
        ('0' + dt.getDate()).slice(-2);

}

function convertCovidData (data){
    console.log('dbg covid data', data, getCurrentDate())
    if(data.error)
        return 'I apologize, there is no data for today yet, try again later...'
    const today = data.dates[getCurrentDate()].countries.Estonia    
    return {
        new:today.today_new_confirmed, 
        died: today.today_new_deaths,
        recovered:today.today_new_recovered 
    }
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

        case enumTopics.COVID:
            return new Wisdom(convertCovidData(data), wisdomFormat.COVID_TEXT);

        default:
            return '';
    }
}
