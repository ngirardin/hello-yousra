import { Contacts, contactsSchema } from "@/utils/schemas/contactsSchema";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contacts>([]);

  useEffect(() => {
    fetch("/api/get-contacts")
      .then((response) => response.json())
      .then((data) => {
        const contacts = contactsSchema.parse(data);
        setContacts(contacts);
      });
  }, []);

  return (
    <>
      <h2>My contacts</h2>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
