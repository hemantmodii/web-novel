'use client';

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-10 text-center mt-32">
      <h1 className="text-4xl font-bold text-center mb-10">Contact</h1>
      <p className="text-lg leading-relaxed mt-4">
        If you have any questions or feedback, feel free to reach out to me at <Link href={"mailto:7775hemant.modi@gmail.com"}>7775hemant.modi@gmail.com</Link> or <Link href={"tel:+919660777331"}>+91 96607 77331</Link> .
      </p>
    </div>
  );
}
