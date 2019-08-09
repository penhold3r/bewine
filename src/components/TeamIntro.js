import React, { useContext } from 'react'
import { Context } from '../context/wp-rest-api'

const TeamIntro = () => {
	const { team } = useContext(Context)

	console.log(team)

	return (
		<section className="team-intro">
			<header className="team-intro__header">
				<h3 className="team-title">Meet our talented &amp; hard working team</h3>
				<div className="team-text">
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
						euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
						minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
			</header>
			<div className="team-intro__people">
				{team &&
					team
						.sort((a, b) => a.title.rendered.localeCompare(b.title.rendered))
						.map(person => (
							<div className="team-card" key={person.id}>
								<div className="team-card__image">
									<img
										src={
											person._embedded['wp:featuredmedia']
												? person._embedded['wp:featuredmedia'][0].media_details.sizes
														.full.source_url
												: ''
										}
										alt=""
									/>
								</div>
								<div className="team-card__content">
									<h4 className="person-name">{person.title.rendered}</h4>
									<h5 className="person-title">{person.wps_subtitle}</h5>
									<div className="goto">&#43;</div>
								</div>
							</div>
						))}
			</div>
		</section>
	)
}

export default TeamIntro
