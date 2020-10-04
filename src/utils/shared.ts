import { reactive } from "vue";

type WorkArea = {
	start: number | undefined;
	end: number | undefined;
};
type Refs = {
	pivotRef: number | undefined;
	rightRef: number | undefined;
	leftRef: number | undefined;
};
type RelevantSortData = {
	state: "sorting" | "available";
	arr: number[];
	length: number;
	workArea: WorkArea;
	refs: Refs;
};

export const sortData = reactive<RelevantSortData>({
	state: "available",
	arr: [],
	length: 0,
	workArea: { start: undefined, end: undefined },
	refs: { pivotRef: undefined, leftRef: undefined, rightRef: undefined },
});

export const setArrVal = (newVal: number[]) => {
	sortData.arr = newVal;
	sortData.length = newVal.length;
	setWorkArea({ start: undefined, end: undefined });
	setRefs({ pivotRef: undefined, leftRef: undefined, rightRef: undefined });
};

export const setWorkArea = (area: WorkArea) => (sortData.workArea = area);

export const setRefs = (refs: Partial<Refs>, isPartial: boolean = true) => {
	const { pivotRef: prevPivot, rightRef: prevRight, leftRef: prevLeft } = sortData.refs;
	let { pivotRef, leftRef, rightRef } = refs;
	if (isPartial) {
		if (pivotRef == null) pivotRef = prevPivot;
		if (leftRef == null) leftRef = prevLeft;
		if (rightRef == null) rightRef = prevRight;
	}
	sortData.refs = { pivotRef, leftRef, rightRef };
};
