import {Theme} from "./CollectionTypes";

export interface FloThemeProps extends Theme {
  [key: string]: any;
}

export interface IRangeDate {
  startDate?: Date;
  endDate?: Date;
}

export interface IHeadCell {
  field: string;
  headerName: string;
  withOutSort?: boolean
}
