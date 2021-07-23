import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tipPercent.scss';

export default class TipPercent extends Component {
	static propTypes = {
		className: PropTypes.string,
		percent: PropTypes.number,
	}

	static defaultProps = {
		className: '',
		percent: 0,
	}

	handleChange = event => {
		let parent = event.target.parentElement;
		let siblings = parent.parentElement.children;

		// Remove active class from all siblings
		for(let sib of siblings) {
			if(sib.children.length === 1 && sib.children[0].type === 'checkbox') {
				sib.children[0].checked = false;
			}
			sib.classList.remove('active');
		}

		// Set current target to active and checked
		event.target.checked = true;
		parent.classList.add('active');
	}

	render() {
		const { className, percent} = this.props;

		return(
			<>
				<label className={className}>
					<input 
						type="checkbox"	
						onChange={this.handleChange}					
					/>
					{percent}%
				</label>
			</>
		)
	}
}