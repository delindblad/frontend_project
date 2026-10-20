// Navigate between pages without reloading the entire application.
import { Link } from 'react-router-dom';

// Bootstrap components for responsive layout and styled buttons.
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// Shared navigation component.
import NavBar from './NavBar.jsx';

function Home() {
    return (
        // A Fragment groups the navigation and main content
        // without adding an extra HTML element.
        <>
            <NavBar />

            {/* The main element identifies the page's primary content. */}
            <main>
                {/* Container centres the content and adapts to screen size.
                    py-5 adds vertical padding above and below the content. */}
                <Container className="py-5">
                    {/* Connect this section to its heading for screen readers. */}
                    <section aria-labelledby="welcome-heading">
                        {/* display-4 creates a large heading; fw-bold makes it bold. */}
                        <h1 id="welcome-heading" className="display-4 fw-bold">
                            Build your skills, one lesson at a time
                        </h1>

                        {/* lead emphasises the introduction; mt-3 adds top spacing. */}
                        <p className="lead mt-3">
                            Explore programming courses, practise what you learn,
                            and follow your progress at your own pace.
                        </p>

                        {/* Arrange buttons in a row and allow wrapping on narrow screens.
                            gap-3 separates the buttons; mt-4 adds spacing above them. */}
                        <div className="d-flex flex-wrap gap-3 mt-4">
                            {/* Render a React Router link with Bootstrap button styling.
                                The router handles the /frontend_project base path. */}
                            <Button as={Link} to="/courses" variant="primary">
                                Explore courses
                            </Button>

                            {/* Use an outlined style for the secondary action. */}
                            <Button
                                as={Link}
                                to="/mylearning"
                                variant="outline-primary"
                            >
                                My learning
                            </Button>
                        </div>
                    </section>
                </Container>
            </main>
        </>
    );
}

export default Home;