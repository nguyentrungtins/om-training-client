import { NextPage } from "next";
import { RolePermission } from "./types/Role-response.interface";
import PermissionEditModal from "./Modal/PermissionEditModal";
// import { useEffect, useState } from "react";
interface PageProps {
  data: RolePermission;
}
const PermissionItem: NextPage<PageProps> = ({ data }) => {
  return (
    <tr>
      <td className="whitespace-nowrap p-4 text-sm font-medium">
        <div>
          <h2 className="font-medium text-gray-700">{data.name}</h2>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4 text-sm font-medium">
        <div>
          <h4 className="text-gray-700">
            {data?.permissions.map((permission, index: number) => {
              return (
                <span
                  key={`${permission}_${index}`}
                  className="inline rounded-full bg-gray-100 px-3 py-1 text-sm font-normal text-gray-500 mr-1"
                >
                  {permission}
                </span>
              );
            })}
          </h4>
        </div>
      </td>

      <td className="p-4 text-sm">
        <PermissionEditModal data={data} />
      </td>
    </tr>
  );
};
export default PermissionItem;
