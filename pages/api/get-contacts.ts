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
  res: NextApiResponse<Contact[]>
) {
  const contacts = await getContacts();
  console.log(contacts);

  res.status(200).json(contacts);
}

const getContacts = async (): Promise<Contact[]> => {
  const contacts = await prisma.contact.findMany();
  return contacts;
};