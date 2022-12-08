let timeout: NodeJS.Timeout;

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

export { debounce, cancel };
