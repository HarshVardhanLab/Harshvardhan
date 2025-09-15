import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main visible orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-radial from-orange-400/60 via-yellow-400/40 to-orange-500/20 blur-3xl"
        animate={{
          x: ["10vw", "30vw", "50vw", "20vw", "10vw"],
          y: ["20vh", "40vh", "60vh", "30vh", "20vh"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-radial from-purple-500/60 via-blue-500/40 to-purple-600/20 blur-3xl"
        animate={{
          x: ["60vw", "80vw", "70vw", "50vw", "60vw"],
          y: ["30vh", "50vh", "70vh", "40vh", "30vh"],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-radial from-yellow-400/50 via-orange-400/35 to-red-400/15 blur-2xl"
        animate={{
          x: ["20vw", "40vw", "60vw", "30vw", "20vw"],
          y: ["60vh", "80vh", "70vh", "50vh", "60vh"],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
      
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-radial from-blue-600/50 via-purple-500/35 to-indigo-600/20 blur-2xl"
        animate={{
          x: ["70vw", "90vw", "80vw", "60vw", "70vw"],
          y: ["10vh", "30vh", "50vh", "20vh", "10vh"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15,
        }}
      />
    </div>
  );
};

export default FloatingOrbs;