import { useState, useEffect } from "react";

const OrgChart = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-background to-slate-50 dark:to-slate-900">
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground mb-3 md:mb-4">
            Company Structure
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm">Clear Organizational Hierarchy & Reporting Lines</p>
        </div>

        {/* Company Logo */}
        <div className="flex justify-center -mb-6 md:-mb-8 relative z-10">
          <div className="w-24 h-24 md:w-32 md:h-32">
            <img
              src="/logo.png"
              alt="CIL Contractors Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Mobile View */}
        {isMobile && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 mb-4">
            <div className="space-y-3">
              {/* CEO Level */}
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg px-4 py-2 text-center text-xs font-bold shadow-md">
                  <img src="/logo.png" alt="CIL" className="w-8 h-8 mx-auto mb-1" />
                  MANAGING DIRECTOR
                </div>
              </div>

              {/* Four Main Departments */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 rounded-lg p-2 text-center">
                  <p className="text-[10px] font-bold text-blue-800 dark:text-blue-300">ADMINISTRATION</p>
                  <div className="text-[8px] text-blue-700 dark:text-blue-400 mt-1 space-y-0.5">
                    <p>→ Admin Manager</p>
                    <p>→ Office Admin</p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 rounded-lg p-2 text-center">
                  <p className="text-[10px] font-bold text-green-800 dark:text-green-300">ACCOUNTS</p>
                  <div className="text-[8px] text-green-700 dark:text-green-400 mt-1 space-y-0.5">
                    <p>→ Chief Auditor</p>
                    <p>→ Accounts Mgr</p>
                    <p>→ Accountant</p>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-300 rounded-lg p-2 text-center">
                  <p className="text-[10px] font-bold text-amber-800 dark:text-amber-300">PROJECTS</p>
                  <div className="text-[8px] text-amber-700 dark:text-amber-400 mt-1 space-y-0.5">
                    <p>→ Projects Mgr</p>
                    <p>→ 3 Divisions</p>
                    <p>→ Field Teams</p>
                  </div>
                </div>
                <div className="bg-pink-50 dark:bg-pink-900/20 border-2 border-pink-300 rounded-lg p-2 text-center">
                  <p className="text-[10px] font-bold text-pink-800 dark:text-pink-300">OPERATIONAL</p>
                  <div className="text-[8px] text-pink-700 dark:text-pink-400 mt-1 space-y-0.5">
                    <p>→ Gen Manager</p>
                    <p>→ 3 Divisions</p>
                    <p>→ Support Teams</p>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-center text-muted-foreground italic py-2 px-3 bg-slate-100 dark:bg-slate-800 rounded">
                Hierarchical structure ensuring clear reporting lines and accountability
              </p>
            </div>
          </div>
        )}

        {/* Desktop SVG View */}
        {!isMobile && (
          <div className="flex justify-center overflow-x-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-3 md:p-4">
            <svg width="2000" height="1050" viewBox="0 0 2000 1050" className="min-w-full">
            <defs>
              {/* Define gradients for visual appeal */}
              <linearGradient id="blueBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="greenBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#16a34a', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="amberBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#d97706', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#b45309', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="pinkBg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#be185d', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {/* ===== COMPANY LOGO SECTION ===== */}
            <g>
              {/* Logo background circle */}
              <circle cx="1000" cy="50" r="40" fill="white" stroke="#3b82f6" strokeWidth="3" />
              {/* Company name text (representing logo) */}
              <text x="1000" y="58" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#3b82f6">CIL</text>
              {/* Decorative line from logo */}
              <line x1="1000" y1="90" x2="1000" y2="125" stroke="#3b82f6" strokeWidth="3" />
            </g>

            {/* ===== LEVEL 1: MANAGING DIRECTOR ===== */}
            <g>
              <rect x="850" y="125" width="300" height="65" rx="8" fill="url(#blueBg)" stroke="#1e40af" strokeWidth="3" />
              <text x="1000" y="160" textAnchor="middle" fontSize="15" fontWeight="bold" fill="white">MANAGING DIRECTOR</text>
              
              {/* Connection line down to departments */}
              <line x1="1000" y1="190" x2="1000" y2="225" stroke="#3b82f6" strokeWidth="3" />
              
              {/* Horizontal master distribution line */}
              <line x1="200" y1="225" x2="1800" y2="225" stroke="#6b7280" strokeWidth="2.5" strokeDasharray="6,6" />
              
              {/* Vertical lines to each department */}
              <line x1="350" y1="225" x2="350" y2="270" stroke="#3b82f6" strokeWidth="2.5" />
              <line x1="750" y1="225" x2="750" y2="270" stroke="#22c55e" strokeWidth="2.5" />
              <line x1="1150" y1="225" x2="1150" y2="270" stroke="#d97706" strokeWidth="2.5" />
              <line x1="1550" y1="225" x2="1550" y2="270" stroke="#ec4899" strokeWidth="2.5" />
            </g>

            {/* ===== LEVEL 2: FOUR MAIN DEPARTMENTS ===== */}
            
            {/* ADMINISTRATION DEPARTMENT - LEFT */}
            <g>
              {/* Department Header */}
              <rect x="235" y="270" width="230" height="60" rx="7" fill="#dbeafe" stroke="url(#blueBg)" strokeWidth="3" />
              <text x="350" y="292" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">ADMINISTRATION</text>
              <text x="350" y="310" textAnchor="middle" fontSize="10" fill="#1e40af">DEPARTMENT</text>
              
              {/* Connection down */}
              <line x1="350" y1="330" x2="350" y2="360" stroke="#3b82f6" strokeWidth="2" />
              
              {/* Admin Manager */}
              <rect x="260" y="360" width="180" height="50" rx="5" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <text x="350" y="390" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0c4a6e">ADMIN MANAGER</text>
              
              {/* Connection down */}
              <line x1="350" y1="410" x2="350" y2="440" stroke="#3b82f6" strokeWidth="2" />
              
              {/* Office Admin */}
              <rect x="280" y="440" width="140" height="45" rx="4" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.5" />
              <text x="350" y="468" textAnchor="middle" fontSize="10" fill="#0c4a6e">Office Admin</text>
            </g>

            {/* ACCOUNTS DEPARTMENT - SECOND */}
            <g>
              {/* Department Header */}
              <rect x="635" y="270" width="230" height="60" rx="7" fill="#dcfce7" stroke="url(#greenBg)" strokeWidth="3" />
              <text x="750" y="292" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">ACCOUNTS</text>
              <text x="750" y="310" textAnchor="middle" fontSize="10" fill="#166534">DEPARTMENT</text>
              
              {/* Connection down */}
              <line x1="750" y1="330" x2="750" y2="360" stroke="#22c55e" strokeWidth="2" />
              
              {/* Chief Auditor */}
              <rect x="655" y="360" width="190" height="50" rx="5" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
              <text x="750" y="390" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803d">CHIEF AUDITOR</text>
              
              {/* Connection down */}
              <line x1="750" y1="410" x2="750" y2="440" stroke="#22c55e" strokeWidth="2" />
              
              {/* Accounts Manager */}
              <rect x="660" y="440" width="180" height="45" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
              <text x="750" y="468" textAnchor="middle" fontSize="10" fill="#15803d">Accounts Manager</text>
              
              {/* Connection down */}
              <line x1="750" y1="485" x2="750" y2="515" stroke="#22c55e" strokeWidth="2" />
              
              {/* Accountant */}
              <rect x="685" y="515" width="130" height="45" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
              <text x="750" y="543" textAnchor="middle" fontSize="10" fill="#15803d">Accountant</text>
            </g>

            {/* PROJECTS DIRECTOR - THIRD (LONGEST FLOW) */}
            <g>
              {/* Department Header */}
              <rect x="1035" y="270" width="230" height="60" rx="7" fill="#fef3c7" stroke="url(#amberBg)" strokeWidth="3" />
              <text x="1150" y="292" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400e">PROJECTS</text>
              <text x="1150" y="310" textAnchor="middle" fontSize="10" fill="#92400e">DIRECTOR</text>
              
              {/* Connection down */}
              <line x1="1150" y1="330" x2="1150" y2="360" stroke="#d97706" strokeWidth="2" />
              
              {/* Projects Manager */}
              <rect x="1060" y="360" width="180" height="50" rx="5" fill="#fef9e7" stroke="#b45309" strokeWidth="2" />
              <text x="1150" y="390" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#78350f">PROJECTS MANAGER</text>
              
              {/* Three divisions distribution line */}
              <line x1="1020" y1="410" x2="1280" y2="410" stroke="#d97706" strokeWidth="2" />
              <line x1="1020" y1="410" x2="1020" y2="440" stroke="#d97706" strokeWidth="2" />
              <line x1="1150" y1="410" x2="1150" y2="440" stroke="#d97706" strokeWidth="2" />
              <line x1="1280" y1="410" x2="1280" y2="440" stroke="#d97706" strokeWidth="2" />
              
              {/* Contract Coordinator - LEFT */}
              <rect x="950" y="440" width="140" height="45" rx="4" fill="#fef9e7" stroke="#b45309" strokeWidth="1.5" />
              <text x="1020" y="468" textAnchor="middle" fontSize="10" fill="#78350f">Contract Coord.</text>
              
              {/* Quantity Survey - CENTER */}
              <rect x="1085" y="440" width="130" height="45" rx="4" fill="#fef9e7" stroke="#b45309" strokeWidth="1.5" />
              <text x="1150" y="468" textAnchor="middle" fontSize="10" fill="#78350f">QS Department</text>
              <line x1="1150" y1="485" x2="1150" y2="515" stroke="#d97706" strokeWidth="2" />
              <rect x="1100" y="515" width="100" height="40" rx="4" fill="#fef9e7" stroke="#b45309" strokeWidth="1.5" />
              <text x="1150" y="541" textAnchor="middle" fontSize="9" fill="#78350f">Site Engineer</text>
              
              {/* Safety Officer - RIGHT */}
              <rect x="1215" y="440" width="130" height="45" rx="4" fill="#fef9e7" stroke="#b45309" strokeWidth="1.5" />
              <text x="1280" y="468" textAnchor="middle" fontSize="10" fill="#78350f">Safety Officer</text>
              <line x1="1280" y1="485" x2="1280" y2="515" stroke="#d97706" strokeWidth="2" />
              <rect x="1230" y="515" width="100" height="40" rx="4" fill="#fef9e7" stroke="#b45309" strokeWidth="1.5" />
              <text x="1280" y="541" textAnchor="middle" fontSize="9" fill="#78350f">General Foreman</text>
              <line x1="1280" y1="555" x2="1280" y2="580" stroke="#d97706" strokeWidth="2" />
              <rect x="1245" y="580" width="70" height="40" rx="4" fill="#fef9e7" stroke="#b45309" strokeWidth="1.5" />
              <text x="1280" y="606" textAnchor="middle" fontSize="9" fill="#78350f">Foreman</text>
              <line x1="1280" y1="620" x2="1280" y2="645" stroke="#d97706" strokeWidth="2" />
              <rect x="1225" y="645" width="110" height="40" rx="4" fill="#fef9e7" stroke="#b45309" strokeWidth="1.5" />
              <text x="1280" y="671" textAnchor="middle" fontSize="9" fill="#78350f">Site Supervisors</text>
              <line x1="1280" y1="685" x2="1280" y2="710" stroke="#d97706" strokeWidth="2" />
              <rect x="1255" y="710" width="50" height="40" rx="4" fill="#fef9e7" stroke="#b45309" strokeWidth="1.5" />
              <text x="1280" y="736" textAnchor="middle" fontSize="9" fill="#78350f">Workers</text>
            </g>

            {/* OPERATIONAL DEPARTMENT - RIGHT */}
            <g>
              {/* Department Header */}
              <rect x="1435" y="270" width="230" height="60" rx="7" fill="#fbcfe8" stroke="url(#pinkBg)" strokeWidth="3" />
              <text x="1550" y="292" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#831843">OPERATIONAL</text>
              <text x="1550" y="310" textAnchor="middle" fontSize="10" fill="#831843">DEPARTMENT</text>
              
              {/* Connection down */}
              <line x1="1550" y1="330" x2="1550" y2="360" stroke="#ec4899" strokeWidth="2" />
              
              {/* General Manager */}
              <rect x="1460" y="360" width="180" height="50" rx="5" fill="#fce7f3" stroke="#be185d" strokeWidth="2" />
              <text x="1550" y="390" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9d174d">GENERAL MANAGER</text>
              
              {/* Three divisions distribution line */}
              <line x1="1420" y1="410" x2="1680" y2="410" stroke="#ec4899" strokeWidth="2" />
              <line x1="1420" y1="410" x2="1420" y2="440" stroke="#ec4899" strokeWidth="2" />
              <line x1="1550" y1="410" x2="1550" y2="440" stroke="#ec4899" strokeWidth="2" />
              <line x1="1680" y1="410" x2="1680" y2="440" stroke="#ec4899" strokeWidth="2" />
              
              {/* Quality Control - LEFT */}
              <rect x="1350" y="440" width="140" height="45" rx="4" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
              <text x="1420" y="468" textAnchor="middle" fontSize="10" fill="#9d174d">Quality Control</text>
              
              {/* Contract Coordinator - CENTER */}
              <rect x="1480" y="440" width="140" height="45" rx="4" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
              <text x="1550" y="468" textAnchor="middle" fontSize="10" fill="#9d174d">Contract Coord.</text>
              <line x1="1550" y1="485" x2="1550" y2="515" stroke="#ec4899" strokeWidth="2" />
              <rect x="1500" y="515" width="100" height="40" rx="4" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
              <text x="1550" y="541" textAnchor="middle" fontSize="9" fill="#9d174d">Site Engineer</text>
              
              {/* Procurement - RIGHT */}
              <rect x="1610" y="440" width="140" height="45" rx="4" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
              <text x="1680" y="468" textAnchor="middle" fontSize="10" fill="#9d174d">Procurement</text>
              <line x1="1680" y1="485" x2="1680" y2="515" stroke="#ec4899" strokeWidth="2" />
              <rect x="1630" y="515" width="100" height="40" rx="4" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
              <text x="1680" y="541" textAnchor="middle" fontSize="9" fill="#9d174d">Workshop</text>
              <line x1="1680" y1="555" x2="1680" y2="580" stroke="#ec4899" strokeWidth="2" />
              <rect x="1605" y="580" width="150" height="40" rx="4" fill="#fce7f3" stroke="#be185d" strokeWidth="1.5" />
              <text x="1680" y="606" textAnchor="middle" fontSize="9" fill="#9d174d">Precast Concrete</text>
            </g>

            {/* ===== LEGEND ===== */}
            <g>
              <text x="120" y="850" fontSize="16" fontWeight="bold" fill="#374151">DEPARTMENT COLORS:</text>
              
              <rect x="120" y="865" width="24" height="24" rx="3" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="152" y="883" fontSize="14" fill="#1e40af" fontWeight="600">Administration</text>
              
              <rect x="430" y="865" width="24" height="24" rx="3" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
              <text x="462" y="883" fontSize="14" fill="#166534" fontWeight="600">Accounts</text>
              
              <rect x="750" y="865" width="24" height="24" rx="3" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
              <text x="782" y="883" fontSize="14" fill="#92400e" fontWeight="600">Projects</text>
              
              <rect x="1050" y="865" width="24" height="24" rx="3" fill="#fbcfe8" stroke="#ec4899" strokeWidth="2" />
              <text x="1082" y="883" fontSize="14" fill="#831843" fontWeight="600">Operations</text>
            </g>
          </svg>
        </div>
      )}
      </div>
    </section>
  );
};

export default OrgChart;
