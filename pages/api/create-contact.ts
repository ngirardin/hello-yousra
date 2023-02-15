// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export type Contact = {
  id: number;
  name: string;
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact>
) {
  if (req.method !== 'POST') {
    throw new Error('Only POST requests allowed');
  }

  const contact = await createContact(req.body);

  res.status(200).json(contact);
}

export const createContact = async (contact: Contact): Promise<Contact> => {
const contactInserted = await prisma.contact.create({
  data: contact
});
return contactInserted;
}