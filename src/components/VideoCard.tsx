import Image from "next/image";
import clsx from "clsx";

interface VideoCardProps {
  thumbnailUrl: string;
  duration: string;
  title: string;
  channelName: string;
  views: string;
  variant?: "default" | "large" | "small";
  className?: string;
}

export function VideoCard({
  thumbnailUrl,
  duration,
  title,
  channelName,
  views,
  variant = "default",
  className,
}: VideoCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 cursor-pointer group",
        variant === "large" && "max-w-180",
        variant === "default" && "max-w-90",
        variant === "small" && "max-w-65",
        className,
      )}
    >
      <div className="relative w-full rounded-xl overflow-hidden bg-zinc-800 aspect-video">
        <Image
          src={thumbnailUrl}
          alt={`Thumbnail de ${title}`}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />

        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
          {duration}
        </span>
      </div>

      <div className="flex flex-col">
        <h3
          className={clsx(
            "text-white font-semibold leading-tight line-clamp-2",
            variant === "large" && "text-xl",
            variant === "default" && "text-base",
            variant === "small" && "text-sm",
          )}
        >
          {title}
        </h3>

        <div
          className={clsx(
            "text-zinc-400 mt-1 flex items-center gap-1",
            variant === "large" && "text-base",
            variant === "default" && "text-sm",
            variant === "small" && "text-xs",
          )}
        >
          <span>{channelName}</span>
          <span>•</span>
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
}
