import React from 'react'

import Img from '../images/bewine_hero.jpg'

const Hero = () => {
	return (
		<section className="hero">
			<div className="slider">
				<div className="slide">
					<img className="slide__image" src={Img} alt="[]" />
					<div className="slide__content">
						<h3 className="slide-title">Lorem Ipsum</h3>
						<p className="slide-text">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod alias distinctio
							exercitationem, quibusdam deleniti quia?
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
