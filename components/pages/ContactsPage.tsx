import { Contacts, contactsSchema } from "@/utils/schemas/contactsSchema";
import { useEffect, useState } from "react";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contacts>([]);

  useEffect(() => {
    fetch("/api/contacts")
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
          <li key={contact.email}>{contact.name}</li>
        ))}
      </ul>
    </>
  );
}
