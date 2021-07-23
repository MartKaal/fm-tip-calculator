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

	constructor(props) {
		super(props);

		this.state = {
		  focussed: false,
		  error: false,
		};
	}
	
	handleError = event => {

		// Check if people has zero
		if(event.target.id === 'people' && event.target.value === '0') {
			this.setState({error: true})
		} else if(event.target.id === 'people' && event.target.value !== '0') {
			this.setState({error: false})
		}
		
	}
	
	render() {
		const { focussed, error } = this.state;
		const { id, value, label, placeholder} = this.props;

		const fieldClassName = `field ${focussed ? 'focussed' : ''}`;

		return(
			<>	
				{ label.length > 0 && <label htmlFor={id}>{label}</label> }
				<div className={fieldClassName}>
					<input
						id={id}
						type="number"
						value={value}
						placeholder={placeholder}
						onChange={e => { this.props.onChange(e); this.handleError(e)}}
						onFocus={() => this.setState({focussed: true})}
						onBlur={() => this.setState({ focussed: false })}
					/>
				</div>
			</>
		)
	}
}