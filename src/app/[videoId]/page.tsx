import VideoDetailsComponent from "@/src/components/VideoDetailsComponent";
import { getVideoMock } from "@/src/utils/get-video-mock";

export  const VideoPage = ({ params }: { params: { videoId: string } }) => {
   const video = getVideoMock()
  return (
    <div className="px-3 py-10">
<VideoDetailsComponent  video={video}/>    
</div>
  );
}
export default VideoPage;