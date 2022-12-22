import DebouncedInput from "./lib/DebouncedInput";
import "./App.css";
import { ChangeEvent, useRef } from "react";

const App = () => {
	const ref = useRef<HTMLInputElement>(null);

	const listen = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
	};

	const test = () => {
		console.log("hello hello");
	};

	test();

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
