import { motion } from 'motion/react';
import { Camera, Clock, Building, Star } from 'lucide-react';

export default function TimelinePage() {
  const timelineItems = [
    {
      year: "2024",
      title: "Senior IT Systems Engineer",
      company: "Tech Solutions Corp",
      description: "Leading enterprise infrastructure modernization initiatives",
      type: "work"
    },
    {
      year: "2022",
      title: "Cloud Infrastructure Specialist",
      company: "CloudFirst Inc",
      description: "Managed migration of 50+ legacy systems to cloud infrastructure",
      type: "work"
    },
    {
      year: "2020",
      title: "Cybersecurity Analyst",
      company: "SecureNet Systems",
      description: "Implemented security frameworks and incident response protocols",
      type: "work"
    },
    {
      year: "2018",
      title: "Systems Administrator",
      company: "Enterprise Solutions Ltd",
      description: "Administered Windows/Linux environments for 500+ users",
      type: "work"
    },
    {
      year: "2016",
      title: "Bachelor of Science in Information Technology",
      company: "State University",
      description: "Graduated with honors, specialization in Network Security",
      type: "education"
    }
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Professional Timeline
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            A journey through my career in IT systems engineering, cybersecurity, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Work in Progress Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/30 rounded-2xl p-8 mb-12 text-center"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mb-4"
          >
            <Camera className="text-zinc-900" size={24} />
          </motion.div>
          
          <h3 className="text-2xl text-amber-400 mb-4">Timeline in Development</h3>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            I'm currently working on gathering photos and visual elements to make this timeline more engaging. 
            The content below represents my professional journey, with enhanced visuals coming soon!
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-teal-400 to-blue-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full shadow-lg"
                >
                  {item.type === 'work' ? (
                    <Building className="text-zinc-900" size={20} />
                  ) : (
                    <Star className="text-zinc-900" size={20} />
                  )}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 bg-zinc-800 rounded-2xl p-8 border border-zinc-700 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-teal-400 text-zinc-900 rounded-lg text-lg"
                    >
                      {item.year}
                    </motion.span>
                    
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="p-2 bg-zinc-700 rounded-lg group-hover:bg-zinc-600 transition-colors"
                    >
                      <Clock className="text-cyan-400" size={18} />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <h4 className="text-lg text-cyan-400 mb-4">
                    {item.company}
                  </h4>
                  
                  <p className="text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Placeholder for future images */}
                  <div className="mt-6 p-4 bg-zinc-700 rounded-xl border-2 border-dashed border-zinc-600">
                    <div className="flex items-center justify-center space-x-2 text-zinc-400">
                      <Camera size={20} />
                      <span className="text-sm">Photo gallery coming soon</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Evolution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 p-8 bg-zinc-800 rounded-2xl border border-zinc-700"
        >
          <h3 className="text-3xl text-center mb-8 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Skills Evolution Over Time
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                period: "2016-2018",
                focus: "Foundation",
                skills: ["Windows Server", "Basic Networking", "Help Desk", "System Maintenance"]
              },
              {
                period: "2019-2021",
                focus: "Specialization",
                skills: ["Linux Administration", "Cybersecurity", "Cloud Basics", "Automation"]
              },
              {
                period: "2022-Present",
                focus: "Leadership",
                skills: ["Enterprise Architecture", "DevOps", "Team Leadership", "Strategic Planning"]
              }
            ].map((era, index) => (
              <motion.div
                key={era.period}
                whileHover={{ y: -10 }}
                className="bg-zinc-900 p-6 rounded-xl border border-zinc-600"
              >
                <h4 className="text-lg text-cyan-400 mb-2">{era.period}</h4>
                <h5 className="text-xl text-white mb-4">{era.focus}</h5>
                <div className="space-y-2">
                  {era.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 bg-zinc-700 text-zinc-300 rounded-lg text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}