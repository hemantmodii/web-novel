import MailchimpForm from "@/components/MailChimp";

export default function SubscribePage() {
  return (
    <div className="h-full flex justify-center flex-col items-center mb-20">
      <h1 className="text-4xl font-bold mt-20">Subscribe for Chapter Updates</h1>
      <p className="mt-2 mb-20">Don't miss out! Get notified when a new chapter is posted.</p>
      <MailchimpForm />
    </div>
  );
}