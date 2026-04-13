'use client'
import { motion } from 'framer-motion';

export default function NoticeCard({ notice }: { notice: any }) {
  const isUrgent = notice.type === 'urgent';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className={`relative break-inside-avoid mb-6 p-6 rounded-xl border backdrop-blur-xl 
        ${isUrgent 
          ? 'bg-red-950/10 border-red-600/40 shadow-[0_0_20px_rgba(220,38,38,0.15)]' 
          : 'bg-white/5 border-white/10'}`}
    >
      <div className="flex items-center gap-2 mb-3">
        {isUrgent && <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />}
        <h3 className="text-lg font-bold text-zinc-100 uppercase tracking-tight">{notice.title}</h3>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed">{notice.content}</p>
      
      <div className="mt-4 flex justify-between items-center text-[10px] text-zinc-600 font-mono">
        <span className={isUrgent ? 'text-red-500' : ''}>{notice.type.toUpperCase()}</span>
        <span>EXP: {new Date(notice.expiresAt).toLocaleTimeString()}</span>
      </div>
    </motion.div>
  );
}