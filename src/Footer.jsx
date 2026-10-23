import Container from 'react-bootstrap/Container';

// Shared footer with the existing styling.
function Footer() {
    return (
        <footer className="home-footer py-4 mt-5">
            <Container className="text-center">
                <p className="home-footer-message mb-0">
                    Every great website starts with a line of code.
                </p>
            </Container>
        </footer>
    );
}

export default Footer;