import React from 'react'
import { withRouter } from 'react-router'

class ScrollRestore extends React.Component {
	componentDidUpdate(prevProps) {
		this.props.location !== prevProps.location && window.scrollTo(0, 0)
	}

	render() {
		return this.props.children
	}
}

export default withRouter(ScrollRestore)
