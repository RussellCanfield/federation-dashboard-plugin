import React from "react";
import useDebounce from "./useDebounce";

interface DebounceInputProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	delay: number;
}

const DebouncedInput = React.forwardRef(
	(props: DebounceInputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
		const { debounce } = useDebounce();

		const { delay, onChange } = props;

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			debounce(() => {
				if (onChange) {
					onChange(event);
				}
			}, delay);
		};

		return <input {...props} ref={ref} onChange={handleChange} />;
	}
);

export default DebouncedInput;
