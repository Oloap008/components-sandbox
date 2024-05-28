/// <reference types="vite/client" />

export interface AccordionData {
  _id: number;
  title: string;
  content: string;
}

export type ViewItem = {
  label: string;
  to: string;
  children?: MenuItem[];
};
