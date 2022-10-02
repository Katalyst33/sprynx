export interface PackageServiceTypings {
  title: string;
  description: string;
  uuid: string;
}

export interface PackageInfoTypings {
  uuid: string;
  title: string;
  description: string;
  services: [];
  link: string;
  duration: string;
  regularCar: string;
  largeCar: string;
  logistics: string;
}

export interface PackageCardTypings {
  packageInfo: PackageInfoTypings;
  deletePackageCard: any;
}
