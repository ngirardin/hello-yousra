// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Contact, getContacts } from "../contacts";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact>
) {
  const id = req.query.id;

  if (typeof id !== "string") {
    throw new Error("Invalid id");
  }

  const contacts = getContact(id);

  res.status(200).json(contacts);
}

const getContact = (id: string): Contact => {
  const contact = getContacts().find((contact) => contact.id === id);

  if (!contact) {
    throw new Error("Contact not found");
  }

  return contact;
};
