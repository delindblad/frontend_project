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
    return (
        // Keep the footer at the bottom on short pages.
        <div className="d-flex flex-column min-vh-100">
            <NavBar />

            <main className="flex-grow-1">
                <Container className="py-4">
                    {/* Stack text and image on mobile/tablet.
                        Place them side by side on desktop. */}
                    <section
                        className="border rounded p-3 p-md-4 mb-4"
                        aria-labelledby="welcome-heading"
                    >
                        <Row className="align-items-center g-4">
                            <Col xs={12} lg={5}>
                                <h1
                                    id="welcome-heading"
                                    className="h4 fw-bold"
                                >
                                    Build your first webpage
                                </h1>

                                <p className="mb-2">
                                    Learn HTML, CSS and JavaScript at your own
                                    pace.
                                </p>

                                <p className="mb-4">
                                    Beginner level | Six lessons | Three short
                                    quizzes
                                </p>

                                {/* Soft-blue button leading to the course list. */}
                                <Button
                                    as={Link}
                                    to="/courses"
                                    variant="primary"
                                    className="home-explore-button"
                                >
                                    Explore courses
                                </Button>
                            </Col>

                            <Col xs={12} lg={7}>
                                {/* Display the full image with rounded corners. */}
                                <div className="home-image-frame">
                                    <img
                                        src={homeLearning}
                                        alt="Laptop displaying web development code beneath HTML, CSS and JavaScript logos."
                                        className="home-learning-image"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </section>

                    <section aria-label="Learning modules">
                        {/* Mobile: one column; tablet: two; desktop: three. */}
                        <Row xs={1} md={2} lg={3} className="g-3">
                            {modules.map((module) => (
                                <Col key={module.id}>
                                    {/* Equal-height cards with topic colours. */}
                                    <Card
                                        className={`h-100 home-module-card home-module-card--${module.id}`}
                                    >
                                        <Card.Body className="p-3 p-md-4">
                                            <Card.Title
                                                as="h2"
                                                className="h5 fw-bold mb-0"
                                            >
                                                {/* Short title on tablet/desktop. */}
                                                <span className="d-none d-md-inline">
                                                    {module.title}
                                                </span>

                                                {/* Descriptive title on mobile. */}
                                                <span className="d-md-none">
                                                    {module.mobileTitle}
                                                </span>
                                            </Card.Title>

                                            {/* Additional details on tablet/desktop. */}
                                            <Card.Text className="d-none d-md-block mt-2 mb-0">
                                                {module.description}
                                                <br />
                                                2 lessons + 1 quiz
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </section>
                </Container>
            </main>

            {/* An encouraging message for learners. */}
            <footer className="home-footer py-4">
                <Container className="text-center">
                    <p className="home-footer-message mb-0">
                        Every great website starts with a first line of code.
                    </p>
                </Container>
            </footer>
        </div>
    );
}

export default Home;