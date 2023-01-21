import LogoImage from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'phosphor-react'
import { motion } from 'framer-motion'
import { NewFormHabit } from './NewFormHabit'
export function Header () {

  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={LogoImage} alt="LogoHabits" />

      <Dialog.Root>

        <Dialog.Trigger
          type='button'
          className='
          border border-violet-500
          shadow-lg shadow-violet-500 
          font-semibold rounded-lg 
          px-6 py-4 flex items-center 
          gap-3 hover:animate-pulse'
        >
          <Plus size={20} className='text-violet-500'/> 
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='w-screen h-screen bg-black/50 fixed inset-0'/>

          <Dialog.Content>
            <motion.div 
              className='absolute p-10 bg-zinc-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl w-full max-w-md'
              initial={{ height: '0', opacity: 0}}
              animate={{ height: '100%', opacity: 1}}
              transition={{duration: 0.5}}
              >
              <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
                <X size={24}/>
              </Dialog.Close>

              <Dialog.Title className='font-extrabold text-2xl'>
                Criar novo hábito
              </Dialog.Title>

              <NewFormHabit />
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}