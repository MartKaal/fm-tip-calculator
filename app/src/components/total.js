import React from 'react';

function billInput(props) {
	return (
		<>
			<h3>Bill</h3>
			<input type="text" name="tip" id="tip" onChange={console.log('test')} />
		</>
	)
}

export default billInput; 