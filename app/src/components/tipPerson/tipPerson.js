import React from 'react';

function TipPerson({percent, people, bill}) {
	let value = '0.00';
	
	if(percent && people && bill && people !== '0') {
		value = Math.floor(((bill / 100 * percent) / people) * 100) / 100;
	}

	return (
		<>
			<div className="amount">
				<div className="amount__text">
					<span>Tip Amount</span>
					<span className="underline">/ person</span>
				</div>
				<span className="amount__amount">${value}</span>
			</div>
		</>
	)
}

export default TipPerson;