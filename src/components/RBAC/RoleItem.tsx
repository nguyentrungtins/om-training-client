import { User } from "@/types/user.interface";
import { NextPage } from "next";
import RoleEditModal from "./Modal/RoleEditModal";
// import { useEffect, useState } from "react";
interface PageProps {
  data: User;
}
const RoleItem: NextPage<PageProps> = ({ data }) => {
  return (
    <tr>
      <td className="whitespace-nowrap p-4 text-sm font-medium">
        <div>
          <h2 className="font-medium text-gray-700">{data?.name}</h2>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4 text-sm font-medium">
        <div>
          <h2 className="text-gray-700">{data?.email}</h2>
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4 text-sm font-medium">
        <div className="inline gap-x-2 rounded-full bg-emerald-100/60 px-3 py-1 text-sm font-normal text-emerald-500">
          {data.status ? "Active" : "Deactive"}
        </div>
      </td>
      <td className="whitespace-nowrap px-12 py-4 text-sm font-medium">
        <div>
          <h4 className="text-gray-700">
            {data?.roles.map((role, index: number) => {
              return (
                <span
                  key={`${role}_${index}`}
                  className="inline rounded-full bg-gray-100 px-3 py-1 text-sm font-normal text-gray-500 mr-1"
                >
                  {role}
                </span>
              );
            })}
          </h4>
        </div>
      </td>

      <td className="p-4 text-sm">
        <RoleEditModal data={data} />
      </td>
    </tr>
  );
};
export default RoleItem;
