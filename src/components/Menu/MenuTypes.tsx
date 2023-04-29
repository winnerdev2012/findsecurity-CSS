export interface MenuItem {
    url:  string
    name: string
    className?: string
    active?: boolean
    subMenus?: MenuItem[]
}

export interface MenuData {
    id?: string
    className?: string;
    items: MenuItem[];
}
