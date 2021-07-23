import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './numberInput.scss';

export default class NumberInput extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		locked: PropTypes.bool,
		focussed: PropTypes.bool,
		value: PropTypes.number,
		error: PropTypes.string,
		label: PropTypes.string,
		placeholder: PropTypes.string,
		onChange: PropTypes.func,
	 };
	static defaultProps = {
		locked: false,
		focussed: false,
		value: '',
		error: '',
		label: '',
		placeholder: '',
		onChange: () => '',
	 };
	
	render() {
		const { id, value, label, placeholder} = this.props;

		return(
			<>
				<label htmlFor={id}>{label}</label>
				<div className="field">
					<input
						id={id}
						type="number"
						value={value}
						placeholder={placeholder}
						onChange={this.props.onChange}
					/>
				</div>
			</>
		)
	}
}