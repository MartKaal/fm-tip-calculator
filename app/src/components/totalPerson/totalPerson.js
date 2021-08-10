import React from 'react';

function TotalPerson({percent, people, bill}) {
	let tip = '0.00';
	let amount = '0.00';

	if(percent && people && bill && people !== '0') {
		tip = Math.floor(((bill / 100 * percent) / people) * 100) / 100;
		amount = Math.floor(((bill / people) + tip) * 100) / 100;
	}

	return (
		<>
			<div className="amount">
				<div className="amount__text">
					<span>Total</span>
					<span className="underline">/ person</span>
				</div>
				<span className="amount__amount">${amount}</span>
			</div>
		</>
	)
}

export default TotalPerson;