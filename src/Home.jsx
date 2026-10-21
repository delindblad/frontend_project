// React Router handles navigation without reloading the page.
import { Link } from 'react-router-dom';

// Bootstrap components provide responsive layout and styling.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import NavBar from './NavBar.jsx';
import homeLearning from './assets/home-learning.png';

// Load the shared page styles.
import './App.css';

// These cards introduce the learning topics.
const modules = [
    {
        id: 'html',
        title: 'HTML',
        mobileTitle: 'HTML - Structure',
        description: 'Structure content',
    },
    {
        id: 'css',
        title: 'CSS',
        mobileTitle: 'CSS - Styling',
        description: 'Style the webpage',
    },
    {
        id: 'javascript',
        title: 'JavaScript',
        mobileTitle: 'JavaScript - Interaction',
        description: 'Add interaction',
    },
];

function Home() {
    //return (<NavBar />)
}

export default Home;