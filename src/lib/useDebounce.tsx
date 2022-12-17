const useDebounce = () => {
	let timeout: any;

	const debounce = (callback: () => void, delay: number) => {
		if (timeout) {
			clearTimeout(timeout);
		}

		timeout = setTimeout(callback, delay);
	};

	const cancel = () => {
		if (!timeout) return;

		clearTimeout(timeout);
	};

	return { debounce, cancel };
};

export default useDebounce;
