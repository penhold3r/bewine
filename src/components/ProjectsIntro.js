import React, { useContext } from 'react'
import { Context } from '../context/wp-rest-api'

import Link from './Link'

const ProjectsIntro = () => {
	const { projects } = useContext(Context)

	return (
		<section className="projects-intro">
			<div className="projects-grid">
				{projects.length &&
					projects.map(project => (
						<Link
							to={{
								pathname: `/trabajos/${project.slug}`,
								state: {
									project
								}
							}}
							className="project-card"
							key={project.id}
						>
							<div className="project-image">
								<img src={project.acf.header.sizes.medium} alt={project.title.rendered} />
							</div>
							<div className="project-details">
								<h3 className="project-title">{project.title.rendered}</h3>
								<p className="categories">
									{project.categories.map(cat => (
										<small key={cat.id}>{cat.name}</small>
									))}
								</p>
								<div className="goto">&#43;</div>
							</div>
						</Link>
					))}
			</div>
		</section>
	)
}

export default ProjectsIntro
