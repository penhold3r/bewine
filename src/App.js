import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Provider from './context/wp-rest-api'

import ScrollRestore from './components/ScrollRestore'

import Header from './components/Header'
import Footer from './components/Footer'

// routes
import IndexPage from './pages/IndexPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
	return (
		<Provider>
			<BrowserRouter>
				<ScrollRestore>
					<Header />
					<Switch>
						<Route exact path="/" component={IndexPage} />
						<Route path="/portfolio" component={ProjectsPage} />
						<Route path="/trabajos/:slug" component={ProjectPage} />
						<Route path="/estudio" component={AboutPage} />
						<Route path="/equipo" component={TeamPage} />
						<Route path="/contacto" component={ContactPage} />
						<Route component={NotFoundPage} />
					</Switch>
					<Footer />
				</ScrollRestore>
			</BrowserRouter>
		</Provider>
	)
}

export default App
