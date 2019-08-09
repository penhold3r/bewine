import React from 'react'

const ContactIntro = () => {
	return (
		<section className="contact-intro">
			<div className="contact-intro__content">
				<div className="contact-text">
					<h3 className="contact-title">
						Don’t hesitate to contact us for questions and collaborations.
					</h3>
					<p className="contact-data">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cum eveniet
						distinctio eum nobis ab sapiente corporis voluptatem optio deserunt!
					</p>
				</div>
				<form className="contact-form">
					<div className="form-block">
						<label style={{ visibility: 'hidden' }}>Nombre</label>
						<input type="text" className="form-field" placeholder="Nombre" />
					</div>
					<div className="form-block">
						<label style={{ visibility: 'hidden' }}>Email</label>
						<input type="text" className="form-field" placeholder="Email" />
					</div>
					<div className="form-block">
						<label style={{ visibility: 'hidden' }}>Mensaje</label>
						<textarea className="form-field textarea" placeholder="Mensaje" />
					</div>
				</form>
			</div>
		</section>
	)
}

export default ContactIntro
