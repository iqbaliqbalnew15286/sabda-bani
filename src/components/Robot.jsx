import { motion, useMotionValue } from "framer-motion";

export default function Robot() {
  const rotateX = useMotionValue(-15);
  const rotateY = useMotionValue(35);

  const handlePan = (event, info) => {
    rotateX.set(rotateX.get() - info.delta.y * 0.5);
    rotateY.set(rotateY.get() + info.delta.x * 0.5);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center [perspective:1200px] cursor-grab active:cursor-grabbing">
      
      {/* Pan Overlay */}
      <motion.div
        className="absolute inset-0 z-50"
        onPan={handlePan}
      />

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-48 h-64"
        >

          {/* === HEAD === (96x96x96) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24" style={{ transformStyle: "preserve-3d" }}>
            {/* Front */}
            <div className="absolute inset-0 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl flex flex-col items-center justify-center gap-2" style={{ transform: "translateZ(48px)" }}>
              <div className="flex gap-4 mt-2">
                <motion.div animate={{ scaleY: [1, 0.05, 1] }} transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 2.5 }} className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_12px_#10b981]" />
                <motion.div animate={{ scaleY: [1, 0.05, 1] }} transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 2.5 }} className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_12px_#10b981]" />
              </div>
              <div className="w-6 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full mt-1" />
            </div>
            {/* Back */}
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl" style={{ transform: "rotateY(180deg) translateZ(48px)" }} />
            {/* Right */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl" style={{ transform: "rotateY(90deg) translateZ(48px)" }} />
            {/* Left */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl" style={{ transform: "rotateY(-90deg) translateZ(48px)" }} />
            {/* Top */}
            <div className="absolute inset-0 bg-white dark:bg-zinc-700 border-2 border-zinc-200 dark:border-zinc-600 rounded-2xl" style={{ transform: "rotateX(90deg) translateZ(48px)" }}>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full border border-zinc-300 dark:border-zinc-600" />
            </div>
            {/* Bottom */}
            <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl" style={{ transform: "rotateX(-90deg) translateZ(48px)" }} />

            {/* Ears */}
            <div className="absolute top-1/2 left-1/2 w-4 h-8 bg-zinc-300 dark:bg-zinc-600 rounded-full border border-zinc-400 dark:border-zinc-500" style={{ transform: "translate(-56px,-50%) rotateY(-90deg)" }} />
            <div className="absolute top-1/2 left-1/2 w-4 h-8 bg-zinc-300 dark:bg-zinc-600 rounded-full border border-zinc-400 dark:border-zinc-500" style={{ transform: "translate(40px,-50%) rotateY(90deg)" }} />

            {/* Antenna Pole */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-1.5 h-12 bg-zinc-300 dark:bg-zinc-500 origin-bottom" style={{ transform: "rotateX(0deg)" }} />
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute bottom-[calc(100%+40px)] left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" style={{ transform: "rotateX(0deg)" }} />
          </div>

          {/* === NECK === */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-8 h-6 bg-zinc-300 dark:bg-zinc-700" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-600" style={{ transform: "translateZ(8px)" }} />
            <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-800" style={{ transform: "rotateY(180deg) translateZ(8px)" }} />
            <div className="absolute top-0 bottom-0 left-[2px] w-4 bg-zinc-200 dark:bg-zinc-500" style={{ transform: "rotateY(90deg) translateZ(12px)" }} />
            <div className="absolute top-0 bottom-0 left-[2px] w-4 bg-zinc-200 dark:bg-zinc-500" style={{ transform: "rotateY(-90deg) translateZ(12px)" }} />
          </div>

          {/* === BODY === (80w x 112h x 64d) */}
          <div className="absolute top-[110px] left-1/2 -translate-x-1/2 w-20 h-28" style={{ transformStyle: "preserve-3d" }}>
            {/* Front */}
            <div className="absolute inset-0 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl flex items-center justify-center overflow-hidden" style={{ transform: "translateZ(32px)" }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="w-10 h-10 border-2 border-dashed border-emerald-500/50 rounded-full flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_#10b981]" />
              </motion.div>
            </div>
            {/* Back */}
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl flex items-center justify-center" style={{ transform: "rotateY(180deg) translateZ(32px)" }}>
              <div className="w-12 h-16 border-2 border-zinc-200 dark:border-zinc-700 rounded-lg flex flex-col items-center justify-evenly py-1 opacity-50">
                <div className="w-8 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full" />
                <div className="w-8 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full" />
                <div className="w-8 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full" />
              </div>
            </div>
            {/* Right */}
            <div className="absolute top-0 left-[8px] w-16 h-28 bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl" style={{ transform: "rotateY(90deg) translateZ(40px)" }} />
            {/* Left */}
            <div className="absolute top-0 left-[8px] w-16 h-28 bg-zinc-50 dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl" style={{ transform: "rotateY(-90deg) translateZ(40px)" }} />
            {/* Top */}
            <div className="absolute top-[24px] left-0 w-20 h-16 bg-white dark:bg-zinc-700 border-2 border-zinc-200 dark:border-zinc-600 rounded-2xl" style={{ transform: "rotateX(90deg) translateZ(56px)" }} />
            {/* Bottom */}
            <div className="absolute top-[24px] left-0 w-20 h-16 bg-zinc-200 dark:bg-zinc-950 border-2 border-zinc-200 dark:border-zinc-800 rounded-2xl" style={{ transform: "rotateX(-90deg) translateZ(56px)" }}>
              <motion.div animate={{ height: [20, 40, 20], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 0.5, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-b from-emerald-500 to-transparent blur-md rounded-b-full" style={{ transform: "rotateX(90deg)" }} />
            </div>

            {/* === ARMS === */}
            <motion.div animate={{ rotateX: [-15, 15, -15] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-2 -left-8 w-6 h-20 origin-top" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-300 dark:border-zinc-600 rounded-full" style={{ transform: "translateZ(8px)" }} />
              <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-800 border-2 border-zinc-400 dark:border-zinc-700 rounded-full" style={{ transform: "rotateY(180deg) translateZ(8px)" }} />
            </motion.div>
            <motion.div animate={{ rotateX: [15, -15, 15] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-2 -right-8 w-6 h-20 origin-top" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-300 dark:border-zinc-600 rounded-full" style={{ transform: "translateZ(8px)" }} />
              <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-800 border-2 border-zinc-400 dark:border-zinc-700 rounded-full" style={{ transform: "rotateY(180deg) translateZ(8px)" }} />
            </motion.div>
          </div>

        </motion.div>
      </motion.div>

      <div className="absolute bottom-[-30px] text-xs font-mono text-zinc-500 opacity-60 pointer-events-none animate-pulse">
        Drag to rotate 360°
      </div>
    </div>
  );
}