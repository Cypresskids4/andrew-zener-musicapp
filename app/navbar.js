'use client'
import style from "./style.css"

export default function Navbar(){ // navbar component
    return(
        <div className="navbar">
            <img src="./panda-with-da-glock.png" alt="" className="nav-logo"></img>
            <h1 className="nav-title">drew woaaaaaaaahhhhhhh</h1>
            <a onClick={
                () => {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    })
                }
            } className="nav-link">more woaaaaaaaahhhhhhh</a>
        </div>
    )
}