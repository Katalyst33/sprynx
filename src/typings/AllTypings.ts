export interface PackageServiceTypings {
  title: string;
  description: string;
}

export interface PackageInfoTypings {
  title: string;
  description: string;
  services: PackageServiceTypings[];
  link: string;
  duration: string;
  regularCar: string;
  largeCar: string;
  logistics: string;
}

export interface PackageCardTypings {
  packageInfo: PackageInfoTypings;
}
