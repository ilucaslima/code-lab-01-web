import {
   Bookmark,
   CornerDownLeft,
   Ellipsis,
   Share2,
   ThumbsDown,
   ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import type { videoType } from "../app/types/video";
import { fromNow } from "../utils/dayjs";
import { formatNumber } from "../utils/format-number";

type videoDetailsProps = {
   video: videoType
}

export function VideoDetailsComponent({
	video:{title,
	views,
	publishedAt,
	channelName,
	channelAvatarUrl,
	subscribers,
	description,
   
	likes,}
}: videoDetailsProps) {
	return (
		<div className="min-w-0 space-y-5">
			<div className="space-y-4">
				<div className="space-y-3">
					<h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
						{title}
					</h1>

					
				</div>
            <div className="justify-between flex">
               <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/65">
						<span className="font-medium text-white/90">{formatNumber(views)}</span>
						<span>•</span>
						<span>{fromNow(publishedAt)}</span>
					</div>
<div className="flex flex-wrap items-center gap-3">
					<button
						type="button"
						className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/12"
					>
						<ThumbsUp className="h-4 w-4" />
						{formatNumber(likes || 0)}
					</button>
					<button
						type="button"
						className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/12"
					>
						<ThumbsDown className="h-4 w-4" />
					</button>
					<button
						type="button"
						className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/12"
					>
						<Share2 className="h-4 w-4" />
						Share
					</button>
					<button
						type="button"
						className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/12"
					>
						<Bookmark className="h-4 w-4" />
						Save
					</button>
					<button
						type="button"
						className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white transition hover:bg-white/12"
					>
						<Ellipsis className="h-4 w-4" />
					</button>
				</div>
            </div>

				
			</div>

			<div className="rounded-[1.5rem] border border-white/5 bg-white/[0.04] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-4">
						<Image
							src={channelAvatarUrl}
							alt={channelName}
							width={56}
							height={56}
							className="rounded-full ring-2 ring-white/10"
						/>

						<div>
							<h2 className="text-lg font-semibold text-white">
								{channelName}
							</h2>
							<p className="text-sm text-white/55">{formatNumber(subscribers)} subscribers</p>
						</div>
					</div>

					<button
						type="button"
						className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-background transition hover:brightness-110"
					>
						Subscribe
					</button>
				</div>
			</div>

			<div className="rounded-[1.5rem] border border-white/5 bg-white/[0.035] p-4 text-sm leading-6 text-white/70">
				<p>{description}</p>
				<button
					type="button"
					className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-primary"
				>
					Show more
					<CornerDownLeft className="h-3.5 w-3.5" />
				</button>
			</div>
		</div>
	);
}

export default VideoDetailsComponent;
