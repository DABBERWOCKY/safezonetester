# Safe-zone source notes

First-party sources last checked October 8, 2026.

## Current first-party overlays

| Placement | Working frame | Clearances (top / right / bottom / left) | First-party source | Notes |
| --- | --- | --- | --- | --- |
| TikTok In-Feed | 1080 x 1920 | 240 / 300 / 660 / 120 px | [TikTok Ads in-feed specification](https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=en) | Measured from TikTok's linked standard left-to-right in-feed template. TikTok says the safe area varies with caption length, anchors, add-ons, device, and format. |
| Instagram / Facebook Reels | 1080 x 1920 | 269 / 65 / 672 / 65 px | [Meta Reels ads guidance](https://www.facebook.com/business/ads/facebook-instagram-reels-ads) | Corresponds to Meta's official checker proportions: approximately 14% top, 35% bottom, and 6% on each side. |
| Instagram Stories | 1080 x 1920 | 269 / 65 / 384 / 65 px | [Meta Instagram Stories Ads Guide](https://www.facebook.com/business/ads-guide/update/video/instagram-story) | Approximately 14% top, 20% bottom, and 6% on each side. |
| YouTube Shorts / vertical ads | 1080 x 1920 | 288 / 192 / 672 / 48 px | [Google Ads vertical-video safe zones](https://support.google.com/google-ads/answer/9128498?hl=en) | Pixel values follow Google's official 1080 x 1920 safe-zone diagram. |
| Instagram in-feed 4:5 | 1080 x 1350 | Full frame | [Instagram photo width and aspect ratios](https://help.instagram.com/1631821640426723) | Instagram publishes 4:5 as a supported in-feed ratio but does not publish an in-image UI exclusion for this placement, so the tool does not invent an unofficial inset. |

## Retained references

The original landscape YouTube / Performance Max and Broadcast HD image overlays remain available for continuity. They are labeled as existing or reference overlays in the interface rather than as newly verified first-party guidance.

## Cross-format review

Cross-format overlays calculate a centered crop from the uploaded asset without resizing or altering it. Dark gray marks content removed by the target aspect ratio, a platform-colored tint marks a published UI/interface exclusion inside the target frame, and a clear white-outlined region marks the usable safe area.

The Instagram / Facebook 4:5 feed preview has no additional colored UI exclusion because no first-party in-image exclusion is published for that placement. On a 1080 x 1920 source, its centered 1080 x 1350 crop removes 285 px from the top and 285 px from the bottom.

## Maintenance

Platform interfaces can vary by device, caption length, placement, and ad format. Re-check these first-party pages and any linked downloadable templates before changing the pixel values.
