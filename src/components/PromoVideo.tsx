import { existsSync } from "node:fs";
import { join } from "node:path";
import { promoVideo } from "@/config/site";
import type { Copy } from "@/content/en";
import type { Lang } from "@/lib/i18n";

// The browser's own player: no script, nothing loaded until play except the
// poster and the video's metadata. No autoplay, so reduced motion is respected
// and sound is the viewer's choice. Swapping the video is a file swap: see
// promoVideo in src/config/site.ts.
//
// The video file is not committed until it is final, so a build made from the
// repository (the image, GitHub Pages) has none. Rather than a player that
// cannot play, the page then shows the poster and says the video is coming.

/** Whether the build has a video to play: a URL elsewhere, or the file in public/. */
function hasVideo(): boolean {
  if (/^https?:\/\//.test(promoVideo.src)) return true;
  return existsSync(join(process.cwd(), "public", promoVideo.src));
}
export function PromoVideo({ lang, copy }: { lang: Lang; copy: Copy["video"] }) {
  const other: Lang = lang === "en" ? "fr" : "en";
  const label = (l: Lang) => (l === "en" ? "English" : "Français");
  if (!hasVideo()) {
    return (
      <figure className="video-block" style={{ margin: "24px auto 0" }}>
        <div className="video-frame">
          <img src={promoVideo.poster} alt="" width={promoVideo.width} height={promoVideo.height} />
          <p className="video-soon">{copy.soon}</p>
        </div>
        <figcaption className="video-caption">
          <span>{copy.title}</span>
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className="video-block" style={{ margin: "24px auto 0" }}>
      <div className="video-frame">
        <video
          controls
          preload="metadata"
          playsInline
          poster={promoVideo.poster}
          width={promoVideo.width}
          height={promoVideo.height}
          aria-label={copy.title}
        >
          <source src={promoVideo.src} type="video/mp4" />
          <track kind="captions" src={promoVideo.captions[lang]} srcLang={lang} label={label(lang)} default />
          <track kind="captions" src={promoVideo.captions[other]} srcLang={other} label={label(other)} />
          <p>
            {copy.fallback} <a href={promoVideo.src}>{copy.download}</a>
          </p>
        </video>
      </div>
      <figcaption className="video-caption">
        <span>{copy.title}</span>
        <span>{copy.note}</span>
      </figcaption>
    </figure>
  );
}
