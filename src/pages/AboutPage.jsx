import { useRef, useState } from "react";

const INITIAL_PHOTOS = [
  {
    id: 1,
    src: "/scrap1.svg",
    xPercent: 28,
    yPercent: 20,
    width: 46,
    rotate: 2,
  },
  {
    id: 2,
    src: "/scrap2.svg",
    xPercent: 20,
    yPercent: -12,
    width: 44,
    rotate: 3,
  },
  {
    id: 3,
    src: "/scrap3.svg",
    xPercent: 66,
    yPercent: -6,
    width: 41,
    rotate: 6,
  },
  {
    id: 4,
    src: "/scrap4.svg",
    xPercent: 4,
    yPercent: 28,
    width: 28,
    rotate: -8,
  },
  {
    id: 5,
    src: "/scrap5.svg",
    xPercent: -10,
    yPercent: -4,
    width: 41,
    rotate: -5,
  },
  {
    id: 6,
    src: "/scrap6.svg",
    xPercent: 78,
    yPercent: 14,
    width: 37,
    rotate: 7,
  },
  {
    id: 7,
    src: "/scrap7.svg",
    xPercent: -14,
    yPercent: 44,
    width: 39,
    rotate: 5,
  },
  {
    id: 8,
    src: "/scrap8.svg",
    xPercent: 70,
    yPercent: 46,
    width: 37,
    rotate: -4,
  },
  {
    id: 9,
    src: "/scrap9.svg",
    xPercent: 4,
    yPercent: 70.6,
    width: 32,
    rotate: -3,
  },
  {
    id: 10,
    src: "/scrap10.svg",
    xPercent: 74,
    yPercent: 72.6,
    width: 32,
    rotate: 4,
  },
  {
    id: 11,
    src: "/scrap11.svg",
    xPercent: 30,
    yPercent: 72,
    width: 35,
    rotate: -2,
  },
];

function AboutPage() {
  const containerRef = useRef(null);
  const dragInfo = useRef({ id: null, offsetX: 0, offsetY: 0 });
  const topZ = useRef(INITIAL_PHOTOS.length);

  const [photos, setPhotos] = useState(() =>
    INITIAL_PHOTOS.map((photo) => ({
      ...photo,
      z: photo.id === 1 ? 11 : photo.id === 11 ? 1 : photo.id,
    })),
  );

  const handlePointerDown = (event, id) => {
    const image = event.currentTarget.getBoundingClientRect();

    dragInfo.current = {
      id,
      offsetX: event.clientX - image.left,
      offsetY: event.clientY - image.top,
    };

    topZ.current += 1;
    const newZ = topZ.current;
    setPhotos((prev) =>
      prev.map((photo) => (photo.id === id ? { ...photo, z: newZ } : photo)),
    );

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (dragInfo.current.id === null) return;

    const container = containerRef.current.getBoundingClientRect();
    const x = event.clientX - container.left - dragInfo.current.offsetX;
    const y = event.clientY - container.top - dragInfo.current.offsetY;
    const xPercent = (x / container.width) * 100;
    const yPercent = (y / container.height) * 100;
    const id = dragInfo.current.id;

    setPhotos((prev) =>
      prev.map((photo) =>
        photo.id === id ? { ...photo, xPercent, yPercent } : photo,
      ),
    );
  };

  const handlePointerUp = (event) => {
    dragInfo.current.id = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="page about-page">
      <div className="about-layout">
        <div>
          <p className="eyebrow">Om mig</p>
          <h1>Hvem er jeg?</h1>
          <p className="lead">
            Jeg er multimediedesign-studerende med stor interesse for både
            design og programmering. Jeg elsker at stå med et problem, der
            kræver en kreativ og gennemtænkt løsning, og jeg motiveres af at
            omsætte idéer til digitale løsninger, der både ser godt ud og
            fungerer i praksis.
          </p>
          <p className="lead">
            Jeg trives med struktur og detaljer og går gerne det ekstra skridt
            for at få et projekt helt på plads. Jeg arbejder godt sammen med
            andre og sætter pris på sparring, men tager også gerne selvstændigt
            ansvar. Lige nu udvikler jeg især mine kompetencer inden for
            kodning, branding og visuel identitet. I min praktik ønsker jeg
            særligt at få en større forståelse for fullstack-udvikling og lære,
            hvordan frontend og backend spiller sammen i en komplet digital
            løsning.
          </p>
          <p className="lead">
            Min fritid består som oftest på computernørderi eller at tegne. Jeg
            er nysgerrig, løsningsorienteret og lærer bedst ved at prøve tingene
            af i praksis.
          </p>
        </div>

        <div className="photo-collage" ref={containerRef}>
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.src}
              alt=""
              className="photo-collage-item"
              draggable={false}
              style={{
                left: `${photo.xPercent}%`,
                top: `${photo.yPercent}%`,
                width: `${photo.width}%`,
                transform: `rotate(${photo.rotate}deg)`,
                zIndex: photo.z,
              }}
              onPointerDown={(event) => handlePointerDown(event, photo.id)}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
