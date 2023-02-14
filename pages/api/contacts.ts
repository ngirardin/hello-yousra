// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Contact = {
  id: string;
  name: string;
  email: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact[]>
) {
  const contacts = getContacts();

  res.status(200).json(contacts);
}

export const getContacts = (): Contact[] => {
  return [
    { id: "111", name: "John Doe", email: "john@gmail.com" },
    { id: "222", name: "Jane Doe", email: "jane@gmail.com" },
  ];
};
