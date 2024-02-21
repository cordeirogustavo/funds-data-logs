import localInformation from './localInformation';

export const hasPermission = (permission: string[]) =>
  localInformation
    .getUserScopes()
    .some((scope: string) => permission.includes(scope));
