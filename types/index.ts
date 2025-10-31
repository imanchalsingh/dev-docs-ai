export interface Resource {
  id: string;
  name: string;
  url: string;
  category: string;
  description?: string;
}

export interface FactCard {
  id: string;
  title: string;
  description: string;
  language: string;
}
