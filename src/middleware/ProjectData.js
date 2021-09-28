import covidWeb from '../assets/images/projects/covidWeb.png';
import todoList from '../assets/images/projects/todoList.png';
import weatherWeb from '../assets/images/projects/weatherWeb.png';
import PokemonApp from '../assets/images/projects/pokemonApp.png';

export const gridData = [
    {
        'title': 'Covid Vision',
        'image': covidWeb,
        'link': 'https://covid-vision.netlify.app/',
        'description': 'Web App developed to retrieve Covid-19 cases information',
        'program': [
            { 'code': 'React.Js', },
            { 'code': 'Material-Ui', },
        ],
    },
    {
        'title': 'Pokemon Web App',
        'image': PokemonApp,
        'link': 'https://pokemon-app-mozzie.netlify.app/',
        'description': 'Web App that retrieve data from Pokemon API and its information',
        'program': [
            { 'code': 'React.Js', },
            { 'code': 'Material-Ui', },
        ],
    },
    {
        'title': 'Weather App',
        'image': weatherWeb,
        'link': 'https://weather-app-mozzie.netlify.app',
        'description': 'A weather App built using API calling functions.',
        'program': [
            { 'code': 'React.Js', },
            { 'code': 'Material-Ui', },
            { 'code': 'CSS', }
        ],
    },
    {
        'title': 'Todo List App',
        'image': todoList,
        'link': 'https://todo-list-beermossy.netlify.app',
        'description': 'Basic Todo App, that has Add, Remove and Complete functionalities.',
        'program': [
            { 'code': 'React.Js', },
            { 'code': 'CSS', }
        ],
    },
];
