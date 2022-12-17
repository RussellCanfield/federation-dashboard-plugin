import DebouncedInput from "./lib/DebouncedInput";
import "./App.css";
import React, { ChangeEvent } from "react";

const App = () => {
	const ref = React.useRef<HTMLInputElement>(null);

	const listen = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	return (
		<>
			<DebouncedInput
				delay={1000}
				className={"input-test"}
				ref={ref}
				onChange={listen}
			></DebouncedInput>
			<DebouncedInput delay={1000} onChange={listen}></DebouncedInput>
		</>
	);
};

export default App;
