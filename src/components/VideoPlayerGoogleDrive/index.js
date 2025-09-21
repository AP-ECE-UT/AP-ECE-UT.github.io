
export default function VideoPlayerGoogleDrive({ url }) {
    return <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
            src={`${url}/preview`}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none"
            }}
            allow="autoplay"
            allowFullScreen
        ></iframe>
    </div>;
}
