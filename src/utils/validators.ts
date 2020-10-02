export type ValidationFn = (txt: string) => boolean | string | number[];

export const validateFormat: ValidationFn = txt => /^(\d+\s{0,1})+$/.test(txt) ? true : errorTypes.validateFormat;

export const validateNo52: ValidationFn = txt =>
	/(^52$)|(^52\s+)|(\s+52\s+)|(\D52$)/g.test(txt) ? errorTypes.validateNo52 : true;

export const validateLessThanMaxCells: ValidationFn = txt => {
	let tmp = txt.match(/\d+/g);
	if (tmp?.length == null || tmp.length > 25) return errorTypes.validateLessThanMaxCells;
	return tmp.map(i => Number(i));
}

const errorTypes = {
	validateFormat: "Invalid input!",
	validateNo52: "Input can't contain 52!",
	validateLessThanMaxCells: "Input limited to 25 numbers!"
};
