"use client";

import { AudioLines, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

type MissingDataAudioButtonProps = {
  label: string;
  src: string;
};

const waveformBars = [12, 18, 9, 22, 15, 26, 10, 20, 14, 24, 11, 17];

export function MissingDataAudioButton({
  label,
  src
}: MissingDataAudioButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function togglePlayback() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  return (
    <div className="mt-auto border-t border-[#f0d6d4] pt-5">
      <div
        aria-hidden="true"
        className="mx-auto flex h-8 max-w-32 items-center justify-center gap-1 text-[#c0524b]"
      >
        {waveformBars.map((height, index) => (
          <span
            className={[
              "w-0.5 rounded-full bg-current opacity-70 transition duration-300",
              isPlaying ? "animate-pulse" : ""
            ].join(" ")}
            key={`${height}-${index}`}
            style={{
              height: `${height}px`,
              animationDelay: `${index * 70}ms`
            }}
          />
        ))}
      </div>

      <button
        aria-label={`${isPlaying ? "Pause" : "Play"} audio for ${label}`}
        className="mx-auto mt-4 grid size-14 place-items-center rounded-full border border-[#e7b8b4] bg-white/84 text-[#c0524b] shadow-[0_12px_30px_rgba(192,82,75,0.14)] transition duration-300 hover:-translate-y-0.5 hover:border-[#c0524b] hover:bg-[#fff7f6] focus-visible:outline-[#c0524b]"
        onClick={togglePlayback}
        type="button"
      >
        {isPlaying ? (
          <Pause aria-hidden="true" className="size-6" strokeWidth={2} />
        ) : (
          <Play
            aria-hidden="true"
            className="ml-0.5 size-6 fill-current"
            strokeWidth={2}
          />
        )}
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-[#6b747f]">
        <AudioLines
          aria-hidden="true"
          className="size-4 text-[#7f8b98]"
          strokeWidth={1.7}
        />
        Tap to hear
      </p>

      <audio
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        preload="metadata"
        ref={audioRef}
        src={src}
      />
    </div>
  );
}
