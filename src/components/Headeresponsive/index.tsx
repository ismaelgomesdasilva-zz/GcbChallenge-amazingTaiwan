import { Container } from "./styles";
import { useState } from "react";

function Headeresponsive() {
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)

    }
    return (
        <Container>
            <div className={active ? 'icon iconActive' : 'icon'}onClick={ToggleMode}>
                <div className="hamburger hamburguerIcon" ></div>
            </div>
            <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className="list">

                    <ul className="listItems">

                        <li>Home</li>
                        <li>Explore</li>
                        <li>About</li>
                        <li>Sign in</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
};
export default Headeresponsive;
