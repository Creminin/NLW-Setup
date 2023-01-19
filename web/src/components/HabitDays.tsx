import { motion } from 'framer-motion'

export function HabitDays() {
  return (
    <motion.div 
    className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 5, duration: 0.7, default: { ease: "linear" }}}
    ></motion.div>
  )
}