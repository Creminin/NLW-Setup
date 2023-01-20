import * as PopOver from '@radix-ui/react-popover'
import { motion } from 'framer-motion'
import { ProgressBar } from './Progressbar'

export function PopOverHabits() {
  return (
    <PopOver.Root>
      <PopOver.Trigger className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg'/>


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