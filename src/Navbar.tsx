import "./Navbar.css"

export function Navbar() {
    return (
    <header>
        <div className="navbar_title">
            <h1 className="main_title"> Hangman Project </h1>
            <h1 className="developer"> By Oscar Gomez </h1>
        </div>
        <nav>
            <ul className="nav_links">
                <li>
                    <a href="https://oscargomez15.github.io/personal-portfolio/" target="_blank"> Portfolio </a> 
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/oscargomez1998/" target="_blank"> Contact </a> 
                </li>
            </ul>
        </nav>
    </header>)
}