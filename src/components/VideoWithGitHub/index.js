import VideoPlayerGoogleDrive from "@site/src/components/VideoPlayerGoogleDrive";
import GitHubLinkBox from "@site/src/components/GitHubLinkBox";
import videos from "@site/src/data/courseData";

export default function VideoWithGitHub({ section, sub }) {
  const data = videos[section].subSections[sub];
  return (
    <>
      <VideoPlayerGoogleDrive url={data.videoURL} />
      <GitHubLinkBox url={data.githubURL} />
    </>
  );
}
