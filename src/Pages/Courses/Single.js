import React, { useState, useEffect, useRef } from "react";

function Single() {
  const [signedVideoUrls, setSignedVideoUrls] = useState({});
  const [videoDurations, setVideoDurations] = useState({});
  const courseData = {
    _id: "67f37980d3c363fae5157a8a",
    title: "test2",
    description: "testing",
    courseId: "COURSE-2025-0002",
    price: 78,
    image: "https://d1lraevgtuc0pz.cloudfront.net/1744009557648-Calendar.png",
    instructor: null,
    category: {
      _id: "67ee29c41520326bf985b345",
      name: "civil services",
    },
    content: [
      {
        moduleTitle: "intro",
        videos: [
          {
            title: "1",
            videoUrl:
              "https://d1lraevgtuc0pz.cloudfront.net/1744009593578-SampleVideo_1280x720_5mb.mp4",
            isFreeAccess: true,
            _id: "67f37980d3c363fae5157a8c",
          },
        ],
        documents: [],
        _id: "67f37980d3c363fae5157a8b",
      },
    ],
    enrolledStudentCount: 0,
    status: 1,
    ratings: [],
    createdAt: "2025-04-07T07:06:40.081Z",
    updatedAt: "2025-04-07T07:06:56.793Z",
  };
  // Block right-click
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  // Block dev tools and shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === "s" || e.key === "S")) ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Blur screen on PrintScreen
  useEffect(() => {
    const handleScreenshot = (e) => {
      if (e.key === "PrintScreen") {
        document.body.style.filter = "blur(10px)";
        setTimeout(() => {
          document.body.style.filter = "none";
        }, 1000);
      }
    };
    window.addEventListener("keydown", handleScreenshot);
    return () => window.removeEventListener("keydown", handleScreenshot);
  }, []);

  const handlePlayPremiumVideo = async (videoUrl, moduleIndex, videoIndex) => {
    try {
      const response = await fetch(
        "http://13.60.228.224:5050/api/v1/student/getPresignedFile",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file: videoUrl }),
        }
      );

      const result = await response.json();
      if (result.url) {
        const key = `${moduleIndex}-${videoIndex}`;
        setSignedVideoUrls((prev) => ({ ...prev, [key]: result.url }));
      }
    } catch (err) {
      console.error("Error fetching signed URL:", err);
    }
  };

  // Auto 720p setup — for reference, usually handled via quality plugins/CDN settings.
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultPlaybackRate = 1;
      videoRef.current.playbackRate = 1;
      videoRef.current.setAttribute("height", 720);
    }
  }, [signedVideoUrls]);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>{courseData.title}</h1>
      <p style={styles.description}>{courseData.description}</p>
      <img
        src={courseData.image}
        alt="Course Thumbnail"
        style={styles.thumbnail}
      />

      {courseData.content?.map((module, moduleIndex) => (
        <div key={moduleIndex} style={styles.moduleBox}>
          <h2 style={styles.moduleTitle}>{module.moduleTitle}</h2>
          <ul style={styles.videoList}>
            {module.videos?.map((video, videoIndex) => {
              const key = `${moduleIndex}-${videoIndex}`;
              const signedUrl = signedVideoUrls[key] || video.videoUrl;

              return (
                <li key={videoIndex} style={styles.videoItem}>
                  <strong style={styles.videoTitle}>{video.title}</strong>
                  <br />

                  {video.isFreeAccess ? (
                    <video
                      ref={videoRef}
                      style={styles.videoPlayer}
                      width="100%"
                      controls
                      src={signedUrl}
                      onLoadedMetadata={(e) => {
                        const duration = e.target.duration.toFixed(2);
                        setVideoDurations((prev) => ({
                          ...prev,
                          [key]: duration,
                        }));
                      }}
                    ></video>
                  ) : (
                    <>
                      {!signedVideoUrls[key] && (
                        <button
                          onClick={() =>
                            handlePlayPremiumVideo(
                              video.videoUrl,
                              moduleIndex,
                              videoIndex
                            )
                          }
                          style={styles.button}
                        >
                          Unlock Premium Video
                        </button>
                      )}
                      {signedVideoUrls[key] && (
                        <div style={{ marginTop: "10px" }}>
                          <video
                            ref={videoRef}
                            style={styles.videoPlayer}
                            width="100%"
                            controls
                            src={signedUrl}
                            onLoadedMetadata={(e) => {
                              const duration = e.target.duration.toFixed(2);
                              setVideoDurations((prev) => ({
                                ...prev,
                                [key]: duration,
                              }));
                            }}
                          ></video>
                          {videoDurations[key] && (
                            <p style={styles.durationText}>
                              Duration: {videoDurations[key]} sec
                            </p>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

const styles = {
  page: {
    padding: "40px",
    fontFamily: "Segoe UI, sans-serif",
    background: "#f4f6f8",
  },
  title: {
    fontSize: "36px",
    color: "#2c3e50",
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    color: "#6c7a89",
    marginBottom: "25px",
  },
  thumbnail: {
    width: "320px",
    borderRadius: "10px",
    marginBottom: "40px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  moduleBox: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "30px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },
  moduleTitle: {
    fontSize: "24px",
    color: "#34495e",
    marginBottom: "20px",
  },
  videoList: {
    listStyleType: "none",
    padding: 0,
  },
  videoItem: {
    marginBottom: "30px",
  },
  videoTitle: {
    fontSize: "16px",
    color: "#2c3e50",
  },
  videoPlayer: {
    borderRadius: "10px",
    marginTop: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  durationText: {
    marginTop: "5px",
    fontSize: "14px",
    color: "#888",
  },
  button: {
    marginTop: "10px",
    padding: "10px 18px",
    background: "#1abc9c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Single;
