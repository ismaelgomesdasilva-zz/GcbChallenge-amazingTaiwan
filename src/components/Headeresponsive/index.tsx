import { useState } from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {BiPlanet, BiPencil} from 'react-icons/bi'
import {BsPeople} from 'react-icons/bs'
import { Container } from "./styles";
export function Headeresponsive() {
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

                        <li><AiOutlineHome/>Home</li>
                        <li><BiPlanet/>Explore</li>
                        <li><BiPencil/>About</li>
                        <li><BsPeople/>Sign in</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
};

