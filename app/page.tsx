'use client';

import { FaShieldAlt, FaUserCheck, FaRobot, FaMobile, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

interface PolicyTile {
  title: string;
  icon: React.ReactNode;
  link: string;
  disabled?: boolean;
}

export default function Home() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const policies: PolicyTile[] = [
    {
      title: 'Privacy Policy & Cookies Policy Generator',
      icon: <FaShieldAlt className="w-12 h-12" />,
      link: '/privacy-policy',
    },
    {
      title: 'Acceptable Use Policy Generator',
      icon: <FaUserCheck className="w-12 h-12" />,
      link: '/acceptable-use',
      disabled: true,
    },
    {
      title: 'Artificial Intelligence Policy Generator',
      icon: <FaRobot className="w-12 h-12" />,
      link: '/ai-policy',
      disabled: true,
    },
    {
      title: 'Mobile Device Policy Generator',
      icon: <FaMobile className="w-12 h-12" />,
      link: '/mobile-policy',
      disabled: true,
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
      <header className="text-center py-8 bg-cornflower">
        <h1 className="text-4xl font-bold text-white mb-4">
          Nonprofit Policy Generator
        </h1>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-white">Provided by</span>
          <img 
            src="/good-heart-tech-logo.png" 
            alt="Good Heart Tech Logo" 
            className="h-8"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {policies.map((policy, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl ${
                policy.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <div className="flex justify-center mb-4 text-cornflower">
                {policy.icon}
              </div>
              <h2 className="text-xl font-semibold mb-4 text-charcoal">
                {policy.title}
              </h2>
              <button
                className={`px-6 py-2 rounded-full ${
                  policy.disabled
                    ? 'bg-gray text-white cursor-not-allowed'
                    : 'bg-cornflower text-white hover:bg-uranian hover:text-rich-black'
                }`}
                onClick={() => !policy.disabled && window.location.href = policy.link}
                disabled={policy.disabled}
              >
                Launch Generator
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Toggle */}
        <div className="max-w-3xl mx-auto mb-12">
          <button
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            className="w-full flex items-center justify-between p-4 bg-uranian rounded-lg text-charcoal font-semibold"
          >
            <span>Why do you only offer these policies and not other ones?</span>
            {isToggleOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isToggleOpen && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md text-charcoal">
              <p>
                Good Heart Tech can only offer a limited number of templatized policies for legal reasons, and we want to be clear that we are not lawyers. Other types of policies tend to be much more specific to each organization and require deep consideration of the organization's unique mission, values, and operational context. These policies often need to be crafted with direct legal counsel to ensure they properly address the specific needs and circumstances of your organization.
              </p>
            </div>
          )}
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-3xl mx-auto mb-12 p-6 bg-gray/10 rounded-lg text-charcoal">
          <h2 className="text-xl font-bold mb-4">Important Legal Disclaimer</h2>
          <p className="mb-4">
            While these policy generators were created with assistance from legal professionals, Good Heart Tech is not a law firm and does not provide legal advice. The tools and templates provided here come with absolutely no warranty or guarantee of legal compliance.
          </p>
          <p className="mb-4">
            Laws and regulations can vary significantly by region, jurisdiction, and industry. The generated policies may not be legally compliant in your specific area or for your particular use case.
          </p>
          <p className="font-semibold">
            We strongly recommend having any generated policy reviewed and updated by qualified legal counsel before implementation or distribution to ensure it meets your specific needs and complies with all applicable laws and regulations.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src="/good-heart-tech-logo.png" 
                alt="Good Heart Tech Logo" 
                className="h-8 mr-4"
              />
              <p>&copy; {currentYear} Good Heart Tech. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 