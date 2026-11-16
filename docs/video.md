# The promo video

The current video is a placeholder: the owner will replace it. It is **not committed** (`public/media/promo/*.mp4` is in `.gitignore`) and must not be published until the owner says the final version may be.

## What the page needs

All in `public/media/promo/`, named in `promoVideo` in `src/config/site.ts`:

| File | What |
| --- | --- |
| `monitorflow-promo.mp4` | The video, H.264 and AAC, 1920 x 1080 |
| `poster.webp` | The picture shown before play: `scripts/video-poster.sh <video> [seconds]` |
| `captions.en.vtt`, `captions.fr.vtt` | Captions, timed to this video |

The page uses the browser's own player: no autoplay, `preload="metadata"`, the poster, both caption tracks, and a download link as a fallback. No copy on the page depends on a scene, so a new video needs no change to the page.

## Swapping in the final video

1. Put it at `public/media/promo/monitorflow-promo.mp4` (same name), or serve it from elsewhere and set `NEXT_PUBLIC_VIDEO_URL` (repository variable `VIDEO_URL`), for example a release asset of the product repository.
2. `scripts/video-poster.sh public/media/promo/monitorflow-promo.mp4 <seconds>`, with a still frame (not mid-fade).
3. Retime `captions.en.vtt` and `captions.fr.vtt`. They hold the on-screen lines and `[Music]`; if the final video has a voice, they must hold what is said.
4. If the width or height changes, update `promoVideo` in `src/config/site.ts`.
5. Once the owner approves publishing, remove the `*.mp4` line from `.gitignore` and commit the file (or keep it as a release asset).

## Check before featuring it

Against what the product does today (README of the product repository):

- **"RHEL" in the update scene** (the wave labels and "Package mirrors for Debian, Ubuntu and RHEL"). The mirrors cover Rocky Linux and AlmaLinux, the RHEL family. Say "Rocky/Alma" or "RHEL family" in the video.
- The AI scene shows a button "Approved". The product's button reads **"Approve and run"**; showing it before the click would match the site.
- Everything else (outbound-only agents with mutual TLS, the five notification channels, updates in waves with Windows and winget, Flatpak and Snap, customers kept apart, the one-line install, "Free and open source") matches release 0.6.0.
