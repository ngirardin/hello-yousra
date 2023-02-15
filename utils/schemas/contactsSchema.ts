import zod from "zod";

export const contactSchema = zod.object({
  id: zod.number(),
  name: zod.string(),
  email: zod.string().email(),
});
export type Contact = zod.infer<typeof contactSchema>;

export const contactsSchema = contactSchema.array();
export type Contacts = zod.infer<typeof contactsSchema>;
