import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, Button} from "react-bootstrap";
import App from "./App.jsx";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </StrictMode>,
);
