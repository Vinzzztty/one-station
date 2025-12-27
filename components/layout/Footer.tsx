import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo One Station"
                width={120}
                height={80}
              ></Image>
            </div>
            <p className="text-sm">
              Empowering innovation through technology & talent.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/service" className="hover:text-white transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="/articles" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/service" className="hover:text-white transition-colors">
                  Data Science
                </a>
              </li>
              <li>
                <a href="/service" className="hover:text-white transition-colors">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="/service" className="hover:text-white transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="/service" className="hover:text-white transition-colors">
                  Business Consultant & Training
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© 2025 One Station. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="https://www.linkedin.com/in/pieterkd/?originalSubdomain=id" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#=https://www.instagram.com/onestationone/" className="hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
