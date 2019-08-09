import React, { useState } from 'react'

import Link from './Link'

const Header = () => {
	const [hambState, setHambState] = useState(false)
	const [menuState, setMenuState] = useState(false)

	const toggleMenu = () => {
		setHambState(!hambState)
		setMenuState(!menuState)
	}

	return (
		<header className="main-header">
			<div className="inner-header">
				<h1 className="logo">
					<Link to="/">
						<span>BEWINE</span>
					</Link>
				</h1>

				<div className={hambState ? 'hamb-menu crossed' : 'hamb-menu'} onClick={toggleMenu}>
					<div className="hamb-menu__bar" />
					<div className="hamb-menu__bar" />
					<div className="hamb-menu__bar" />
				</div>

				<div className={menuState ? 'side-menu open' : 'side-menu'}>
					<nav className="main-nav">
						<Link className="main-nav__link" to="/" onClick={toggleMenu}>
							Inicio
						</Link>
						<Link className="main-nav__link" to="/estudio" onClick={toggleMenu}>
							Estudio
						</Link>
						<Link className="main-nav__link" to="/portfolio" onClick={toggleMenu}>
							Trabajos
						</Link>
						<Link className="main-nav__link" to="/equipo" onClick={toggleMenu}>
							Equipo
						</Link>
						<Link className="main-nav__link" to="/contacto" onClick={toggleMenu}>
							Contacto
						</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
