import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TipPercent extends Component {
	static propTypes = {
		className: PropTypes.string,
		percent: PropTypes.number,
	}

	static defaultProps = {
		className: '',
		percent: 0,
	}

	render() {
		const { className, percent} = this.props;

		return(
			<>
				<label className={className}>
					<input 
						type="checkbox"
						value={percent}
						onChange={this.props.onChange}					
					/>
					{percent}%
				</label>
			</>
		)
	}
}