export type MenuItem = {
  name: string;
  weight: string;
  price: number | null;
  label?: string;
};

export interface MenuSection {
  id: string;
  title: string;
  items?: MenuItem[];
  subgroups?: { label: string; items: MenuItem[] }[];
}

export type MenuDataType = Record<string, MenuItem[]>;
