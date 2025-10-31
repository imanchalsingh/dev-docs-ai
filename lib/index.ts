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
  icon: string;
  language: string;
}

export interface Settings {
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  colorScheme: 'default' | 'dark' | 'light';
  primaryColor: string;
}