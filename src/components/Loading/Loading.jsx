import { Player } from '@lottiefiles/react-lottie-player';
export default function Loading() {
  return (
    <div>
      <Player
        src='./src/components/Loading/Animation - 1717840785142.json'
        className="player"
        loop
        autoplay
        // speed={5000}
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  )
}
