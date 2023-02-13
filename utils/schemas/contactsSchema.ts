import zod from "zod";

export const contactsSchema = zod
  .object({
    name: zod.string(),
    email: zod.string().email(),
  })
  .array();

export type Contacts = zod.infer<typeof contactsSchema>;
