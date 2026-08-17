// The contact form sends real email via EmailJS (https://www.emailjs.com) —
// a free client-side email service, so no backend is required.
//
// Fill these in with your own EmailJS account details:
//   1. Sign up at emailjs.com (free tier is enough)
//   2. Add an Email Service (e.g. connect your Gmail) → copy its Service ID
//   3. Create an Email Template with variables {{from_name}}, {{from_email}},
//      {{message}} → copy its Template ID
//   4. Account → General → copy your Public Key
//
// Until these are filled in, the form falls back to opening the visitor's
// email client with a pre-filled message to odewunmimohammed@gmail.com.

export const EMAILJS_CONFIG = {
  serviceId: "service_w2gtwvc",
  templateId: "template_utyour9",
  publicKey: "nNRWV2NNjv_LifAWq",
};

export const CONTACT_EMAIL = "odewunmimohammed@gmail.com";

export const isEmailJsConfigured = () =>
  EMAILJS_CONFIG.serviceId !== "YOUR_SERVICE_ID" &&
  EMAILJS_CONFIG.templateId !== "YOUR_TEMPLATE_ID" &&
  EMAILJS_CONFIG.publicKey !== "YOUR_PUBLIC_KEY";
