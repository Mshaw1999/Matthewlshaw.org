import { motion } from 'motion/react';
import { Server, Shield, Code, Users } from 'lucide-react';
import professionalPhoto from 'figma:asset/bf5a24a00f131d31e5bf7d8831711eb3b80db8c6.png';

export default function HomePage() {
  const stats = [
    { label: 'Years Experience', value: '8+', icon: Code },
    { label: 'Projects Completed', value: '150+', icon: Server },
    { label: 'Systems Secured', value: '50+', icon: Shield },
    { label: 'Teams Led', value: '12', icon: Users },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative px-6 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.p
                  className="text-cyan-400 text-lg tracking-wider uppercase"
                  whileHover={{ scale: 1.05 }}
                >
                  IT Systems Engineer
                </motion.p>
                
                <motion.h1
                  className="text-6xl lg:text-8xl text-white leading-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="block">MATTHEW</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                    LYNN
                  </span>
                  <span className="block">SHAW</span>
                </motion.h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-xl text-zinc-300 leading-relaxed max-w-lg"
              >
                Passionate about building robust, scalable systems that drive innovation and efficiency. 
                Specialized in enterprise infrastructure, cloud solutions, and cybersecurity.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex space-x-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(6, 182, 212, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-zinc-900 rounded-lg text-lg hover:from-cyan-300 hover:to-teal-300 transition-all duration-300"
                >
                  View My Work
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg text-lg hover:bg-cyan-400 hover:text-zinc-900 transition-all duration-300"
                >
                  Download Resume
                </motion.button>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-zinc-800 rounded-2xl p-2">
                  <img
                    src={professionalPhoto}
                    alt="Matthew Lynn Shaw - IT Systems Engineer"
                    className="w-full h-[600px] object-cover rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-400 to-teal-400 p-4 rounded-xl"
              >
                <Server className="text-zinc-900" size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-400 to-cyan-400 p-4 rounded-xl"
              >
                <Shield className="text-zinc-900" size={24} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            variants={itemVariants}
            className="text-4xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
          >
            Professional Highlights
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)",
                    y: -10 
                  }}
                  className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-cyan-400/20"
                  >
                    <Icon className="text-zinc-900" size={24} />
                  </motion.div>
                  
                  <motion.h3
                    className="text-3xl text-white mb-2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.h3>
                  
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Skills Preview Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Core Expertise
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Delivering comprehensive IT solutions with expertise across multiple domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "System Architecture",
                description: "Designing scalable, high-performance infrastructure solutions",
                skills: ["AWS/Azure", "Kubernetes", "Microservices", "Load Balancing"]
              },
              {
                title: "Cybersecurity",
                description: "Implementing robust security measures and compliance frameworks",
                skills: ["Risk Assessment", "SIEM", "Penetration Testing", "Compliance"]
              },
              {
                title: "Automation",
                description: "Streamlining operations through intelligent automation",
                skills: ["CI/CD", "Infrastructure as Code", "Monitoring", "DevOps"]
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl text-white mb-4">{area.title}</h3>
                <p className="text-zinc-300 mb-6">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-zinc-800 text-cyan-400 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}