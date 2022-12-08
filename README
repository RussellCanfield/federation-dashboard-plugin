# Practical debounce

Many debounce examples and packages out there contain dependencies on larger packages like lodash. While lodash has many features you don't need the extra bloat in your application.

## Example

In the example below debounce will execute your callback after a 250ms delay.

```javascript
import { debounce } from "@practical/react-debounce";

const myMethod = () => {
	debounce(() => {
		someDelayedMethodHere("test");
	}, 250);
};
```

If you need control over canceling the debounce, use the cancel method.

```javascript
import { cancel } from '@practical/react-debounce';

useEffect(() => {
    return () =>s {
        cancel();
    }
})
```
