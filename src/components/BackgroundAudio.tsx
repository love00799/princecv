
import { useRef, useState } from "react";
import { Volume, Volume2, VolumeX } from "lucide-react";

/**
 * Source: Pixabay Free Music (for demo)
 * Track: "Chilling Abstract" by Daddy_s_Music
 * https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b654c.mp3
 */
const AUDIO_SRC =
  "https://cdn.pixabay.com/audio/2022/03/15/audio_115b9b654c.mp3";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (!playing) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="inline-flex items-center bg-shortsDark/40 backdrop-blur-md rounded-full px-3 py-1.5 shadow border border-shortsWhite/20">
      <button
        aria-label={playing ? "Pause background music" : "Play background music"}
        className="p-1.5 rounded-full text-shortsWhite hover:text-shortsAccent transition"
        onClick={toggle}
        type="button"
      >
        {playing ? <Volume2 size={18} /> : <Volume size={18} />}
      </button>
      <span className="ml-2 text-shortsWhite font-semibold font-montserrat text-xs">
        {playing ? "Sound On" : "Sound Off"}
      </span>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />
    </div>
  );
}
