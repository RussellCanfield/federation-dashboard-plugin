import { useEffect, forwardRef } from "react";
import useDebounce from "./useDebounce";
import type {
	DetailedHTMLProps,
	HTMLAttributes,
	ForwardedRef,
	ChangeEvent,
} from "react";

interface DebounceInputProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	delay: number;
}

const DebouncedInput = forwardRef(
	(props: DebounceInputProps, ref: ForwardedRef<HTMLInputElement>) => {
		const { debounce, cancel } = useDebounce();

		const { delay, onChange } = props;

		const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
