import './NavBar.css'
import CartWidget from '../CartWidget.js/CartWidget'

const NavBar = () => {
    return (
            <nav ClassName='NavBar'>
                <div>
                    <h1>INFINITE</h1>
                    <button>Damas</button>
                    <button>Hombres</button>
                    <button>Niños</button>
                </div>
                <CartWidget/>
            </nav>
    )
}

export default NavBar