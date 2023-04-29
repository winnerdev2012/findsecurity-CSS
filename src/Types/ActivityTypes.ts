export interface ActivityActionProps {
  key: string;
  name: string;
  icon: string;
}

export interface ActivityMenu {
  groupTitle: string;
  actions: ActivityActionProps[];
}
