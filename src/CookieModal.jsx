import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function CookieModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    This site uses cookies.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Accept</Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CookieModal;