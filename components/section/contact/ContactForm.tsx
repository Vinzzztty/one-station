"use client";

import Button from "@/components/ui/Button";
import { ArrowUpRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";
import { submitContactAction } from "@/app/actions/submitContact";

export default function ContactForm() {
  const [budget, setBudget] = useState("<200 mio");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    
    // Construct the data object manually to ensure types
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      industry: formData.get("industry") as string,
      businessName: formData.get("businessName") as string,
      budget: budget, 
      message: formData.get("message") as string,
    };

    const result = await submitContactAction(data);

    if (result.success) {
      setSuccess(true);
      // Optional: reset form
      (e.target as HTMLFormElement).reset();
      setBudget("<200 mio");
    } else {
      setError(result.error || "Something went wrong");
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full rounded-3xl bg-white p-8 md:p-12 lg:p-16 text-gray-900 shadow-xl border border-gray-100">
      <div className="mb-12">
        <h2 className="text-3xl font-medium mb-2">Contact Us</h2>
        <p className="text-gray-500">
          Leave us some details and our team will get back to you as soon as
          possible.
        </p>
      </div>

      {success ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in duration-300">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700 max-w-md mx-auto">
            Your message has been sent successfully. Our team will contact you shortly.
          </p>
          <button 
            onClick={() => setSuccess(false)}
            className="mt-6 text-green-700 font-medium hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {error && (
             <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 text-red-700">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>{error}</p>
             </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm text-gray-500">
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="Fill in full name"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Business Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm text-gray-500">
                Business Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Fill in business email"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Business Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm text-gray-500">
                Business Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Fill in business phone number"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Service Interest */}
            <div className="space-y-2">
              <label htmlFor="service" className="block text-sm text-gray-500">
                Your Service Interest*
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-white text-gray-400">
                    Select one
                  </option>
                  <option value="web" className="bg-white">
                    Web Development
                  </option>
                  <option value="mobile" className="bg-white">
                    Mobile Development
                  </option>
                  <option value="ai" className="bg-white">
                    AI Solutions
                  </option>
                  <option value="other" className="bg-white">
                    Other
                  </option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Business Type/Industry */}
            <div className="space-y-2">
              <label htmlFor="industry" className="block text-sm text-gray-500">
                Business Type/Industry*
              </label>
              <div className="relative">
                <select
                  id="industry"
                  name="industry"
                  required
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-white text-gray-400">
                    Select one
                  </option>
                  <option value="tech" className="bg-white">
                    Technology
                  </option>
                  <option value="finance" className="bg-white">
                    Finance
                  </option>
                  <option value="health" className="bg-white">
                    Healthcare
                  </option>
                  <option value="education" className="bg-white">
                    Education
                  </option>
                  <option value="other" className="bg-white">
                    Other
                  </option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Business Name */}
            <div className="space-y-2">
              <label htmlFor="businessName" className="block text-sm text-gray-500">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Fill in business name"
                className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Budget Selection */}
          <div className="space-y-4 pt-4">
            <label className="block text-sm text-gray-500">Budget Selection*</label>
            <div className="flex flex-wrap gap-6">
              {[
                { label: "<50 mio", value: "<50 mio" },
                { label: "50-100 mio", value: "50-100 mio" },
                { label: "100-250 mio", value: "100-250 mio" },
                { label: ">250 mio", value: ">250 mio" },
              ].map((option) => (
                <label
                  key={option.value}
                  className="inline-flex items-center cursor-pointer group"
                >
                  <div className="relative flex items-center justify-center w-5 h-5 mr-3">
                    <input
                      type="radio"
                      name="budget"
                      value={option.value}
                      checked={budget === option.value}
                      onChange={(e) => setBudget(e.target.value)}
                      className="peer appearance-none w-5 h-5 border border-gray-300 rounded-full checked:border-emerald-500 checked:bg-emerald-500 transition-all"
                    />
                    <div className="absolute w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <span
                    className={`text-sm ${
                      budget === option.value ? "text-gray-900" : "text-gray-500"
                    } group-hover:text-gray-900 transition-colors`}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-2 pt-4">
            <label htmlFor="message" className="block text-sm text-gray-500">
              Messages*
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Input message here"
              rows={1}
              className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-gray-400 resize-none min-h-[40px]"
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = target.scrollHeight + "px";
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-8">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#10B981] hover:bg-[#059669] text-white rounded-full px-8 py-3 font-medium flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  Sending...
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  Get in touch
                  <ArrowUpRight size={18} />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
