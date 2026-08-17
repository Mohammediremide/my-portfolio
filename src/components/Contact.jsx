import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2, Mail, MapPin, Send, AlertCircle } from "lucide-react";
import { CONTACT_EMAIL, EMAILJS_CONFIG, isEmailJsConfigured } from "../data/emailConfig";

const initialState = { name: "", email: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "That email doesn't look right.";
    }
    if (!values.message.trim()) {
      next.message = "Tell me a little about what you need.";
    } else if (values.message.trim().length < 10) {
      next.message = "A few more details would help (10+ characters).";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    if (isEmailJsConfigured()) {
      try {
        await emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            name: values.name,
            email: values.email,
            message: values.message,
            title: `Portfolio contact from ${values.name}`,
            time: new Date().toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" }),
          },
          { publicKey: EMAILJS_CONFIG.publicKey }
        );
        setStatus("success");
        setValues(initialState);
      } catch (err) {
        console.error("EmailJS send failed:", err);
        setStatus("error");
      }
    } else {
      // EmailJS isn't configured yet (see src/data/emailConfig.js) — fall
      // back to opening the visitor's email client with the message
      // pre-filled so nothing is silently lost.
      const subject = encodeURIComponent(`Portfolio contact from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("success");
      setValues(initialState);
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  return (
    <section id="contact" className="relative bg-void py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          className="mono-tag text-sm text-teal"
        >
          // contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
        >
          Let's build something
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-6"
          >
            <p className="text-sm leading-relaxed text-ink-muted">
              Got a project, a role, or just want to talk shop about React and
              frontend architecture? My inbox is open.
            </p>
            <div className="flex items-center gap-3 text-sm text-ink-muted">
              <Mail size={16} className="text-teal" />
              {CONTACT_EMAIL}
            </div>
            <div className="flex items-center gap-3 text-sm text-ink-muted">
              <MapPin size={16} className="text-teal" />
              Lagos, Nigeria — open to remote work
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            noValidate
            className="relative rounded-2xl border border-border-strong bg-surface-2/50 p-6 sm:p-8"
          >
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-2xl text-center"
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <CheckCircle2 size={44} className="text-teal" />
                  </motion.div>
                  <p className="font-display text-lg font-semibold text-ink">
                    {isEmailJsConfigured() ? "Message sent" : "Opening your email app..."}
                  </p>
                  <p className="max-w-xs px-4 text-xs text-ink-muted">
                    {isEmailJsConfigured()
                      ? "Thanks for reaching out — I'll reply as soon as I can."
                      : `Your email client should have opened with this addressed to ${CONTACT_EMAIL}.`}
                  </p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-2xl text-center"
                >
                  <AlertCircle size={40} className="text-amber" />
                  <p className="font-display text-lg font-semibold text-ink">Something went wrong</p>
                  <p className="max-w-xs px-4 text-xs text-ink-muted">
                    The message couldn't be sent. Please email me directly at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal underline">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange("name")}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                error={errors.email}
                autoComplete="email"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full resize-none rounded-xl border bg-surface-3 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none ${
                  errors.message ? "border-red-400/60" : "border-border-strong focus:border-teal/50"
                }`}
                placeholder="What are you working on?"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="cursor-hover mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-[#05100e] transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text", autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-ink-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-xl border bg-surface-3 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none ${
          error ? "border-red-400/60" : "border-border-strong focus:border-teal/50"
        }`}
        placeholder={label}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
