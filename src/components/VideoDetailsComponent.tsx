import Image from "next/image";
import clsx from "clsx";
import {
	Bookmark,
	CornerDownLeft,
	Ellipsis,
	Eye,
	MessageCircle,
	MoreHorizontal,
	PlayCircle,
	Share2,
	ThumbsDown,
	ThumbsUp,
} from "lucide-react";

type VideoDetailsComment = {
	id: string;
	author: string;
	avatarUrl: string;
	timeAgo: string;
	text: string;
	likes?: string;
};

type VideoDetailsNextUp = {
	id: string;
	title: string;
	channelName: string;
	views: string;
	duration: string;
	thumbnailUrl: string;
};

export interface VideoDetailsComponentProps {
	title: string;
	thumbnailUrl: string;
	duration: string;
	views: string;
	publishedAt: string;
	channelName: string;
	channelAvatarUrl: string;
	subscribers: string;
	description: string;
	likes?: string;
	commentsCount?: string;
	tags?: string[];
	nextUp?: VideoDetailsNextUp[];
	comments?: VideoDetailsComment[];
	className?: string;
}

const defaultNextUp: VideoDetailsNextUp[] = [
	{
		id: "1",
		title: "Tactile Tech: Why the 90s are Back in Design",
		channelName: "Neo Retro Studio",
		views: "450K views",
		duration: "15:04",
		thumbnailUrl: "https://picsum.photos/320/180?random=101",
	},
	{
		id: "2",
		title: "Bioluminescence: Creating Light With Code",
		channelName: "Motion Theory",
		views: "1.1M views",
		duration: "09:22",
		thumbnailUrl: "https://picsum.photos/320/180?random=102",
	},
	{
		id: "3",
		title: "The Psychology of Color in Obsidian Interfaces",
		channelName: "Chromatic Lab",
		views: "712K views",
		duration: "22:45",
		thumbnailUrl: "https://picsum.photos/320/180?random=103",
	},
	{
		id: "4",
		title: "Global Connectivity: Mapping Attention at Scale",
		channelName: "Data Visualizer",
		views: "3.2M views",
		duration: "12:10",
		thumbnailUrl: "https://picsum.photos/320/180?random=104",
	},
];

const defaultComments: VideoDetailsComment[] = [
	{
		id: "1",
		author: "@design_muse",
		avatarUrl: "https://i.pravatar.cc/96?img=12",
		timeAgo: "2 hours ago",
		text: "The way the typography interacts with the negative space in this edit is absolutely elite. The 'The Neon Curator' concept is really coming through here.",
		likes: "842",
	},
	{
		id: "2",
		author: "@motion_master",
		avatarUrl: "https://i.pravatar.cc/96?img=32",
		timeAgo: "5 hours ago",
		text: "That progress bar design at 04:22 is insane. I need a tutorial on how you're layering those gradients.",
		likes: "766",
	},
];

