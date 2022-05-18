import './NavBar.css'
import CartWidget from '../CartWidget.js/CartWidget'

const NavBar = () => {
    return (
            <nav>
                <h1>Infinite</h1>
                <div>
                    <button>Damas</button>
                    <button>Hombres</button>
                    <button>Niños</button>
                </div>
                <CartWidget/>
            </nav>
    )
}

export default NavBar