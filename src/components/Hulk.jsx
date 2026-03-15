// src/components/Hulk.jsx
import { motion, useMotionValue, useTransform } from "framer-motion";

const Hulk = () => {
  // Motion values untuk melacak posisi drag
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transformasi posisi drag menjadi rotasi 3D (perspektif menoleh/menunduk)
  const rotateX = useTransform(y, [-100, 100], [25, -25]);
  const rotateY = useTransform(x, [-100, 100], [-25, 25]);

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-[1200px] overflow-visible">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16653420_1px,transparent_1px),linear-gradient(to_bottom,#16653420_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] pointer-events-none z-0"></div>

      <motion.div
        style={{ x, y, rotateX, rotateY, cursor: "grab" }}
        drag
        // Membatasi seberapa jauh Hulk bisa digeser
        dragConstraints={{ left: -100, right: 100, top: -70, bottom: 70 }}
        dragElastic={0.15}
        whileTap={{ cursor: "grabbing" }}
        className="relative w-[380px] h-[380px] drop-shadow-[0_30px_50px_rgba(22,101,52,0.3)] dark:drop-shadow-[0_30px_50px_rgba(22,101,52,0.15)] preserve-3d overflow-visible z-10 flex items-center justify-center"
      >
        {/* SVG Berlapis Maksimal untuk Efek 3D Pseudo-Nyata */}
        <svg width="100%" height="100%" viewBox="0 0 200 220" className="overflow-visible pointer-events-none">
          
          <defs>
            {/* Gradien Otot Utama (Zinc Green) */}
            <linearGradient id="muscle-base" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#166534" />
              <stop offset="50%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#14532d" />
            </linearGradient>
            {/* Gradien Bayangan Otot */}
            <linearGradient id="muscle-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#14532d" />
              <stop offset="100%" stopColor="#0f172a" /> {/* zinc-950 shadow */}
            </linearGradient>
            {/* Gradien Celana Robek (Indigo Ungu) */}
            <linearGradient id="pants-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>
            {/* Gradien Rambut */}
            <linearGradient id="hair-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#09090b" /> {/* zinc-950 */}
              <stop offset="100%" stopColor="#27272a" /> {/* zinc-800 */}
            </linearGradient>
          </defs>

          {/* Efek Cahaya Belakang (Glow) */}
          <circle cx="100" cy="110" r="100" fill="#15803d" className="opacity-10 dark:opacity-20 animate-pulse" />
          
          {/* ========================================================= */}
          {/* AREA BADAN & PINGGANG (Pseudo-3D Stacking) */}
          {/* ========================================================= */}

          {/* LAPISAN 1 (Paling Belakang, Z=0): Bahu Belakang & Leher */}
          <g style={{ transform: "translateZ(0px)" }}>
            <path d="M15 60 Q100 0 185 60 L180 150 L20 150 Z" fill="url(#muscle-shadow)" />
            <rect x="75" y="45" width="50" height="20" rx="8" fill="#14532d" />
          </g>

          {/* LAPISAN 2 (Z=20): Otot Punggung & Pinggang Belakang */}
          <g style={{ transform: "translateZ(20px)" }}>
            <path d="M25 70 Q100 20 175 70 L170 160 Q100 180 30 160 Z" fill="url(#muscle-base)" stroke="#14532d" strokeWidth="2"/>
            <path d="M60 160 Q100 190 140 160 Z" fill="#14532d" />
          </g>

          {/* LAPISAN 3 (Z=40): Otot Perut Atas & Pusar */}
          <g style={{ transform: "translateZ(40px)" }}>
            <path d="M65 110 Q100 140 135 110 L130 170 Q100 190 70 170 Z" fill="#15803d" stroke="#14532d" strokeWidth="2"/>
            <circle cx="100" cy="155" r="3.5" fill="#14532d" />
          </g>

          {/* LAPISAN 4 (Z=60): Pusar Depan & Detail Garis Perut */}
          <g style={{ transform: "translateZ(60px)" }}>
            <path d="M70 140 L130 140" stroke="#14532d" strokeWidth="5" strokeLinecap="round" />
            <path d="M80 160 L120 160" stroke="#14532d" strokeWidth="5" strokeLinecap="round" />
          </g>

          {/* LAPISAN 5 (Z=50): Celana Ungu Robek Maksimal */}
          <g style={{ transform: "translateZ(50px)" }}>
            <path d="M40 170 L160 170 L175 220 L115 220 L100 195 L85 220 L25 220 Z" fill="url(#pants-gradient)" stroke="#312e81" strokeWidth="2"/>
            {/* Detail Robekan & Jahitan */}
            <path d="M25 220 L35 205 L45 220 M155 220 L165 205 L175 220" stroke="#1e1b4b" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M80 175 L120 175" stroke="#312e81" strokeWidth="3" strokeDasharray="6 3" />
          </g>

          {/* ========================================================= */}
          {/* AREA LENGAN & TANGAN (Pseudo-3D Stacking) */}
          {/* ========================================================= */}

          {/* LAPISAN 6 (Z=70): Bahu Depan (Deltoids) */}
          <g style={{ transform: "translateZ(70px)" }}>
            <rect x="0" y="55" width="45" height="95" rx="22.5" fill="#166534" stroke="#14532d" strokeWidth="2"/>
            <rect x="155" y="55" width="45" height="95" rx="22.5" fill="#166534" stroke="#14532d" strokeWidth="2"/>
          </g>

          {/* LAPISAN 7 (Z=90): Lengan Atas (Biceps/Triceps) */}
          <g style={{ transform: "translateZ(90px)" }}>
            <path d="M10 90 Q22.5 110 35 90" stroke="#14532d" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M165 90 Q177.5 110 190 90" stroke="#14532d" strokeWidth="5" strokeLinecap="round" fill="none" />
          </g>

          {/* LAPISAN 8 (Z=110): Kepalan Tangan 'SMASH' Terdepan */}
          <g style={{ transform: "translateZ(110px)" }}>
            <circle cx="15" cy="160" r="32" fill="#14532d" stroke="#0f172a" strokeWidth="2"/>
            <circle cx="185" cy="160" r="32" fill="#14532d" stroke="#0f172a" strokeWidth="2"/>
            {/* Detail Jari Mengepal (Line definition) */}
            <path d="M-5 140 L5 170 L5 185 M195 140 L195 170 L195 185" stroke="#09090b" strokeWidth="3.5" strokeLinecap="round" className="dark:stroke-zinc-900"/>
          </g>

          {/* ========================================================= */}
          {/* AREA KEPALA & WAJAH (Pseudo-3D Stacking) */}
          {/* ========================================================= */}

          {/* LAPISAN 9 (Z=120): Rambut Acak-acakan (Belakang) */}
          <g style={{ transform: "translateZ(120px)" }}>
            <path d="M60 40 Q100 5 140 40 L135 55 Q100 30 65 55 Z" fill="url(#hair-gradient)" />
          </g>

          {/* LAPISAN 10 (Z=140): Base Wajah Marah (Cyan Green Base) */}
          <g style={{ transform: "translateZ(140px)" }}>
            <rect x="65" y="25" width="70" height="75" rx="20" fill="#bef264" /> {/* Cyan Green Wajah */}
          </g>

          {/* LAPISAN 11 (Z=160): Mata Menyala & Mulut Menggeram */}
          <g style={{ transform: "translateZ(160px)" }}>
            {/* Alis Marah & Kerutan Dahi */}
            <path d="M70 45 L95 52 M130 45 L105 52" stroke="#09090b" strokeWidth="5" strokeLinecap="round" />
            <path d="M98 40 L102 40 M90 35 L110 35" stroke="#09090b" strokeWidth="3" strokeLinecap="round" />
            
            {/* Mata Hijau Menyala */}
            <rect x="78" y="52" width="15" height="10" rx="3" fill="#15803d" /> {/* Mata hijau */}
            <rect x="107" y="52" width="15" height="10" rx="3" fill="#15803d" />
            
            {/* Mulut Menggeram, Gigi & Kerutan Hidung */}
            <path d="M85 68 Q100 75 115 68" stroke="#09090b" strokeWidth="3" fill="none" />
            <rect x="85" y="75" width="30" height="12" rx="4" fill="#ffffff" />
            <path d="M93 75 L93 87 M107 75 L107 87" stroke="#09090b" strokeWidth="2.5" />
          </g>
        </svg>
      </motion.div>

      {/* Instruksi Pengguna */}
      <div className="absolute bottom-[-10px] right-12 text-xs font-mono opacity-40 pointer-events-none animate-pulse">Drag Hulk to smash the 3D space</div>
    </div>
  );
};

export default Hulk;