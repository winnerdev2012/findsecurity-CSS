interface NavMenuSubItemProps {
    to: string;
    icon?: string;
    name: string;
    subTitle?: string;
}

interface NavMenuSubGroupProps {
    groupName: string;
    sub: NavMenuSubItemProps[];
}

interface NavMenuItemFeatureProps {
    imgSrc?: string;
    title: string;
}

interface FeatureType {
    icon: string;
    title: string;
    description: string;
}

export interface NavMenuItemProps {
    name: string;
    to?: string | undefined;
    subGroup?: NavMenuSubGroupProps[];
    features?: NavMenuItemFeatureProps[];
}

export interface FeatureItemsType {
    type: string;
    title: string;
    features: FeatureType[]
}