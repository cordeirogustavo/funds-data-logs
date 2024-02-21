export type TRecursiveRequired<T> = {
  [K in keyof T]-?: T[K] extends object ? TRecursiveRequired<T[K]> : T[K];
};

export type TRecursivePartial<T> = {
  [K in keyof T]?: T[K] extends object ? TRecursivePartial<T[K]> : T[K];
};

export type TPartialKey<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

export type TRequiredKey<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

export type TRecursiveValueOf<T> = {
  [K in keyof T]: T[K] extends object ? TRecursiveValueOf<T[K]> : T[K];
}[keyof T];

export type TRecursiveKeyOf<T> = {
  [K in keyof T & (string | number)]: T[K] extends object
    ? `${K}.${TRecursiveKeyOf<T[K]>}`
    : `${K}`;
}[keyof T & (string | number)];
