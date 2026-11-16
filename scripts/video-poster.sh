#!/bin/sh
# Makes the poster image of the promo video from one of its frames.
#
#   scripts/video-poster.sh <video.mp4> [seconds]
#
# Pick a frame where the picture is still (not mid-fade). Writes
# public/media/promo/poster.webp, the path src/config/site.ts uses.
set -eu
video="$1"
at="${2:-10.8}"
ffmpeg -v error -y -ss "$at" -i "$video" -frames:v 1 -c:v libwebp -quality 80 public/media/promo/poster.webp
echo "public/media/promo/poster.webp from $video at ${at}s"
