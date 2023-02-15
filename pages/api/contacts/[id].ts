// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Contact, getContacts } from "../get-contacts";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact>
) {
  const id = req.query.id;

  if (typeof id !== "string") {
    throw new Error("Invalid id");
  }

  const contact = await getContact(parseInt(id));

  res.status(200).json(contact);
}

const getContact = async (id: number): Promise<Contact> => {
  const contact = await prisma.contact.findUnique({
    where: {
      id,
    },
  });

  if (!contact) {
    return getContacts()[0];
  }
  return contact;
};


