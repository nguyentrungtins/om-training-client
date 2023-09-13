export interface RolePermissionsResponse {
  success: boolean;
  data: RolePermission[];
}

export interface RolePermission {
  id: string;
  name: string;
  permissions: string[];
}
