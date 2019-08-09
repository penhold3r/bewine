import React from 'react'

const ProjectPage = ({ location }) => {
	console.log(location)
	const { project } = location.state

	return (
		<section className="single-project">
			<header className="project-header">
				<img
					src={project.acf.header.sizes.medium}
					alt={project.acf.header.title}
					className="project-header__image"
				/>
				<h2 className="project-header__title">{project.title.rendered}</h2>
			</header>
			<div className="project-content">
				<div
					className="project-content__description"
					dangerouslySetInnerHTML={{ __html: project.acf.description }}
				/>
				<div className="project-content__images">
					{project.acf.image_gallery
						.sort((a, b) => a.title.localeCompare(b.title))
						.map(img => (
							<div className="project-image" key={img.id}>
								<img srcSet={img.medium_srcset} alt={img.title} />
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default ProjectPage
