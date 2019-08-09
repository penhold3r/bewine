import React from 'react'

import Hero from '../components/Hero'
import AboutIntro from '../components/AboutIntro'
import Services from '../components/Services'
import ProjectsIntro from '../components/ProjectsIntro'
import TeamIntro from '../components/TeamIntro'
import ContactIntro from '../components/ContactIntro'
import MapComponent from '../components/MapComponent'

const IndexPage = () => {
	return (
		<>
			<Hero />
			<AboutIntro />
			<Services />
			<ProjectsIntro />
			<TeamIntro />
			<ContactIntro />
			<MapComponent />
		</>
	)
}

export default IndexPage
