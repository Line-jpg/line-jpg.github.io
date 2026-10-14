import { useState } from "react";
import styles from "./CaseMedia.module.css";

function MediaItem({ item, eager = false }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={styles.figure}>
      {item.src && !failed ? (
        item.type === "video" ? (
          <video controls playsInline preload="metadata" aria-label={item.title}>
            <source src={item.src} type="video/mp4" />
            Din browser understøtter ikke video.{" "}
            <a href={item.src}>Åbn videoen</a>
          </video>
        ) : (
          <img
            src={item.src}
            alt={item.alt || item.title}
            loading={eager ? "eager" : "lazy"}
            onError={() => setFailed(true)}
          />
        )
      ) : (
        <div className={styles.placeholder}>
          <span aria-hidden="true">↗</span>
          <strong>{item.title}</strong>
          <p>
            {failed
              ? "Billedet kunne ikke indlæses."
              : "Plads til dit projektbillede"}
          </p>
        </div>
      )}
      {item.caption && <figcaption>{item.caption}</figcaption>}
    </figure>
  );
}

// Billeder i en story-sektion: "single", "comparison" (side om side) eller "carousel".
function CaseMedia({ media }) {
  const [index, setIndex] = useState(0);
  const items = media.items || [];
  if (!items.length) return null;

  const current = index % items.length;
  const carousel = media.layout === "carousel" && items.length > 1;

  if (!carousel) {
    return (
      <div
        className={`${styles.media} ${media.layout === "comparison" ? styles.comparison : ""}`}
      >
        {items.map((item, i) => (
          <MediaItem key={`${item.title}-${i}`} item={item} />
        ))}
      </div>
    );
  }

  const move = (direction) =>
    setIndex((value) => (value + direction + items.length) % items.length);

  return (
    <section
      className={styles.media}
      aria-roledescription="karrusel"
      aria-label={media.label || "Billeder fra projektet"}
    >
      <div
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        <div
          role="group"
          aria-roledescription="slide"
          aria-label={`${current + 1} af ${items.length}`}
        >
          <MediaItem key={current} item={items[current]} eager />
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Forrige billede"
          >
            ←
          </button>
          <p aria-live="polite" aria-atomic="true">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")} · {items[current].title}
          </p>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Næste billede"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default CaseMedia;
