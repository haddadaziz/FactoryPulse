import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <NavLink to="/" end>Tableau de bord</NavLink>
            <NavLink to="/machines" end>Machines</NavLink>
            <NavLink to="/machines/new">Ajouter une machine</NavLink>
            <NavLink to="/kanban">Kanban</NavLink>
        </nav>
    )
}

export default Navbar;