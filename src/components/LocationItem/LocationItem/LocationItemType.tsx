export interface DataItem {
    Imgurl: string
    vcount : Number
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
