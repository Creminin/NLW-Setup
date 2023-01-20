import { motion } from 'framer-motion'
import { generateDateYearFromBeginning } from '../utils/generate-date-year-from-beginning'
import { PopOverHabits } from './PopOverHabits'

const weekDays = [ 
  'Do', 
  'Se', 
  'Te', 
  'Qua', 
  'Qui', 
  'Sex', 
  'Sa'
]

const summaryDays = generateDateYearFromBeginning()

const minimumSummarySize = 18 * 7
const amountOfDaysToFill = minimumSummarySize - summaryDays.length

export function Summary() {
  return (
    <div className='w-full flex gap-1'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {weekDays.map((weekDays, i) => {
          return(
            <motion.div 
            key={`${weekDays}-${i}`} 
            className='text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center'
            initial={{ opacity: 0, x: '-100vh' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{ delay: 4, duration: 0.5}}
            >
              {weekDays}
            </motion.div>
          )
        })}
      </div>

      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        {summaryDays.map(date => {
          return <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 0.7, default: { ease: "linear" }}}
          key={date.toString()}
          >
            <PopOverHabits />
          </motion.div>
        })}


        {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill}).map(() => {
          return (
            <motion.div 
            className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 5.5, duration: 0.7}}
            ></motion.div>
          )
        })}
      </div>
    </div>
  )
}