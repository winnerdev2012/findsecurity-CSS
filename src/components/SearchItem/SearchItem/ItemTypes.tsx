export interface DataItem {
    Imgurl: string
    avatar : string
    name: string
    className?: string
    active?: boolean
    subMenus?: DataItem[]
}

export interface Datamenu {
    id?: string
    className?: string;
    itemarray: DataItem[];
    sort_type?: Number
}
