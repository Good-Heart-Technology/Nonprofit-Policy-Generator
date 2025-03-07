'use client';

import { FaShieldAlt, FaUserCheck, FaRobot, FaMobile } from 'react-icons/fa';

interface PolicyTile {
  title: string;
  icon: React.ReactNode;
  link: string;
  disabled?: boolean;
}

export default function Home() {
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
    <main className="min-h-screen bg-white">
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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
      </div>
    </main>
  );
} 