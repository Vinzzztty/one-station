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
    <div className="w-full rounded-2xl bg-white p-6 md:p-8 text-gray-900 shadow-lg border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl font-medium mb-1">Contact Us</h2>
        <p className="text-sm text-gray-500">
          Leave us some details and our team will get back to you.
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
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
             <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-3 text-red-700 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <p>{error}</p>
             </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1">
              <label htmlFor="fullName" className="block text-xs font-medium text-gray-600">
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="Full name"
                className="w-full bg-gray-50/50 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Business Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-medium text-gray-600">
                Business Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Business email"
                className="w-full bg-gray-50/50 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Business Phone Number */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-xs font-medium text-gray-600">
                Business Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                className="w-full bg-gray-50/50 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Service Interest */}
            <div className="space-y-1">
              <label htmlFor="service" className="block text-xs font-medium text-gray-600">
                Your Service Interest*
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full bg-gray-50/50 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400">
                    Select one
                  </option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="ai">AI Solutions</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Business Type/Industry */}
            <div className="space-y-1">
              <label htmlFor="industry" className="block text-xs font-medium text-gray-600">
                Business Type/Industry*
              </label>
              <div className="relative">
                <select
                  id="industry"
                  name="industry"
                  required
                  className="w-full bg-gray-50/50 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400">
                    Select one
                  </option>
                  <option value="tech">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="health">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Business Name */}
            <div className="space-y-1">
              <label htmlFor="businessName" className="block text-xs font-medium text-gray-600">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                placeholder="Business name"
                className="w-full bg-gray-50/50 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Budget Selection */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-medium text-gray-600">Budget Selection*</label>
            <div className="flex flex-wrap gap-4">
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
                  <div className="relative flex items-center justify-center w-4 h-4 mr-2">
                    <input
                      type="radio"
                      name="budget"
                      value={option.value}
                      checked={budget === option.value}
                      onChange={(e) => setBudget(e.target.value)}
                      className="peer appearance-none w-4 h-4 border border-gray-300 rounded-full checked:border-purple-600 checked:bg-purple-600 transition-all"
                    />
                    <div className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <span
                    className={`text-xs ${
                      budget === option.value ? "text-gray-900 font-medium" : "text-gray-500"
                    } group-hover:text-gray-900 transition-colors`}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-1 pt-2">
            <label htmlFor="message" className="block text-xs font-medium text-gray-600">
              Messages*
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell us about your project..."
              rows={3}
              className="w-full bg-gray-50/50 rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-gray-400 resize-none"
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
