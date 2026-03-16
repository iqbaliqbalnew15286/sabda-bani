import { motion, useMotionValue } from "framer-motion";

export default function InteractiveRobot() {
  // Motion values untuk melacak rotasi X dan Y
  const rotateX = useMotionValue(-15);
  const rotateY = useMotionValue(35);

  // Fungsi untuk menangani drag/geser (memutar robot 360 derajat)
  const handlePan = (event, info) => {
    // Kecepatan putaran diatur oleh angka pengali (0.5)
    rotateX.set(rotateX.get() - info.delta.y * 0.5);
    rotateY.set(rotateY.get() + info.delta.x * 0.5);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center [perspective:1200px] cursor-grab active:cursor-grabbing">
      
      {/* Area pan transparan agar mudah di-drag dari mana saja */}
      <motion.div
        className="absolute inset-0 z-50 touch-none"
        onPan={handlePan}
      />

      {/* Kontainer Utama Robot (Efek Melayang) */}
      <motion.div
        animate={{ y: [-15, 15, -15] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative flex items-center justify-center pointer-events-none"
      >
        {/* Kontainer Rotasi 3D */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-32 h-48"
        >

          {/* ==================== KEPALA (Ukuran: 112 x 112 x 112) ==================== */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28" style={{ transformStyle: "preserve-3d" }}>
            
            {/* Wajah (Depan) - Layar Hitam dengan Mata Berkedip */}
            <div className="absolute inset-0 bg-zinc-950 border-4 border-zinc-200 dark:border-zinc-700 rounded-2xl flex items-center justify-center gap-4 overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,1)]" style={{ transform: "translateZ(56px)" }}>
              {/* Garis scanline ala TV Retro */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50 z-10"></div>
              
              {/* Mata Kiri (Animasi Kedip) */}
              <motion.div 
                animate={{ scaleY: [1, 0.05, 1] }} 
                transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }} 
                className="w-4 h-10 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981] relative z-0" 
              />
              {/* Mata Kanan (Animasi Kedip) */}
              <motion.div 
                animate={{ scaleY: [1, 0.05, 1] }} 
                transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }} 
                className="w-4 h-10 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981] relative z-0" 
              />
            </div>

            {/* Sisi Belakang Kepala */}
            <div className="absolute inset-0 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl flex items-center justify-center" style={{ transform: "rotateY(180deg) translateZ(56px)" }}>
              <div className="w-12 h-12 border-4 border-dashed border-zinc-300 dark:border-zinc-600 rounded-full opacity-50" />
            </div>
            
            {/* Sisi Kanan Kepala */}
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl" style={{ transform: "rotateY(90deg) translateZ(56px)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 shadow-inner flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20" />
              </div>
            </div>
            
            {/* Sisi Kiri Kepala */}
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl" style={{ transform: "rotateY(-90deg) translateZ(56px)" }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 shadow-inner flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20" />
              </div>
            </div>
            
            {/* Sisi Atas Kepala (Punya Antena) */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-700 border-2 border-zinc-300 dark:border-zinc-600 rounded-2xl" style={{ transform: "rotateX(90deg) translateZ(56px)" }}>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-zinc-300 dark:bg-zinc-800 rounded-full flex justify-center">
                 {/* Tiang Antena */}
                 <div className="w-1.5 h-16 bg-zinc-400 dark:bg-zinc-500 origin-bottom transform -rotate-x-90 -translate-y-14" style={{ transformStyle: "preserve-3d" }}>
                   {/* Ujung Antena Nyala */}
                   <motion.div animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute -top-3 -left-1 w-3.5 h-3.5 bg-emerald-500 rounded-full shadow-[0_0_12px_#10b981]" />
                 </div>
               </div>
            </div>
            
            {/* Sisi Bawah Kepala */}
            <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-950 border-2 border-zinc-400 dark:border-zinc-800 rounded-2xl" style={{ transform: "rotateX(-90deg) translateZ(56px)" }} />
          </div>

          {/* ==================== LEHER ==================== */}
          <div className="absolute top-[108px] left-1/2 -translate-x-1/2 w-6 h-8 bg-zinc-400 dark:bg-zinc-700" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-600 border-x border-zinc-500" style={{ transform: "translateZ(8px)" }} />
            <div className="absolute inset-0 bg-zinc-500 dark:bg-zinc-800 border-x border-zinc-600" style={{ transform: "rotateY(180deg) translateZ(8px)" }} />
            <div className="absolute top-0 bottom-0 left-[-2px] w-4 bg-zinc-300 dark:bg-zinc-500" style={{ transform: "rotateY(90deg) translateZ(10px)" }} />
            <div className="absolute top-0 bottom-0 left-[-2px] w-4 bg-zinc-300 dark:bg-zinc-500" style={{ transform: "rotateY(-90deg) translateZ(10px)" }} />
          </div>

          {/* ==================== BADAN (Ukuran: 80 x 96 x 80) ==================== */}
          <div className="absolute top-[130px] left-1/2 -translate-x-1/2 w-20 h-24" style={{ transformStyle: "preserve-3d" }}>
            
            {/* Depan Badan (Punya Core Reactor) */}
            <div className="absolute inset-0 bg-white dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl flex items-center justify-center overflow-hidden" style={{ transform: "translateZ(40px)" }}>
              {/* Reactor Berputar */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="w-12 h-12 border-[3px] border-dashed border-emerald-500/60 rounded-full flex items-center justify-center">
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-5 bg-emerald-500 rounded-full shadow-[0_0_20px_#10b981]" />
              </motion.div>
            </div>

            {/* Belakang Badan */}
            <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl flex flex-col gap-2 items-center justify-center" style={{ transform: "rotateY(180deg) translateZ(40px)" }}>
               <div className="w-10 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
               <div className="w-10 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
               <div className="w-10 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
            </div>

            {/* Sisi Kanan Badan */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-850 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl" style={{ transform: "rotateY(90deg) translateZ(40px)" }} />
            
            {/* Sisi Kiri Badan */}
            <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-850 border-2 border-zinc-300 dark:border-zinc-700 rounded-xl" style={{ transform: "rotateY(-90deg) translateZ(40px)" }} />
            
            {/* Atas Badan */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-300 dark:border-zinc-600 rounded-xl" style={{ transform: "rotateX(90deg) translateZ(40px)" }} />
            
            {/* Bawah Badan (Punya Jet Thruster) */}
            <div className="absolute top-1/2 left-0 w-20 h-20 bg-zinc-300 dark:bg-zinc-950 border-2 border-zinc-400 dark:border-zinc-800 rounded-xl flex items-center justify-center" style={{ transform: "rotateX(-90deg) translateZ(48px)" }}>
              {/* Api Jet */}
              <motion.div animate={{ height: [40, 60, 40], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 0.3, repeat: Infinity }} className="w-8 bg-gradient-to-b from-emerald-500 via-emerald-400/50 to-transparent blur-md rounded-b-full origin-top transform rotate-x-90 translate-y-4" style={{ transformStyle: "preserve-3d" }} />
            </div>

            {/* ==================== TANGAN MENGAMBANG ==================== */}
            {/* Tangan Kiri */}
            <motion.div animate={{ rotateX: [-20, 20, -20], y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-4 -left-10 w-6 h-16 origin-top" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-300 dark:border-zinc-600 rounded-full" style={{ transform: "translateZ(10px)" }} />
              <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-800 border-2 border-zinc-400 dark:border-zinc-700 rounded-full" style={{ transform: "rotateY(180deg) translateZ(10px)" }} />
            </motion.div>
            
            {/* Tangan Kanan */}
            <motion.div animate={{ rotateX: [20, -20, 20], y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-4 -right-10 w-6 h-16 origin-top" style={{ transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-700 border-2 border-zinc-300 dark:border-zinc-600 rounded-full" style={{ transform: "translateZ(10px)" }} />
              <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-800 border-2 border-zinc-400 dark:border-zinc-700 rounded-full" style={{ transform: "rotateY(180deg) translateZ(10px)" }} />
            </motion.div>

          </div>

        </motion.div>
      </motion.div>

      <div className="absolute bottom-[-40px] text-[11px] font-mono text-emerald-600 dark:text-emerald-400 opacity-80 pointer-events-none animate-pulse bg-emerald-500/10 px-4 py-1.5 rounded-full backdrop-blur-sm border border-emerald-500/20">
        [ DRAG TO ROTATE 360° ]
      </div>
    </div>
  );
}