import { VideoCard } from "@/src/components/VideoCard";

const DashboardPage = () => {
  const videos = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    thumbnailUrl: `https://picsum.photos/300/200?random=${i}`,
    duration: "08:20",
    title: `Vídeo ${i + 1}`,
    channelName: `Canal ${i + 1}`,
    views: `${(i + 1) * 100}K views`,
  }));

  const [featured, ...rest] = videos;

  return (
    <div className="px-3 py-10">
      <div className="flex items-center mb-4">
        <VideoCard className="flex-1" {...featured} variant="large" />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {rest.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
