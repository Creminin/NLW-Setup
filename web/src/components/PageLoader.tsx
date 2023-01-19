import { motion } from 'framer-motion'
import LogoImage from "../assets/logo.svg";
export function PageLoader() {

  return (
    <motion.div 
      className='w-screen h-screen absolute flex justify-center items-center bg-background z-10'
      initial={{ opacity: 1, y: '0'}}
      animate={{ y: '-100vh', opacity: 0}}
      transition={{ delay: 3, duration: 0.9}}
      >
      <div>
        <motion.img src={LogoImage} alt=""  className='h-40' 
        initial={{ x: '-40vw', opacity: 0}}
        animate={{ x: '0', opacity: 1 }}
        transition={{ duration: 0.5, type: 'tween'}}
        />
      </div>
    </motion.div>
  )
}