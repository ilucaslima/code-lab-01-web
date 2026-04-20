import { VideoCard } from "@/src/components/VideoCard"; 

export default function SandboxPage() {
    return (
        <div className="min-h-screen bg-zinc-950 p-10 flex items-start justify-center">
            <VideoCard 
                thumbnailUrl="/teste-thumb.jpg" 
                duration="08:20" 
                title="5 noitadas com frederico" 
                channelName="Frederico" 
                views="450K views" 
            />
        </div>
    );
}