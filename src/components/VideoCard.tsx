import Image from 'next/image'

interface VideoCardProps {
    thumbnailUrl: string;
    duration: string;
    title: string;
    channelName: string;
    views: string;
}

export function VideoCard({ thumbnailUrl, duration, title, channelName, views }: VideoCardProps) {
    return(
        <div className="flex flex-col gap-3 w-full max-w-[360px] cursor-pointer group">

            {/* Container da thumbnail do vídeo */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-800">
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

            {/* Container das informações do vídeo */}
            <div className="flex flex-col">
                <h3 className="text-white font-semibold text-base leading-tight line-clamp-2">
                    {title}
                </h3>
                <div className="text-zinc-400 text-sm mt-1 flex items-center gap-1">
                    <span>{channelName}</span>
                    <span>•</span>
                    <span>{views}</span>
                </div>
            </div>

        </div>
    );
}