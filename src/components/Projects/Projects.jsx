"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.scss";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "ShopSphere",
    // desc: "Full-stack e-commerce platform built with Next.js.",
    // desc: "A full-stack e-commerce application built with Next.js and Redux Toolkit supporting product browsing, cart management and secure Firebase authentication. Includes an admin dashboard with order tacking, fitlering and pagination",
    desc: "A modern e-commerce platform built with Next.js featuring product browsing, Redux-based cart management and Firebase authentication. Includes an admin dashboard for order management with search, filtering and pagination.",
    tech: ["Next.js", "Redux Toolkit", "Firebase", "SCSS"],
    featured: true,
    features: [
      "Admin dashboard with search and pagination",
      "Redux-based cart management",
      "Firebase authentication and Firestore orders"
    ],
    architecture: [
      "Next.js App Router",
      "Redux Toolkit global store",
      "Firebase Auth + Firestore"
    ],
    github: "https://github.com/venkatyashwanth/shop-sphere_2026",
    live: "https://shopsphere910.vercel.app/"
  },
  {
    id: 2,
    title: "YouTube Playlist Player",
    // desc: "Production-ready YouTube playlist player with persistent state and synchronized playback.",
    desc: "An advanced YoutTube playlist player built with Next.js and React featuring custom playback controls, playlist navigation and autoplay. Implements synchronized state management between the player and playlist components using React hooks and the YouTube IFrame API.",
    tech: ["Next.js", "React", "YouTube API"],
    featured: false,
    features: [
      "Custom play/pause controls",
      "Playlist navigation",
      "Persisted playback state"
    ],
    architecture: [
      "React hooks for player state",
      "YouTube IFrame API integration"
    ],
    github: "https://github.com/venkatyashwanth/yt_player",
    live: "https://yt-player910.netlify.app/"
  }
]


export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            closeModal={() => setSelectedProject(null)}
          />
        )}
        {/* <ProjectCard
          featured
          title="Advanced YouTube Playlist Player"
          desc="Production-ready YouTube playlist player with persistent state and synchronized playback."
          link="https://yt-player910.netlify.app/"
          github="https://github.com/yourusername/yt-player"
          highlights={[
            "Persistent playback time & volume across sessions",
            "Playlist state management synchronized across components",
          ]}
          stack={["Next.js", "React", "SCSS", "YouTube API"]}
        /> */}

        {/* <ProjectCard
          title="Weather Forecast Application"
          desc="Responsive weather application consuming third-party APIs with charts."
          link="https://forecastweather7091.netlify.app/"
          github="https://github.com/yourusername/weather-app"
          highlights={[
            "Real-time weather data with API error handling",
            "Responsive UI with charts and reusable components",
          ]}
          stack={["React", "REST API", "Charts", "Responsive UI"]}
        /> */}
      </div>
    </section>
  );
}
