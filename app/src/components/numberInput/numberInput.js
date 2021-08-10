import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class NumberInput extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		locked: PropTypes.bool,
		focussed: PropTypes.bool,
		value: PropTypes.string,
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

	constructor(props) {
		super(props);

		this.state = {
		  focussed: false,
		  error: false,
		  errorMessage: '',
		};
	}
	
	handleError = event => {

		// Check if people has zero
		if(event.target.id === 'people' && event.target.value === '0') {
			this.setState({error: true, errorMessage: `Can't be zero`})
		} else if(event.target.id === 'people' && event.target.value !== '0') {
			this.setState({error: false, errorMessage: ''})
		}
		
	}

	preventMinus = (e) => {
		if (e.code === 'Minus') {
			e.preventDefault();
		}
	};
	
	render() {
		const { focussed, error, errorMessage } = this.state;
		const { id, value, label, placeholder} = this.props;

		const fieldClassName = `field ${focussed ? 'focussed' : ''} ${error ? 'error' : ''} ${id}`;

		return(
			<>	<div className="input__labels">
					{ label.length > 0 && <label htmlFor={id}>{label}</label> }
					{ error === true && <span>{errorMessage}</span> }
				</div>
				<div className={fieldClassName}>
					<input
						id={id}
						type="number"
						value={value}
						placeholder={placeholder}
						onChange={e => { this.props.onChange(e); this.handleError(e)}}
						onFocus={() => this.setState({focussed: true})}
						onBlur={() => this.setState({ focussed: false })}
						onKeyPress={this.preventMinus}
						inputprops={{minlength:5, maxLength: 20}}
					/>
				</div>
			</>
		)
	}
}