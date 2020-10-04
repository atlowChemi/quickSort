import { reactive, ref, Ref } from "vue";

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
	arr: number[];
	length: number;
	workArea: WorkArea;
	refs: Refs;
}

export const sortData = reactive<RelevantSortData>({
	arr: [],
	length: 0,
	workArea: { start: undefined, end: undefined },
	refs: { pivotRef: undefined, leftRef: undefined, rightRef: undefined }
})

export const setArrVal = (newVal: number[]) => {
	sortData.arr = newVal;
	sortData.length = newVal.length;
	setWorkArea({ start: undefined, end: undefined });
	setRefs({ pivotRef: undefined, leftRef: undefined, rightRef: undefined });
};

export const setWorkArea = (area: WorkArea) => sortData.workArea = area;

export const setRefs = (refs: Refs) => sortData.refs = refs;
