"use client";
import { Minus, Square, X } from "lucide-react";
import SendButton from "./SendButton";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORM_KEY ?? "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      toast.success("Message has been sent");
    } else {
      toast.error("Error Happend");
    }
    setLoading(false);
    setMessage("");
    setEmail("");
    setName("");
  }

  return (
    <div className="w-full flex flex-col lg:w-230 mx-auto border border-border-color all-projects my-30">
      <div className="border-b border-border-color px-3 py-1.5 flex items-center justify-between gap-3">
        <p>Contact-me</p>
        <div className="flex items-center gap-2">
          <Minus className="w-4 h-4 opacity-60 " />
          <Square className="w-3 h-3 opacity-60 " />
          <X className="w-4 h-4 opacity-60" />
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="py-5 w-full flex flex-col md:px-7 px-2 gap-5">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="user-name"
            className="flex items-center gap-2 text-lg w-fit">
            <span className="mb-3 flex text-low-color font-serif text-base">
              01
            </span>
            Name:
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            id="user-name"
            placeholder="Name"
            className="px-3 py-3 outline-0 border border-border-color bg-card-black rounded-sm focus:border-main-color"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="user-email"
            className="flex items-center gap-2 text-lg w-fit">
            <span className="mb-3 flex text-low-color font-serif text-base">
              02
            </span>
            Email:
          </label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="user-email"
            placeholder="Email"
            className="px-3 py-3 outline-0 border border-border-color bg-card-black rounded-sm focus:border-main-color"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="user-message"
            className="flex items-center gap-2 text-lg w-fit">
            <span className="mb-3 flex text-low-color font-serif text-base">
              03
            </span>
            Message:
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            required
            id="user-message"
            placeholder="Type Your Message..."
            className="px-3 py-3 min-h-60 outline-0 border border-border-color bg-card-black rounded-sm focus:border-main-color"
          />
        </div>

        <SendButton loading={loading} />
      </form>
    </div>
  );
}
