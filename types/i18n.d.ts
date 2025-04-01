export interface IMetaTags {
  title: string;
  description: string;
  keywords: string;
}

export interface INavigation {
  home: string;
  about: string;
  advantages: string;
  packages: string;
  calculator: string;
  contacts: string;
}

export interface IHeroSection {
  title: string;
  subtitle: string;
  cta: string;
}

export interface IPackageFeatures {
  training: string;
  documents: string;
  marketing: string;
  support: string;
  crm: string;
  manager: string;
  profit: string;
  territory: string;
  clients: string;
  launch: string;
}

export interface IPackages {
  title: string;
  price: string;
  period: string;
  features: IPackageFeatures;
}

export interface ICalculator {
  title: string;
  description: string;
}

export interface IForm {
  name: string;
  phone: string;
  city: string;
  submit: string;
}

export interface ILocale {
  meta: IMetaTags;
  nav: INavigation;
  hero: IHeroSection;
  packages: IPackages;
  calculator: ICalculator;
  form: IForm;
} 