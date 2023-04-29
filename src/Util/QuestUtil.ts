import {calPercentage} from "./MathUtil";
import {ActivityModule} from "../Types/QuestTypes";

export const getResultsPercentage = (results?: number[] | null, other?: number | null) => {
  const total = results?.reduce((a, b) => a + b, 0) || 0;
  const totOther = total + (other || 0)
  const arr = results?.map((r) => calPercentage(r, totOther)) || [];
  const otherPercentage = calPercentage(other, totOther);
  return {options: arr, other: otherPercentage};
}

export const getTotalModulePoints = (modules?: ActivityModule[] | null) => {
  return modules?.reduce((a, b) => a + b.points, 0) || 0;
}

export const getSelectionItemText = (item: number) => {
  return String.fromCharCode(97 + Number(item)).toUpperCase()
}

export const transFormUserSelection = (selection?: number[]) => {
  if (!selection) return "N/A";
  return selection.map((s) => getSelectionItemText(s))
}
