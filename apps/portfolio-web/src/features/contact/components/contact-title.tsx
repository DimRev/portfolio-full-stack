"use client";
import React from "react";
import ContactTitleMdx from "~/app/contact/(contact-content)/contact-title.mdx";
import { useMDXComponents as useCustomMDXComponents } from "~/features/md/components/mdx-components";

type Props = {};

function ContactTitle({}: Props) {
  const components = useCustomMDXComponents({});
  return <ContactTitleMdx components={components} />;
}

export default ContactTitle;
