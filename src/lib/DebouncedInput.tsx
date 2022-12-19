import React, { useEffect } from "react";
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
		const { debounce, cancel } = useDebounce();

		const { delay, onChange } = props;

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			debounce(() => {
				if (onChange) {
					onChange(event);
				}
			}, delay);
		};

		useEffect(() => {
			return () => {
				cancel();
			};
		});

		return <input {...props} ref={ref} onChange={handleChange} />;
	}
);

export default DebouncedInput;
