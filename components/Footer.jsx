import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font max-w-7xl mx-auto">
      <div className="container px-5 py-8 mx-auto flex items-center flex-col md:flex-row">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img
            src="/gglogo.png"
            width="100"
            height="100"
            alt="Logo image for www.genesysglobal.com"
          />
        </div>
        <p className="text-base text-gray-500 md:ml-4 md:pl-4 md:border-l-2 md:border-gray-200 md:py-2 md:mt-0 mt-4">
          © 2021 @Genesys Global —
        </p>
        <p className="text-base text-blue-500 md:ml-4 md:pl-4 md:border-l-2 md:border-gray-200 md:py-2 md:mt-0 mt-4">
          <a
            href="mailto:contact@genesysglobal.com"
            className="text-gray-600 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@genesysglobal.com
          </a>
        </p>
        <span className="inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
          <a
            className="text-gray-500"
            href="https://www.instagram.com/genesysglobal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a
            className="ml-3 text-gray-500"
            href="https://www.instagram.com/genesysglobal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>

          <a
            className="ml-3 text-gray-500"
            href="https://www.linkedin.com/company/genesysglobal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
