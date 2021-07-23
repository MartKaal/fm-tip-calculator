import React, { useState } from 'react';
import './App.scss';
import NumberInput from './components/numberInput/numberInput';
import TipPercent from './components/tipPercent/tipPercent';


function App() {
	const [tip, setTip] = useState();
	const [people, setPeople] = useState();

	return (
		<div className="App">
			<div className="container">
				<div id="calculator">
					<div className="calculator__inputs">
						<NumberInput id="tip" value={tip} label="Bill" placeholder="0.00" onChange={(event) => setTip(event.target.valueAsNumber)}/>
						<p>Select tip %</p>
						<div className="tip-percent">
							<TipPercent className="checkbox" percent={5} />
							<TipPercent className="checkbox" percent={10} />
							<TipPercent className="checkbox" percent={15} />
							<TipPercent className="checkbox" percent={25} />
							<TipPercent className="checkbox" percent={50} />
							<NumberInput id="custom" value={people} label="" placeholder="Custom" onChange={(event) => setPeople(event.target.valueAsNumber)}/>
						</div>
						<NumberInput id="people" value={people} label="Number of People" placeholder="0" onChange={(event) => setPeople(event.target.valueAsNumber)}/>
					</div>
					<div className="calculator__outputs">
					
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
