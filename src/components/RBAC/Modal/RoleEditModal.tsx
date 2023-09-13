import { useState } from "react";
import React from "react";
import { Select } from "antd";
import { Form, Input } from "antd";
import { NextPage } from "next";
import { User } from "@/types/user.interface";
import { ROLE } from "@/constants/Role.constant";
import { notification } from "antd";
import useSWRMutation from "swr/mutation";
import { useSWRConfig } from "swr";
import { EditFormType } from "@/types/form/FormType.interface";
import { sendRequest } from "@/api/swr/editRole";
import { useSelector } from "react-redux";
import { selectTokenState } from "@/redux/tokenSlice";
import { useSession } from "next-auth/react";

const openNotification = (type: string) => {
  if (type === "success") {
    notification.success({
      message: "Update user role successfully!",
      description: "A new user role has been updated!",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  } else if (type === "fail") {
    notification.error({
      message: "Update user role failed!",
      description: "Some Error Occur when updating user role!",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  }
};
interface PageProps {
  data: User;
}
const prefixURL = process.env.NEXT_PUBLIC_SERVER_URL;
const RoleEditModal: NextPage<PageProps> = ({ data }) => {
  // const { update } = useSession();
  const token = useSelector(selectTokenState);
  const [open, setOpen] = useState<boolean>();
  const [form, setForm] = useState<EditFormType>({
    id: data.id,
    roles: data.roles,
  });
  const { mutate } = useSWRConfig();
  const openModal = () => {
    setOpen(!open);
  };
  const handleChange = (value: string[]) => {
    setForm((prevData) => ({
      ...prevData,
      roles: value,
    }));
  };
  const submitForm = async () => {
    try {
      await trigger({
        data: form,
        headers: { Authorization: `Bearer ${token}` },
      });
      mutate(`${prefixURL}/user/all`);
      openNotification("success");
      setOpen(false);
      // update();
    } catch (e) {
      // error handling
      openNotification("fail");
    }
  };
  const { trigger, isMutating } = useSWRMutation(
    `${prefixURL}/user/update-user-role`,
    sendRequest
  );

  const formDefaultValue = {
    id: data.id,
    name: data.name,
    roles: data.roles,
  };

  type FieldType = {
    id: string;
    name?: string;
    roles?: string;
  };
  const RoleSelectOptions = [
    { value: ROLE.ADMIN },
    { value: ROLE.USER },
    { value: ROLE.GUEST },
  ];

  return (
    <div>
      <button
        onClick={openModal}
        className="rounded-lg p-1 text-gray-500 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
      {open ? (
        <div className="bg-black bg-opacity-50 flex justify-center items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen">
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-start justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 ">
                  Edit User Role
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span
                    className="sr-only"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Close modal
                  </span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <Form
                  name="basic"
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={formDefaultValue}
                  autoComplete="off"
                >
                  <Form.Item<FieldType>
                    label="User ID"
                    name="id"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input disabled={true} />
                  </Form.Item>

                  <Form.Item<FieldType>
                    label="User name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input user name!",
                      },
                    ]}
                  >
                    <Input disabled={true} />
                  </Form.Item>
                  <Form.Item<FieldType> label="Roles" name="roles">
                    <Select
                      mode="multiple"
                      style={{ width: "100%" }}
                      placeholder="select one country"
                      onChange={handleChange}
                      optionLabelProp="label"
                      options={RoleSelectOptions}
                    />
                  </Form.Item>
                </Form>
              </div>
              <div className="flex justify-end items-center gap-2 p-6 space-x-2 border-t border-gray-200 rounded-b">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={submitForm}
                >
                  {isMutating && (
                    <svg
                      className="inline mr-3 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      ></path>
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  )}
                  Apply
                </button>
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default RoleEditModal;
