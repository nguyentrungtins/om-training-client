import axios from "axios";

interface FormType {
  name: string;
  permissions: string[];
}
interface ITrigger {
  data: FormType;
  headers: Record<string, string>;
}
export async function sendRequest(url: string, { arg }: { arg: ITrigger }) {
  return axios
    .patch(url, arg.data, { headers: arg.headers })
    .then((res) => res.data);
}
