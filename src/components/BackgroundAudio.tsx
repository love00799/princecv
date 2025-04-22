
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
    <div className="inline-flex items-center bg-white/90 rounded-full px-4 py-1 shadow border border-shortsAccent/40">
      <button
        aria-label={playing ? "Pause background music" : "Play background music"}
        className="p-2 rounded-full text-shortsRed hover:text-shortsPurple transition"
        onClick={toggle}
        type="button"
      >
        {playing ? <Volume2 size={20} /> : <Volume size={20} />}
      </button>
      <span className="ml-2 text-shortsDark font-semibold font-montserrat text-sm">
        {playing ? "Background Music Playing" : "Background Music Off"}
      </span>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />
    </div>
  );
}
