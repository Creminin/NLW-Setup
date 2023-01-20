import { Check } from 'phosphor-react';

export function NewFormHabit() {
  return (
    <form className='w-full flex flex-col mt-6'>

      <label htmlFor="title" className='font-semibold leading-tight'>
        Qual o seu comprometimento
      </label>

      <input 
        type="text" 
        id='title' 
        placeholder='Ex: Me exercitar todos os dias... '
        className='p-3 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 outline-none font-semibold focus:outline-green-500'
        autoFocus
      />

      <label htmlFor="" className='font-semibold leading-tight mt-4'>
        Qual a recorrência?
      </label>


      <button 
      type='submit' 
      className='flex items-center bg-zinc-800 rounded-lg justify-center mt-6 p-4 outline-none hover:outline-green-500 focus:bg-green-500 gap-3'>
        <Check size={20} weight='bold'/>
        Confirmar
      </button>
    </form>
  )
}