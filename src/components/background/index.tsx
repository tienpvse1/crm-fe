import animationData from '../../animation/background.json';
import Lottie from 'react-lottie';

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
    <div className='lottie-bg'>
      <Lottie options={defaultOptions} height={550} width={550} />
    </div >
  )
}
