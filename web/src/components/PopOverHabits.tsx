import * as PopOver from '@radix-ui/react-popover'
import { motion } from 'framer-motion'
import { ProgressBar } from './Progressbar'
import clsx from 'clsx'

interface HabitDayProps {
  completed: number,
  amount: number
}

export function PopOverHabits(props: HabitDayProps) {
  const completedPercentage = Math.round((props.completed / props.amount) * 100)

  return (
    <PopOver.Root>
      <PopOver.Trigger 
      className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
        'bg-zinc-900 border-zinc-800': completedPercentage === 0,
        'bg-violet-900 border-violet-500': completedPercentage > 0 && completedPercentage < 20,
        'bg-violet-800 border-violet-500': completedPercentage >= 20 && completedPercentage < 40,
        'bg-violet-700 border-violet-500': completedPercentage >= 40 && completedPercentage < 60,
        'bg-violet-600 border-violet-500': completedPercentage >= 60 && completedPercentage < 80,
        'bg-violet-500 border-violet-400': completedPercentage >= 80,
      })}/>


      <PopOver.Portal>
        <PopOver.Content>
          <motion.div 
            className='min-w-[300px] p-6 rounded-2xl bg-zinc-900 flex flex-col'
            initial={{ opacity: 0, y: '5vh'}}
            animate={{ opacity: 1, y: '0'}}
            transition={{ type: 'spring', duration: 0.7, bounce: 0.5}}
          >
            <span className='font-semibold'>Teça-feira</span>
            <span className='mt-1 font-extrabold text-3xl leading-tight'>20/01</span>

            <ProgressBar progress={75}/>
            <PopOver.Arrow height={8} width={16} className='fill-zinc-900'/>
          </motion.div>
        </PopOver.Content>
      </PopOver.Portal>
    </PopOver.Root>
  )
}