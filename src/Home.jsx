// React Router handles navigation without reloading the page.
import { Link } from 'react-router-dom';

// Bootstrap components provide responsive layout and styling.
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Import the Home page image and shared styles.
import homeLearning from './assets/home-learning.png';
// Styles specific to the Home page.
import './Home.css';

import Footer from './Footer.jsx';

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
    return (
        <>
            {/* Navigation is already displayed by App.jsx. */}
            <main>
                <Container className="py-5">
                    {/* Stack the introduction and image on mobile.
                        Display them side by side on larger screens. */}
                    <Row className="align-items-center g-4">
                        <Col md={6}>
                            <h1>Welcome to our E-learning platform</h1>

                            <p className="lead">
                                Learn web development step by step.
                                Explore HTML, CSS and JavaScript to build
                                your skills.
                            </p>

                            {/* Apply the soft-blue button styling from App.css. */}
                            <Button
                                as={Link}
                                to="/courses"
                                className="home-explore-button"
                            >
                                Explore courses
                            </Button>
                        </Col>

                        {/* Display the full image inside its rounded frame. */}
                        <Col md={6}>
                            <div className="home-image-frame">
                                <img
                                    src={homeLearning}
                                    alt="Online learning and web development"
                                    className="home-learning-image"
                                />
                            </div>
                        </Col>
                    </Row>

                    {/* Associate this section with its heading for accessibility. */}
                    <section
                        className="mt-5"
                        aria-labelledby="topics-heading"
                    >
                        <h2 id="topics-heading" className="mb-4">
                            Explore learning topics
                        </h2>

                        {/* Show one card per row on mobile and three on
                            medium and larger screens. */}
                        <Row className="g-4">
                            {modules.map((module) => (
                                <Col key={module.id} md={4}>
                                    {/* Apply the shared card styles and
                                        the colour palette for each topic. */}
                                    <Card
                                        className={`home-module-card home-module-card--${module.id} h-100`}
                                    >
                                        <Card.Body>
                                            <Card.Title as="h3">
                                                {/* Use the descriptive title on mobile. */}
                                                <span className="d-md-none">
                                                    {module.mobileTitle}
                                                </span>

                                                {/* Use the shorter title on larger screens. */}
                                                <span className="d-none d-md-inline">
                                                    {module.title}
                                                </span>
                                            </Card.Title>

                                            <Card.Text>
                                                {module.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>
                </Container>
            </main>
            
            <Footer />
        </>
    );
}

export default Home;