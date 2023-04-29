export interface Category {
    id: string;
    name: string;
    templates: Template[];
}

export interface Template {
    id: string
    name: string;
    description: string;
    type: string;
    imgSrc?: string | undefined;
}