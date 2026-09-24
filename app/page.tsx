"use client";

import { useMemo, useState } from "react";

type Category = "all" | "showcase" | "motion" | "demo";

const works = [
  {
    title: "Future Travel Project Film",
    description: "A group project film introducing a speculative travel device through an atmospheric, easy-to-follow narrative.",
    tags: ["Story edit", "Concept film", "Sound"],
    category: "showcase" as const,
    player: "embed" as const,
    src: "https://drive.google.com/file/d/17EY9V7d2bV6H1K_TVs3rafzlkZN6NSaU/preview",
    poster: "/projects/future-travel.webp",
    watchUrl: "https://drive.google.com/file/d/17EY9V7d2bV6H1K_TVs3rafzlkZN6NSaU/view?usp=sharing",
    orientation: "landscape" as const,
  },
  {
    title: "Emoji Camera Challenge",
    description: "A playful vertical edit built around quick visual reveals, emoji reactions and beat-led timing.",
    tags: ["Vertical", "Rhythm", "Social"],
    category: "motion" as const,
    player: "local" as const,
    src: "/editing/emoji-camera-challenge.mp4",
    poster: "/editing/emoji-camera-challenge.webp",
    watchUrl: "/editing/emoji-camera-challenge.mp4",
    orientation: "portrait" as const,
  },
  {
    title: "Colour Mix Transformation",
    description: "A compact transformation edit with a clear setup, reveal and character payoff.",
    tags: ["Transformation", "Pacing", "Social"],
    category: "motion" as const,
    player: "local" as const,
    src: "/editing/colour-mix-transformation-en.mp4",
    poster: "/editing/colour-mix-transformation-en.webp",
    watchUrl: "/editing/colour-mix-transformation-en.mp4",
    orientation: "portrait" as const,
  },
  {
    title: "Cat Costume Lineup",
    description: "A bright character montage using layered cut-outs, rhythmic repetition and playful type.",
    tags: ["Character edit", "Cut-outs", "Rhythm"],
    category: "motion" as const,
    player: "local" as const,
    src: "/editing/cat-costume-lineup.mp4",
    poster: "/editing/cat-costume-lineup.webp",
    watchUrl: "/editing/cat-costume-lineup.mp4",
    orientation: "portrait" as const,
  },
  {
    title: "Winter Headphones",
    description: "A soft winter character edit built from pose changes, cut-out compositing and music-led timing.",
    tags: ["Compositing", "Music", "Character"],
    category: "motion" as const,
    player: "local" as const,
    src: "/editing/winter-headphones.mp4",
    poster: "/editing/winter-headphones.webp",
    watchUrl: "/editing/winter-headphones.mp4",
    orientation: "portrait" as const,
  },
  {
    title: "Lunar New Year Greeting",
    description: "A festive vertical edit combining character performance, hand-drawn details and concise captions.",
    tags: ["Seasonal", "Typography", "Vertical"],
    category: "motion" as const,
    player: "local" as const,
    src: "/editing/lunar-new-year.mp4",
    poster: "/editing/lunar-new-year.webp",
    watchUrl: "/editing/lunar-new-year.mp4",
    orientation: "portrait" as const,
  },
  {
    title: "Flight-Day Character Cut",
    description: "A fast graphic comedy edit using animated type, cut-out characters and an airplane reveal.",
    tags: ["Graphic edit", "Comedy", "Timing"],
    category: "motion" as const,
    player: "local" as const,
    src: "/editing/flight-character-cut.mp4",
    poster: "/editing/flight-character-cut.webp",
    watchUrl: "/editing/flight-character-cut.mp4",
    orientation: "landscape" as const,
  },
  {
    title: "Chunky & Plumpy",
    description: "A dual-character montage shaped through split colour, graphic repetition and beat-matched transitions.",
    tags: ["Motion graphics", "Beat edit", "Montage"],
    category: "motion" as const,
    player: "local" as const,
    src: "/editing/chunky-plumpy-duo.mp4",
    poster: "/editing/chunky-plumpy-duo.webp",
    watchUrl: "/editing/chunky-plumpy-duo.mp4",
    orientation: "landscape" as const,
  },
  {
    title: "Pigeon Pop",
    description: "A high-energy character remix using scale changes, repeated motion and a bold graphic system.",
    tags: ["Remix", "Motion graphics", "Energy"],
    category: "motion" as const,
    player: "local" as const,
    src: "/editing/pigeon-pop.mp4",
    poster: "/editing/pigeon-pop.webp",
    watchUrl: "/editing/pigeon-pop.mp4",
    orientation: "portrait" as const,
  },
  {
    title: "My Future Formula",
    description: "An illustrated screen edit combining character art, kinetic typography and music-led scene changes.",
    tags: ["Illustration", "Kinetic type", "Music edit"],
    category: "motion" as const,
    player: "local" as const,
    src: "/editing/my-future-formula.mp4",
    poster: "/editing/my-future-formula.webp",
    watchUrl: "/editing/my-future-formula.mp4",
    orientation: "landscape" as const,
  },
  {
    title: "Bake Cake Shakedown",
    description: "A screen-led game demo using pacing, titles and interface footage to explain the tabletop system clearly.",
    tags: ["Game demo", "Titles", "Explainer"],
    category: "demo" as const,
    player: "embed" as const,
    src: "https://www.youtube-nocookie.com/embed/D4blvxXWS-c?rel=0",
    poster: "/projects/bake-cake.webp",
    watchUrl: "https://youtu.be/D4blvxXWS-c",
    orientation: "landscape" as const,
  },
];

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "showcase", label: "Project showcase" },
  { id: "motion", label: "Motion & short-form" },
  { id: "demo", label: "Demo" },
];

