import { motion } from 'motion/react';
import { Download, Eye, Briefcase, Shield, Code, Cloud } from 'lucide-react';

export default function ResumesPage() {
  const resumes = [
    {
      id: 1,
      title: "Systems Engineer Resume",
      description: "Focused on infrastructure design, server management, and enterprise systems",
      icon: Briefcase,
      color: "from-blue-400 to-cyan-400",
      skills: ["Windows Server", "Linux", "VMware", "Network Infrastructure"],
      experience: "Enterprise Infrastructure & Server Management"
    },
    {
      id: 2,
      title: "Cybersecurity Specialist Resume",
      description: "Emphasizing security frameworks, risk assessment, and compliance",
      icon: Shield,
      color: "from-red-400 to-pink-400",
      skills: ["CISSP", "Risk Assessment", "Incident Response", "Compliance"],
      experience: "Security Operations & Risk Management"
    },
    {
      id: 3,
      title: "DevOps Engineer Resume",
      description: "Highlighting automation, CI/CD pipelines, and infrastructure as code",
      icon: Code,
      color: "from-green-400 to-teal-400",
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
      experience: "Automation & Continuous Integration"
    },
    {
      id: 4,
      title: "Cloud Solutions Architect Resume",
      description: "Showcasing cloud migrations, scalable architectures, and cost optimization",
      icon: Cloud,
      color: "from-purple-400 to-indigo-400",
      skills: ["AWS", "Azure", "Cloud Migration", "Cost Optimization"],
      experience: "Cloud Infrastructure & Migration"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Resume Collection
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Tailored resumes for different roles and opportunities. Each resume highlights 
            specific skills and experiences relevant to the target position.
          </p>
        </motion.div>

        {/* Resume Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {resumes.map((resume) => {
            const Icon = resume.icon;
            return (
              <motion.div
                key={resume.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.15)"
                }}
                className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-xl bg-gradient-to-r ${resume.color} group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon className="text-zinc-900" size={28} />
                  </motion.div>
                  
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors"
                      title="Preview Resume"
                    >
                      <Eye size={18} className="text-zinc-300" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-cyan-400 hover:bg-cyan-300 text-zinc-900 rounded-lg transition-colors"
                      title="Download Resume"
                    >
                      <Download size={18} />
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-2xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {resume.title}
                </h3>
                
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  {resume.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm text-cyan-400 mb-2 uppercase tracking-wider">
                    Focus Area
                  </h4>
                  <p className="text-zinc-400">
                    {resume.experience}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm text-cyan-400 mb-3 uppercase tracking-wider">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {resume.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-zinc-700 text-zinc-300 rounded-lg text-sm group-hover:bg-zinc-600 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-teal-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16 p-8 bg-zinc-800 rounded-2xl border border-zinc-700"
        >
          <h3 className="text-2xl text-white mb-4">
            Need a Custom Resume?
          </h3>
          <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
            I can create a tailored resume specifically for your job opportunity. 
            Each resume is crafted to highlight the most relevant skills and experiences for the position.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-zinc-900 rounded-lg hover:from-cyan-300 hover:to-teal-300 transition-all duration-300"
          >
            Request Custom Resume
          </motion.button>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              title: "Always Current",
              description: "All resumes are regularly updated with the latest projects and certifications"
            },
            {
              title: "ATS Optimized",
              description: "Formatted for applicant tracking systems with relevant keywords"
            },
            {
              title: "Multiple Formats",
              description: "Available in PDF, Word, and plain text formats for all systems"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -5 }}
              className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 text-center"
            >
              <h4 className="text-lg text-white mb-2">{feature.title}</h4>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}