export function VideoDetailsComponent({
	title,
	thumbnailUrl,
	duration,
	views,
	publishedAt,
	channelName,
	channelAvatarUrl,
	subscribers,
	description,
	likes = "124K",
	commentsCount = "1,482",
	tags = ["Design", "Tech", "Motion", "Cinematography"],
	nextUp = defaultNextUp,
	comments = defaultComments,
	className,
}: VideoDetailsComponentProps) {
	return (
		<section
			className={clsx(
				"mx-auto w-full max-w-[1440px] px-4 py-4 text-white lg:px-6",
				className,
			)}
		>
			<div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
				<div className="min-w-0 space-y-5">
					<div className="overflow-hidden rounded-[1.75rem] border border-white/5 bg-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
						<div className="relative aspect-video w-full">
							<Image
								src={thumbnailUrl}
								alt={`Thumbnail de ${title}`}
								fill
								className="object-cover"
								priority
							/>

							<div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
								<span className="inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
									<PlayCircle className="mr-2 h-3.5 w-3.5" />
									Featured video
								</span>

								<span className="rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
									{duration}
								</span>
							</div>
						</div>
					</div>

					<div className="space-y-4">
						<div className="space-y-3">
							<h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
								{title}
							</h1>

							<div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/65">
								<span className="font-medium text-white/90">{views}</span>
								<span>•</span>
								<span>{publishedAt}</span>
							</div>
						</div>

						<div className="flex flex-wrap items-center gap-3">
							<button className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/12">
								<ThumbsUp className="h-4 w-4" />
								{likes}
							</button>
							<button className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/12">
								<ThumbsDown className="h-4 w-4" />
							</button>
							<button className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/12">
								<Share2 className="h-4 w-4" />
								Share
							</button>
							<button className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/12">
								<Bookmark className="h-4 w-4" />
								Save
							</button>
							<button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white transition hover:bg-white/12">
								<Ellipsis className="h-4 w-4" />
							</button>
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
									<h2 className="text-lg font-semibold text-white">{channelName}</h2>
									<p className="text-sm text-white/55">{subscribers} subscribers</p>
								</div>
							</div>

							<button className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-background transition hover:brightness-110">
								Subscribe
							</button>
						</div>
					</div>

					<div className="rounded-[1.5rem] border border-white/5 bg-white/[0.035] p-4 text-sm leading-6 text-white/70">
						<p>{description}</p>
						<button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-secondary transition hover:text-primary">
							Show more
							<CornerDownLeft className="h-3.5 w-3.5" />
						</button>
					</div>

					<div className="rounded-[1.5rem] border border-white/5 bg-white/[0.035] p-4 sm:p-5">
						<div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
							<h3 className="text-lg font-semibold text-white">
								{commentsCount} Comments
							</h3>

							<button className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white">
								<MoreHorizontal className="h-4 w-4" />
								Sort by
							</button>
						</div>

						<div className="mt-4 space-y-4">
							<div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-black/20 px-4 py-3 text-sm text-white/40">
								<Image
									src={channelAvatarUrl}
									alt="Seu avatar"
									width={32}
									height={32}
									className="rounded-full"
								/>
								Add a public comment...
							</div>

							<div className="space-y-4">
								{comments.map((comment) => (
									<article
										key={comment.id}
										className="flex gap-3 rounded-2xl border border-white/5 bg-black/15 p-4"
									>
										<Image
											src={comment.avatarUrl}
											alt={comment.author}
											width={36}
											height={36}
											className="h-9 w-9 rounded-full object-cover"
										/>

										<div className="min-w-0 flex-1">
											<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
												<span className="font-medium text-white">
													{comment.author}
												</span>
												<span className="text-white/45">{comment.timeAgo}</span>
											</div>

											<p className="mt-2 text-sm leading-6 text-white/72">
												{comment.text}
											</p>

											<div className="mt-3 flex items-center gap-4 text-sm text-white/55">
												<button className="inline-flex items-center gap-1.5 transition hover:text-white">
													<ThumbsUp className="h-4 w-4" />
													{comment.likes}
												</button>
												<button className="inline-flex items-center gap-1.5 transition hover:text-white">
													<MessageCircle className="h-4 w-4" />
													Reply
												</button>
											</div>
										</div>
									</article>
								))}
							</div>
						</div>
					</div>
				</div>

				<aside className="space-y-5 xl:sticky xl:top-4 xl:h-fit">
					<div className="rounded-[1.5rem] border border-white/5 bg-white/[0.035] p-4">
						<div className="mb-4 flex items-center justify-between gap-3">
							<h3 className="text-lg font-semibold text-white">Next up</h3>
							<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
								Autoplay
								<span className="relative h-5 w-9 rounded-full bg-primary/80">
									<span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow" />
								</span>
							</div>
						</div>

						<div className="space-y-3">
							{nextUp.map((video) => (
								<article
									key={video.id}
									className="group flex gap-3 rounded-2xl p-1 transition hover:bg-white/[0.04]"
								>
									<div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl bg-black/30">
										<Image
											src={video.thumbnailUrl}
											alt={video.title}
											fill
											className="object-cover transition-transform duration-300 group-hover:scale-105"
										/>
										<span className="absolute bottom-1.5 right-1.5 rounded bg-black/80 px-1.5 py-0.5 text-[10px] font-semibold text-white">
											{video.duration}
										</span>
									</div>

									<div className="min-w-0 flex-1 py-1">
										<h4 className="line-clamp-2 text-sm font-medium leading-5 text-white">
											{video.title}
										</h4>
										<p className="mt-1 text-xs text-white/45">{video.channelName}</p>
										<p className="mt-1 flex items-center gap-1 text-xs text-white/45">
											<Eye className="h-3.5 w-3.5" />
											{video.views}
										</p>
									</div>
								</article>
							))}
						</div>
					</div>

					<div className="flex flex-wrap gap-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className={clsx(
									"rounded-full border px-3 py-1 text-xs font-medium transition",
									tag === "Design"
										? "border-primary/50 bg-primary/20 text-[#f6d7dc]"
										: "border-white/8 bg-white/[0.04] text-white/55",
								)}
							>
								{tag}
							</span>
						))}
					</div>
				</aside>
			</div>
		</section>
	);
}

export default VideoDetailsComponent;
