import { ClipboardList, Lightbulb, FileText, CheckCircle, Hammer, BarChart3, Sparkles, HandshakeIcon, ArrowDown, ChevronRight } from "lucide-react";

const processes = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Consultation",
    description: "We begin with an in-depth consultation to understand your needs, preferences, and vision for the project.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    step: 2,
    icon: Lightbulb,
    title: "Conceptual Design",
    description: "Our team creates initial design concepts, incorporating your feedback to ensure alignment with your vision.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
  },
  {
    step: 3,
    icon: FileText,
    title: "Detailed Drawings",
    description: "We develop detailed architectural and interior drawings, ensuring every aspect of the project is meticulously planned.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-500/10",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Approval & Permits",
    description: "We handle all necessary approvals and permits, ensuring full compliance with local building regulations.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
  },
  {
    step: 5,
    icon: Hammer,
    title: "Construction",
    description: "Our skilled professionals execute the construction phase with precision, adhering to the highest standards of quality and safety.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
  },
  {
    step: 6,
    icon: BarChart3,
    title: "Project Management",
    description: "Our project managers oversee scheduling, budgeting, and on-site operations to ensure everything runs smoothly.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-500/10",
  },
  {
    step: 7,
    icon: Sparkles,
    title: "Final Touches",
    description: "We add the finishing touches, refining every detail to perfection so the final outcome exceeds your expectations.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500/10",
  },
  {
    step: 8,
    icon: HandshakeIcon,
    title: "Handover",
    description: "Upon completion, we conduct a thorough walkthrough to ensure your satisfaction before officially handing over the project.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
  },
];

const MethodologySection = () => (
  <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </div>

    {/* Floating Elements */}
    <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
    <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-pulse delay-500" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-20">
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-4">
          Our Process
        </p>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
          Our Structured Approach
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          We follow a structured and transparent process to ensure every project is delivered successfully and stress-free
        </p>
      </div>

      {/* Graphical Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/60 to-primary/20 h-full rounded-full shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent animate-pulse rounded-full" />
        </div>

        <div className="space-y-16">
          {processes.map((process, idx) => (
            <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${process.color} border-4 border-white shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                  <span className="font-heading font-bold text-xl text-white">{process.step}</span>
                </div>
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${process.color} opacity-30 blur-md animate-pulse`} />
              </div>

              {/* Content Card */}
              <div className={`w-5/12 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                <div className={`${process.bgColor} border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1`}>
                  {/* Icon with Background */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${process.color} mb-4 ${idx % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                    <process.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-white mb-4">
                    {process.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed">
                    {process.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-6 flex items-center space-x-2">
                    <div className={`flex-1 h-1 bg-white/20 rounded-full overflow-hidden`}>
                      <div className={`h-full bg-gradient-to-r ${process.color} rounded-full animate-pulse`} style={{width: `${((idx + 1) / processes.length) * 100}%`}} />
                    </div>
                    <ChevronRight className={`w-4 h-4 text-white/60 ${idx % 2 === 0 ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>

        {/* Completion Badge */}
        <div className="flex justify-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-full font-heading font-bold text-lg shadow-2xl border border-white/20">
            🎯 Project Complete - Ready for Handover
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="mt-20 text-center bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
        <p className="text-slate-100 text-lg leading-relaxed">
          <span className="text-primary font-semibold">From consultation to handover,</span> we guide you through every step with transparency, expertise, and unwavering commitment to excellence.
        </p>
      </div>
    </div>
  </section>
);

export default MethodologySection;
