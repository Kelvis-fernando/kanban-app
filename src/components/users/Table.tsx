import { Pencil, XCircle } from "phosphor-react";
import Avatar from "./Avatar";

interface TableProps {
  id: number;
  avatar: string;
  name: string;
  email: string;
  role: string;
  access: string;
}

const Table = ({ avatar, name, email, role, access }: TableProps) => {
  return (
    <tr className="flex items-center hover:bg-zinc-600 bg-zinc-700 rounded mb-2">
      <td className="p-3 px-5 w-30">
        <Avatar image={avatar} />
      </td>
      <td className="p-3 px-5 w-40">{name}</td>
      <td className="p-3 px-5 w-60">{email}</td>
      <td className="p-3 px-5 w-40">{role}</td>
      <td className="p-3 px-5 w-40">{access}</td>
      <td className="p-3 px-5 flex justify-end">
        <button
          type="button"
          className="mr-3 text-sm bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Edit
        </button>
        <button
          type="button"
          className="text-sm bg-red-300 hover:bg-red-400 text-black font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Table;
