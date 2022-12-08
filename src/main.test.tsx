import {
	afterEach,
	assert,
	beforeEach,
	describe,
	expect,
	test,
	vi,
} from "vitest";

import { debounce } from "./main";

const testMethods = {
	values: Array<number>(),
	doStuff(input: number) {
		this.values.push(input);
	},
};

describe("Debounce", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
		testMethods.values = [];
	});

	test("Debounce takes latest", () => {
		const spy = vi.spyOn(testMethods, "doStuff");

		const test = (input: number) => {
			debounce(() => {
				testMethods.doStuff(input);
			}, 50);
		};

		test(9);
		vi.runAllTimers();

		expect(spy).toHaveBeenCalledTimes(1);
		expect(testMethods.values).toStrictEqual([9]);
	});

	test("Debounce ignores previous call and takes latest", () => {
		const spy = vi.spyOn(testMethods, "doStuff");

		const test = (input: number) => {
			debounce(() => {
				testMethods.doStuff(input);
			}, 500);
		};

		test(9);
		vi.advanceTimersByTime(5);
		test(8);
		vi.advanceTimersByTime(600);

		expect(spy).toHaveBeenCalledTimes(1);
		expect(testMethods.values).toStrictEqual([8]);
	});
});
