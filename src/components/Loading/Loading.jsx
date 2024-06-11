import { Player } from '@lottiefiles/react-lottie-player';
import '@dotlottie/player-component'
export default function Loading() {
  return (
    <div>
      <Player
        src='https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'
        className="player"
        loop
        autoplay
        style={{ height: '300px', width: '300px' }}
      />
      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
      <dotlottie-player src="https://lottie.host/8b36eae2-4442-454d-b6ff-0e47e5505683/eZvDQp34rZ.json" background="transparent" speed="1" style={{width: 300+"px",height: 300+"px"}} direction="1" playMode="normal" loop controls autoplay></dotlottie-player>
    </div>
  )
}
