import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Logo One Station"
                width={120}
                height={120}
              />
            </div>
            <p className="text-sm">
              Custom ERP Development & Digital Solutions for growing businesses in Indonesia.
            </p>
          </div>

          {/* Column 1: Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/erp-solution" className="hover:text-white transition-colors">
                  ERP Solution
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  Chatbot & AI Agent
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  Data Science & ML
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  Business Consultant & Training
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© 2025 One Station. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="https://www.linkedin.com/in/pieterkd/?originalSubdomain=id" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/onestationone/" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
