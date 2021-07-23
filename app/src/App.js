import React, { useState } from 'react';
import './scss/main.scss'
import './App.scss';
import NumberInput from './components/numberInput/numberInput';
import TipPercent from './components/tipPercent/tipPercent';


function App() {
	const [tip, setTip] = useState();
	const [people, setPeople] = useState();
	const [percent, setPercent] = useState({selected: '',custom: '', percentages: [5, 10, 15, 25, 50]});

	return (
		<div className="App">
			<div className="container">
				<div id="calculator">
					<div className="calculator__inputs">
						<NumberInput id="tip" value={tip} label="Bill" placeholder="0.00" onChange={(event) => setTip(event.target.valueAsNumber)}/>
						<p>Select tip %</p>
						<div className="tip-percent">
							{percent.percentages.map(percent => (<TipPercent className="checkbox" percent={percent} />))}
							<NumberInput id="custom" value={percent.custom} label="" placeholder="Custom" onChange={(event) => setPeople(event.target.valueAsNumber)}/>
						</div>
						<NumberInput id="people" value={people} label="Number of People" placeholder="0" error="Can't be zero" onChange={(event) => setPeople(event.target.valueAsNumber)}/>
					</div>
					<div className="calculator__outputs">
					
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
