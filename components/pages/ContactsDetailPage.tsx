import { Contact } from "@/pages/api/get-contacts";
import { contactSchema } from "@/utils/schemas/contactsSchema";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ContactsDetailPage() {
  const router = useRouter();

  const contactId = router.query.id;

  const [contact, setContact] = useState<Contact>();

  useEffect(() => {
    if (contactId === undefined) {
      return;
    }

    fetch(`/api/contacts/${contactId}`)
      .then((response) => response.json())
      .then((json) => contactSchema.parse(json))
      .then((contact) => setContact(contact));
  }, [contactId]);

  if (contact === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      Detail contact: {contact?.name} - {contact?.email}
      <Formik
        initialValues={{
          name: contact?.name,
          email: contact?.email,
        }}
        onSubmit={async (values) => {
          const contact = {
            name: values.name,
            email: values.email
          };
          fetch('/api/create-contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
          })
          alert("Contact Saved!!");
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Jane" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
          </div>

          <button type="submit">Submit</button>

          <div></div>
        </Form>
      </Formik>
    </div>
  );
}
