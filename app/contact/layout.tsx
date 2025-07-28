import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Teapresso 野萃 for inquiries, feedback, press, events, or franchise opportunities. Fill out our contact form or reach us directly at info@tea-presso.com.",
  keywords: ["contact Teapresso", "tea house contact", "franchise inquiry", "press inquiry", "events catering", "customer feedback"],
  openGraph: {
    title: "Contact Teapresso 野萃 - Get in Touch",
    description: "Contact us for inquiries, feedback, press, events, or franchise opportunities.",
    images: ["/home.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 