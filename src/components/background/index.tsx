import animationData from '../../animation/background.json';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
export const LottieBackGround = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <motion.div
      className='lottie-bg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <Lottie options={defaultOptions} height={550} width={720} />

    </motion.div>
  )
}
