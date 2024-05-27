import React from "react";
import ContactTitle from "~/features/contact/components/contact-title";

type Props = {};

function ContactPage({}: Props) {
  return (
    <main className="flex-1">
      <ContactTitle />
    </main>
  );
}

export default ContactPage;