export default function EditingPortfolio() {
  const [category, setCategory] = useState<Category>("all");
  const [active, setActive] = useState(0);
  const selected = works[active];
  const filtered = useMemo(
    () => works.map((work, index) => ({ work, index })).filter(({ work }) => category === "all" || work.category === category),
    [category]
  );

  const chooseCategory = (next: Category) => {
    setCategory(next);
    if (next !== "all" && selected.category !== next) {
      const first = works.findIndex((work) => work.category === next);
      if (first >= 0) setActive(first);
    }
  };

  return (
    <main className="editing-page">
      <div className="editing-page-sheet">
        <nav className="editing-page-nav" aria-label="Video portfolio navigation">
          <span className="wordmark">Stephanie</span>
          <span>VIDEO EDITING PORTFOLIO</span>
          <div className="editing-page-nav-actions">
            <a href="mailto:stephanieyl7@outlook.com">Contact</a>
          </div>
        </nav>

        <header className="editing-page-intro">
          <div>
            <p className="editing-page-kicker"><i /> AVAILABLE FOR PART-TIME EDITING WORK</p>
            <h1>Stories, shaped<br /><em>frame by frame.</em></h1>
          </div>
          <p>A focused selection of project films, motion-led short-form edits and clear demos. I work across pacing, titles, sound, compositing and final delivery.</p>
        </header>

        <section className="editing-player-layout" aria-label="Video player and playlist">
          <div className="editing-main-player">
            <div className="editing-window-bar">
              <div><i /><i /><i /></div>
              <span>NOW PLAYING · {String(active + 1).padStart(2, "0")}</span>
              <b>FIT / FULL FRAME</b>
            </div>
            <div className={`editing-stage editing-stage-${selected.orientation}`}>
              {selected.player === "local" ? (
                selected.orientation === "portrait" ? (
                  <div className="portrait-frame">
                    <video key={selected.src} src={selected.src} poster={selected.poster} controls playsInline preload="metadata" aria-label={`${selected.title} video`} />
                  </div>
                ) : (
                  <video className="landscape-video" key={selected.src} src={selected.src} poster={selected.poster} controls playsInline preload="metadata" aria-label={`${selected.title} video`} />
                )
              ) : (
                <iframe key={selected.src} src={selected.src} title={selected.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              )}
            </div>
            <div className="editing-now-playing" aria-live="polite">
              <div><small>SELECTED WORK</small><h2>{selected.title}</h2></div>
              <p>{selected.description}</p>
              <div className="editing-tags">
                {selected.tags.map((tag) => <span key={tag}>{tag}</span>)}
                <a href={selected.watchUrl} target="_blank" rel="noreferrer">Open video ↗</a>
              </div>
            </div>
          </div>

          <aside className="editing-queue">
            <div className="editing-queue-title"><span>PLAYLIST</span><b>{filtered.length} VIDEOS</b></div>
            <div className="editing-category-tabs" role="tablist" aria-label="Video categories">
              {categories.map((item) => (
                <button key={item.id} className={category === item.id ? "active" : ""} onClick={() => chooseCategory(item.id)} role="tab" aria-selected={category === item.id}>
                  {item.label}
                </button>
              ))}
            </div>
            <div className="editing-queue-list" role="tabpanel">
              {filtered.map(({ work, index }, position) => (
                <button key={work.title} className={active === index ? "active" : ""} onClick={() => setActive(index)} aria-current={active === index ? "true" : undefined}>
                  <span className="editing-thumb"><img src={work.poster} alt="" /><i>{active === index ? "●" : "▶"}</i></span>
                  <span className="editing-queue-copy">
                    <small>{String(position + 1).padStart(2, "0")} · {categories.find((item) => item.id === work.category)?.label}</small>
                    <strong>{work.title}</strong>
                    <em>{work.tags.slice(0, 2).join(" · ")}</em>
                  </span>
                </button>
              ))}
            </div>
          </aside>
        </section>

        <section className="editing-service-strip" aria-label="Editing capabilities">
          <p>WHAT I CAN DO</p>
          {[["01", "Story & pacing"], ["02", "Titles & captions"], ["03", "Sound & music"], ["04", "Motion & compositing"]].map((item) => (
            <div key={item[0]}><span>{item[0]}</span><strong>{item[1]}</strong></div>
          ))}
        </section>

        <footer className="editing-page-footer">
          <span>STEPHANIE LIANG · MELBOURNE</span>
          <a href="mailto:stephanieyl7@outlook.com">stephanieyl7@outlook.com ↗</a>
        </footer>
      </div>
    </main>
  );
}
