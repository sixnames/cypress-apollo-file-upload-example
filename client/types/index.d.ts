export interface QueryInterface {
  query?: { [key: string]: any };
}

export interface PathInterface {
  pathname: string;
  query?: { [key: string]: string | string[] };
}

export interface NavItemChildInterface {
  name: string;
  path: string | PathInterface;
  hidden?: boolean;
  testId?: string;
}

export interface NavItemInterface {
  name: string;
  path?: string | PathInterface;
  icon?: string;
  counter?: number;
  children?: NavItemChildInterface[];
  hidden?: boolean;
  testId?: string;
}

// types/next-optimized-images.d.ts
declare module '*.png';
declare module '*.png?include';
declare module '*.png?webp';
declare module '*.png?inline';
declare module '*.png?url';
declare module '*.png?original';

declare module '*.jpg';
declare module '*.jpg?include';
declare module '*.jpg?webp';
declare module '*.jpg?inline';
declare module '*.jpg?url';
declare module '*.jpg?original';

declare module '*.jpeg';
declare module '*.jpeg?include';
declare module '*.jpeg?webp';
declare module '*.jpeg?inline';
declare module '*.jpeg?url';
declare module '*.jpeg?original';

declare module '*.webp';
declare module '*.webp?include';
declare module '*.webp?webp';
declare module '*.webp?inline';
declare module '*.webp?url';
declare module '*.webp?original';

declare module '*.svg';
declare module '*.svg?include';
declare module '*.svg?webp';
declare module '*.svg?inline';
declare module '*.svg?url';
declare module '*.svg?original';
declare module '*.svg?sprite';

declare module '*.gif';
declare module '*.gif?include';
declare module '*.gif?webp';
declare module '*.gif?inline';
declare module '*.gif?url';
declare module '*.gif?original';
