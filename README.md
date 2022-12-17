# Practical debounce

## Why

Many debounce examples and packages out there contain dependencies on larger packages like lodash. While lodash has many features you don't need the extra bloat in your application.

# How

## Hook

In the example below debounce will execute your callback after a 250ms delay.

```javascript
import useDebounce from "@practicaljs/react-debounce";

const { debounce } = useDebounce();

const myMethod = () => {
	debounce(() => {
		someDelayedMethodHere("test");
	}, 250);
};
```

If you need control over canceling the debounce, use the cancel method.

```javascript
import useDebounce from "@practicaljs/react-debounce";

const { cancel } = useDebounce();

useEffect(() => {
	return () => {
		cancel();
	};
});
```

## Component

In the example below the DebounceInput component will call the onChange method after 250ms.

```javascript
import DebouncedInput from "@practicaljs/react-debounce";

const listen = (event: ChangeEvent<HTMLInputElement>) => {
	console.log(event.target.value);
};

return <DebouncedInput delay={250} onChange={listen}></DebouncedInput>;
```
