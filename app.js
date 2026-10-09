const SOURCES = {
  metaReels: "https://www.facebook.com/business/ads/facebook-instagram-reels-ads",
  metaStories: "https://www.facebook.com/business/ads-guide/update/video/instagram-story",
  tiktok: "https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=en",
  youtube: "https://support.google.com/google-ads/answer/9128498?hl=en",
  instagramFeed: "https://help.instagram.com/1631821640426723"
};

const GROUPS = [
  { id: "landscape", title: "Landscape", detail: "16:9 · 1920 × 1080" },
  { id: "vertical", title: "Full-screen vertical", detail: "9:16 · 1080 × 1920" },
  { id: "portrait", title: "Portrait feed", detail: "4:5 · 1080 × 1350" }
];

const PRESETS = [
  {
    id: "youtube-ads-16x9",
    group: "landscape",
    label: "YouTube / PMax",
    ratio: 16 / 9,
    frame: [1920, 1080],
    image: "youtube_pmax_1920x1080.png",
    guidanceStatus: "Existing platform-derived overlay",
    note: "Landscape YouTube and Performance Max reference for important branding, supers and product detail.",
    source: SOURCES.youtube,
    sourceLabel: "Google Ads guidance"
  },
  {
    id: "broadcast-16x9",
    group: "landscape",
    label: "Broadcast HD",
    ratio: 16 / 9,
    frame: [1920, 1080],
    image: "broadcast_safe_zones_16x9.png",
    guidanceStatus: "Reference overlay",
    note: "Traditional 16:9 title- and action-safe reference for broadcast delivery.",
    sourceLabel: "Broadcast reference overlay"
  },
  {
    id: "tiktok-in-feed",
    group: "vertical",
    label: "TikTok In-Feed",
    ratio: 9 / 16,
    frame: [1080, 1920],
    margins: { top: 240, right: 300, bottom: 660, left: 120 },
    color: "#00f2ea",
    guidanceStatus: "Official source checked",
    note: "Measured from TikTok's official standard LTR in-feed template. TikTok says the safe zone changes with caption length, anchors and other add-ons.",
    source: SOURCES.tiktok,
    sourceLabel: "TikTok Ads in-feed specification · updated June 2026"
  },
  {
    id: "meta-reels",
    group: "vertical",
    label: "Instagram / Facebook Reels",
    ratio: 9 / 16,
    frame: [1080, 1920],
    margins: { top: 269, right: 65, bottom: 672, left: 65 },
    color: "#ff4f9a",
    guidanceStatus: "Official source checked",
    note: "Based on Meta's official current Reels checker: keep key creative clear of roughly 14% at top, 35% at bottom and 6% on each side.",
    source: SOURCES.metaReels,
    sourceLabel: "Meta Reels guidance and official safe-zone checker"
  },
  {
    id: "instagram-stories",
    group: "vertical",
    label: "Instagram Stories",
    ratio: 9 / 16,
    frame: [1080, 1920],
    margins: { top: 269, right: 65, bottom: 384, left: 65 },
    color: "#ffb13b",
    guidanceStatus: "Official source checked",
    note: "Meta's Stories-safe treatment reserves approximately 14% at top, 20% at bottom and 6% at each side for interface and CTA treatments.",
    source: SOURCES.metaStories,
    sourceLabel: "Meta Ads Guide · Instagram Stories"
  },
  {
    id: "youtube-shorts",
    group: "vertical",
    label: "YouTube Shorts / Vertical Ads",
    ratio: 9 / 16,
    frame: [1080, 1920],
    margins: { top: 288, right: 192, bottom: 672, left: 48 },
    color: "#ff3838",
    guidanceStatus: "Official source checked",
    note: "Google's official 1080 × 1920 vertical-video diagram keeps key elements clear of overlays, calls to action and buttons across YouTube inventory.",
    source: SOURCES.youtube,
    sourceLabel: "Google Ads vertical-video safe zones"
  },
  {
    id: "instagram-feed-4x5",
    group: "portrait",
    label: "Instagram / Facebook In-Feed 4:5",
    ratio: 4 / 5,
    frame: [1080, 1350],
    fullFrame: true,
    color: "#bf77ff",
    guidanceStatus: "Official source checked",
    note: "Instagram publishes the supported 4:5 in-feed frame, but does not publish an in-image UI safe-zone margin for this placement. The complete 1080 × 1350 frame is shown as usable rather than inventing an unofficial inset.",
    source: SOURCES.instagramFeed,
    sourceLabel: "Instagram Help Center · photo width and aspect ratios"
  }
];

const CROP_PRESETS = [
  {
    id: "crop-tiktok-9x16",
    kind: "crop",
    label: "TikTok 9:16 crop + safe zone",
    detail: "TikTok In-Feed",
    ratio: 9 / 16,
    targetFrame: [1080, 1920],
    margins: { top: 240, right: 300, bottom: 660, left: 120 },
    color: "#00f2ea",
    guidanceStatus: "Crop + official safe zone",
    note: "Dark gray is cropped out; the teal tint is TikTok's interface-exclusion area inside the centered 9:16 frame; the clear outlined region is safe.",
    source: SOURCES.tiktok,
    sourceLabel: "TikTok Ads in-feed specification · updated June 2026"
  },
  {
    id: "crop-reels-9x16",
    kind: "crop",
    label: "Reels 9:16 crop + safe zone",
    detail: "Instagram / Facebook Reels",
    ratio: 9 / 16,
    targetFrame: [1080, 1920],
    margins: { top: 269, right: 65, bottom: 672, left: 65 },
    color: "#ff4f9a",
    guidanceStatus: "Crop + official safe zone",
    note: "Dark gray is cropped out; the pink tint is the Reels interface-exclusion area inside the centered 9:16 frame; the clear outlined region is safe.",
    source: SOURCES.metaReels,
    sourceLabel: "Meta Reels guidance and official safe-zone checker"
  },
  {
    id: "crop-stories-9x16",
    kind: "crop",
    label: "Stories 9:16 crop + safe zone",
    detail: "Instagram Stories",
    ratio: 9 / 16,
    targetFrame: [1080, 1920],
    margins: { top: 269, right: 65, bottom: 384, left: 65 },
    color: "#ffb13b",
    guidanceStatus: "Crop + official safe zone",
    note: "Dark gray is cropped out; the amber tint is the Stories interface-exclusion area inside the centered 9:16 frame; the clear outlined region is safe.",
    source: SOURCES.metaStories,
    sourceLabel: "Meta Ads Guide · Instagram Stories"
  },
  {
    id: "crop-youtube-9x16",
    kind: "crop",
    label: "YouTube 9:16 crop + safe zone",
    detail: "Shorts / vertical ads",
    ratio: 9 / 16,
    targetFrame: [1080, 1920],
    margins: { top: 288, right: 192, bottom: 672, left: 48 },
    color: "#ff3838",
    guidanceStatus: "Crop + official safe zone",
    note: "Dark gray is cropped out; the red tint is Google's interface-exclusion area inside the centered 9:16 frame; the clear outlined region is safe.",
    source: SOURCES.youtube,
    sourceLabel: "Google Ads vertical-video safe zones"
  },
  {
    id: "crop-feed-4x5",
    kind: "crop",
    label: "IG / FB In-Feed 4:5 crop",
    detail: "Instagram / Facebook Feed",
    ratio: 4 / 5,
    color: "#bf77ff",
    guidanceStatus: "Cross-format preview",
    note: "Dark gray is cropped out. The remaining clear 4:5 window is the full usable feed frame because Meta does not publish an additional in-image UI exclusion for this placement.",
    source: SOURCES.instagramFeed,
    sourceLabel: "Instagram Help Center · photo width and aspect ratios"
  },
  {
    id: "crop-square-1x1",
    kind: "crop",
    label: "Square 1:1 crop",
    detail: "Instagram / Facebook Feed",
    ratio: 1,
    color: "#f2c94c",
    guidanceStatus: "Cross-format preview",
    note: "Dark gray is cropped out. The remaining clear square is the centered output frame; no platform-specific UI exclusion is applied.",
    sourceLabel: "Calculated centered crop preview"
  },
  {
    id: "crop-landscape-16x9",
    kind: "crop",
    label: "Landscape 16:9 crop",
    detail: "YouTube / landscape video",
    ratio: 16 / 9,
    color: "#4e9bff",
    guidanceStatus: "Cross-format preview",
    note: "Dark gray is cropped out. The remaining clear 16:9 window is the centered landscape output frame; no platform-specific UI exclusion is applied.",
    sourceLabel: "Calculated centered crop preview"
  }
];

const PLATFORM_PREVIEWS = [
  { id: "context-tiktok", label: "TikTok In-Feed", detail: "For You feed · 9:16", platform: "tiktok", ratio: 9 / 16, guide: "crop-tiktok-9x16", note: "Typical For You feed controls, caption stack and CTA. TikTok notes that captions and interactive add-ons can reduce the safe area." },
  { id: "context-instagram-reels", label: "Instagram Reels", detail: "Reels ad · 9:16", platform: "instagram-reels", ratio: 9 / 16, guide: "crop-reels-9x16", note: "Representative Instagram Reels UI with the action rail, identity, caption and sponsored CTA treatment." },
  { id: "context-facebook-reels", label: "Facebook Reels", detail: "Reels ad · 9:16", platform: "facebook-reels", ratio: 9 / 16, guide: "crop-reels-9x16", note: "Representative Facebook Reels UI. Meta combines Facebook and Instagram in its Reels safe-zone guidance, but their surrounding chrome differs." },
  { id: "context-instagram-stories", label: "Instagram Stories", detail: "Story ad · 9:16", platform: "stories", ratio: 9 / 16, guide: "crop-stories-9x16", note: "Typical Story progress, account header, overflow control and bottom CTA treatment." },
  { id: "context-youtube-shorts", label: "YouTube Shorts", detail: "Shorts ad · 9:16", platform: "shorts", ratio: 9 / 16, guide: "crop-youtube-9x16", note: "Representative Shorts action rail, channel/caption stack and mobile CTA card. Google notes that overlays differ by campaign and screen." },
  { id: "context-instagram-feed", label: "Instagram Feed", detail: "Portrait post · 4:5", platform: "instagram-feed", ratio: 4 / 5, guide: "crop-feed-4x5", note: "The full 4:5 image is visible. Identity and actions sit outside the media frame, which is why no extra in-image safe inset is shown." },
  { id: "context-facebook-feed", label: "Facebook Feed", detail: "Portrait post · 4:5", platform: "facebook-feed", ratio: 4 / 5, guide: "crop-feed-4x5", note: "A representative Facebook feed post with the 4:5 media framed by post header and engagement controls." },
  { id: "context-youtube-watch", label: "YouTube Video", detail: "Watch page · 16:9", platform: "youtube-watch", ratio: 16 / 9, guide: null, note: "Representative mobile YouTube watch context. Actual ad controls and CTAs depend on campaign type and device." }
];

const elements = {
  fileInput: document.getElementById("file-input"),
  dropZone: document.getElementById("drop-zone"),
  previewWrap: document.getElementById("preview-wrap"),
  previewImage: document.getElementById("preview-image"),
  previewVideo: document.getElementById("preview-video"),
  overlayContainer: document.getElementById("overlay-container"),
  customControls: document.getElementById("custom-controls"),
  playPauseBtn: document.getElementById("play-pause-btn"),
  seekBar: document.getElementById("seek-bar"),
  timeDisplay: document.getElementById("time-display"),
  assetMeta: document.getElementById("asset-meta"),
  placementGroups: document.getElementById("placement-groups"),
  placementStatus: document.getElementById("placement-status"),
  crossFormatControls: document.getElementById("cross-format-controls"),
  crossFormatStatus: document.getElementById("cross-format-status"),
  guidancePanel: document.getElementById("guidance-panel"),
  guidanceList: document.getElementById("guidance-list"),
  clearBtn: document.getElementById("clear-btn"),
  exportBtn: document.getElementById("export-btn"),
  platformPreviewPanel: document.getElementById("platform-preview-panel"),
  platformPreviewControls: document.getElementById("platform-preview-controls"),
  platformPreviewCanvas: document.getElementById("platform-preview-canvas"),
  contextGuideToggle: document.getElementById("context-guide-toggle"),
  contextPreviewLabel: document.getElementById("context-preview-label"),
  contextPreviewNote: document.getElementById("context-preview-note"),
  exportContextBtn: document.getElementById("export-context-btn"),
  contextVideoControls: document.getElementById("context-video-controls"),
  contextPlayPauseBtn: document.getElementById("context-play-pause-btn"),
  contextCanvasPlayBtn: document.getElementById("context-canvas-play-btn"),
  contextSeekBar: document.getElementById("context-seek-bar"),
  contextTimeDisplay: document.getElementById("context-time-display")
};

let activeObjectUrl = null;
let currentAsset = null;
const activePresets = new Set();
const presetButtons = new Map();
const cropButtons = new Map();
const contextButtons = new Map();
let activeContextId = PLATFORM_PREVIEWS[0].id;
let contextAnimationFrame = null;

buildPlacementControls();
buildCropControls();
buildPlatformPreviewControls();
updatePlacementAvailability();

elements.dropZone.addEventListener("click", () => elements.fileInput.click());
elements.fileInput.addEventListener("change", () => {
  if (elements.fileInput.files[0]) handleFile(elements.fileInput.files[0]);
});

["dragenter", "dragover"].forEach((eventName) => {
  elements.dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    elements.dropZone.classList.add("is-dragging");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  elements.dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    elements.dropZone.classList.remove("is-dragging");
  });
});

elements.dropZone.addEventListener("drop", (event) => {
  const file = event.dataTransfer.files[0];
  if (file) handleFile(file);
});

elements.playPauseBtn.addEventListener("click", togglePlayPause);
elements.previewVideo.addEventListener("click", togglePlayPause);
elements.previewVideo.addEventListener("timeupdate", updateTimeDisplay);
elements.previewVideo.addEventListener("ended", updatePlayButton);
elements.seekBar.addEventListener("input", () => {
  if (Number.isFinite(elements.previewVideo.duration)) {
    elements.previewVideo.currentTime = (Number(elements.seekBar.value) / 100) * elements.previewVideo.duration;
  }
});

elements.clearBtn.addEventListener("click", clearOverlays);
elements.exportBtn.addEventListener("click", exportScreenshot);
elements.contextGuideToggle.addEventListener("change", renderPlatformPreview);
elements.exportContextBtn.addEventListener("click", exportPlatformPreview);
elements.contextPlayPauseBtn.addEventListener("click", togglePlayPause);
elements.contextCanvasPlayBtn.addEventListener("click", togglePlayPause);
elements.platformPreviewCanvas.addEventListener("click", () => {
  if (currentAsset?.type === "Video") togglePlayPause();
});
elements.contextSeekBar.addEventListener("input", () => {
  if (Number.isFinite(elements.previewVideo.duration)) {
    elements.previewVideo.currentTime = (Number(elements.contextSeekBar.value) / 100) * elements.previewVideo.duration;
    renderPlatformPreview();
  }
});

window.addEventListener("beforeunload", () => {
  if (activeObjectUrl) URL.revokeObjectURL(activeObjectUrl);
  if (contextAnimationFrame) cancelAnimationFrame(contextAnimationFrame);
});

function buildPlacementControls() {
  GROUPS.forEach((group) => {
    const section = document.createElement("section");
    section.className = "placement-group";
    section.innerHTML = `<h3>${group.title}</h3><p>${group.detail}</p>`;

    const buttonList = document.createElement("div");
    buttonList.className = "placement-button-list";

    PRESETS.filter((preset) => preset.group === group.id).forEach((preset) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "overlay-btn";
      button.dataset.preset = preset.id;
      button.textContent = preset.label;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => toggleOverlay(preset.id));
      presetButtons.set(preset.id, button);
      buttonList.appendChild(button);
    });

    section.appendChild(buttonList);
    elements.placementGroups.appendChild(section);
  });
}

function buildCropControls() {
  CROP_PRESETS.forEach((preset) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "overlay-btn crop-btn";
    button.dataset.preset = preset.id;
    button.innerHTML = `<span>${preset.label}<small>${preset.detail}</small></span>`;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => toggleOverlay(preset.id));
    cropButtons.set(preset.id, button);
    elements.crossFormatControls.appendChild(button);
  });
}

function buildPlatformPreviewControls() {
  PLATFORM_PREVIEWS.forEach((preview) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "overlay-btn";
    button.innerHTML = `<span>${preview.label}<small>${preview.detail}</small></span>`;
    button.setAttribute("aria-pressed", String(preview.id === activeContextId));
    button.classList.toggle("active", preview.id === activeContextId);
    button.addEventListener("click", () => selectPlatformPreview(preview.id));
    contextButtons.set(preview.id, button);
    elements.platformPreviewControls.appendChild(button);
  });
}

function handleFile(file) {
  if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
    setStatus("Choose an image or video file.", true);
    return;
  }

  clearOverlays();
  currentAsset = null;
  elements.platformPreviewPanel.hidden = true;
  elements.exportBtn.disabled = true;
  updatePlacementAvailability();

  if (activeObjectUrl) URL.revokeObjectURL(activeObjectUrl);
  activeObjectUrl = URL.createObjectURL(file);

  if (file.type.startsWith("image/")) {
    elements.previewVideo.pause();
    elements.previewVideo.removeAttribute("src");
    elements.previewVideo.hidden = true;
    elements.customControls.hidden = true;
    elements.contextVideoControls.hidden = true;
    elements.contextCanvasPlayBtn.hidden = true;
    elements.previewImage.hidden = false;
    elements.previewImage.src = activeObjectUrl;
    elements.previewImage.onload = () => {
      setAsset(file, elements.previewImage.naturalWidth, elements.previewImage.naturalHeight, "Image");
    };
  } else {
    elements.previewImage.removeAttribute("src");
    elements.previewImage.hidden = true;
    elements.previewVideo.hidden = false;
    elements.previewVideo.src = activeObjectUrl;
    elements.previewVideo.load();
    elements.previewVideo.onloadedmetadata = () => {
      elements.previewVideo.pause();
      elements.previewVideo.currentTime = 0;
      elements.customControls.hidden = false;
      elements.contextVideoControls.hidden = false;
      elements.contextCanvasPlayBtn.hidden = false;
      updatePlayButton();
      updateTimeDisplay();
      setAsset(file, elements.previewVideo.videoWidth, elements.previewVideo.videoHeight, "Video");
    };
  }
}

function setAsset(file, width, height, type) {
  currentAsset = { file, width, height, ratio: width / height, type };
  elements.previewWrap.hidden = false;
  elements.exportBtn.disabled = false;
  elements.assetMeta.textContent = `${type} · ${width} × ${height} · ${formatBytes(file.size)}`;
  elements.dropZone.querySelector(".drop-title").textContent = file.name;
  elements.dropZone.querySelector(".drop-subtitle").textContent = "Click or drop another file to replace it";
  updatePlacementAvailability();
  elements.platformPreviewPanel.hidden = false;
  startContextRenderer();
}

function selectPlatformPreview(previewId) {
  activeContextId = previewId;
  contextButtons.forEach((button, id) => {
    const active = id === previewId;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderPlatformPreview();
}

function startContextRenderer() {
  if (contextAnimationFrame) cancelAnimationFrame(contextAnimationFrame);
  const tick = () => {
    if (currentAsset?.type === "Video" && !elements.previewVideo.paused) renderPlatformPreview();
    contextAnimationFrame = requestAnimationFrame(tick);
  };
  renderPlatformPreview();
  contextAnimationFrame = requestAnimationFrame(tick);
}

function updatePlacementAvailability() {
  PRESETS.forEach((preset) => {
    presetButtons.get(preset.id).disabled = !currentAsset || !ratiosMatch(currentAsset.ratio, preset.ratio);
  });

  CROP_PRESETS.forEach((preset) => {
    cropButtons.get(preset.id).disabled = !currentAsset || ratiosMatch(currentAsset.ratio, preset.ratio);
  });

  if (!currentAsset) {
    setStatus("Upload a creative to activate matching placements.");
    elements.crossFormatStatus.textContent = "Upload a creative to preview alternate aspect ratios.";
    return;
  }

  const enabled = PRESETS.filter((preset) => ratiosMatch(currentAsset.ratio, preset.ratio));
  if (enabled.length) {
    const group = GROUPS.find((candidate) => candidate.id === enabled[0].group);
    setStatus(`${group.title} detected. ${enabled.length} matching overlay${enabled.length === 1 ? "" : "s"} available.`);
  } else {
    setStatus(`This ${currentAsset.width}:${currentAsset.height} aspect ratio does not match the 16:9, 9:16 or 4:5 guides.`, true);
  }

  const alternateCount = CROP_PRESETS.filter((preset) => !ratiosMatch(currentAsset.ratio, preset.ratio)).length;
  elements.crossFormatStatus.textContent = `${alternateCount} alternate centered crop${alternateCount === 1 ? "" : "s"} available for this asset.`;
}

function ratiosMatch(actual, expected) {
  return Math.abs(actual - expected) / expected <= 0.015;
}

function setStatus(message, warning = false) {
  elements.placementStatus.textContent = message;
  elements.placementStatus.classList.toggle("is-warning", warning);
}

function toggleOverlay(presetId) {
  if (!currentAsset) return;
  const preset = [...PRESETS, ...CROP_PRESETS].find((candidate) => candidate.id === presetId);
  if (!preset) return;
  if (preset.kind === "crop" && ratiosMatch(currentAsset.ratio, preset.ratio)) return;
  if (preset.kind !== "crop" && !ratiosMatch(currentAsset.ratio, preset.ratio)) return;

  if (activePresets.has(presetId)) {
    removeOverlay(presetId);
  } else {
    addOverlay(preset);
  }
  updateOverlayUi();
}

function addOverlay(preset) {
  let layer;
  if (preset.kind === "crop") {
    layer = createCropCanvas(preset);
  } else if (preset.image) {
    layer = document.createElement("img");
    layer.src = preset.image;
    layer.alt = "";
  } else {
    layer = createGuideCanvas(preset);
  }
  layer.id = `overlay-${preset.id}`;
  layer.classList.add("overlay-layer");
  layer.dataset.preset = preset.id;
  elements.overlayContainer.appendChild(layer);
  activePresets.add(preset.id);
}

function removeOverlay(presetId) {
  document.getElementById(`overlay-${presetId}`)?.remove();
  activePresets.delete(presetId);
}

function clearOverlays() {
  [...activePresets].forEach(removeOverlay);
  updateOverlayUi();
}

function updateOverlayUi() {
  [...PRESETS, ...CROP_PRESETS].forEach((preset) => {
    const isActive = activePresets.has(preset.id);
    const button = presetButtons.get(preset.id) || cropButtons.get(preset.id);
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const hasActive = activePresets.size > 0;
  elements.clearBtn.disabled = !hasActive;
  elements.guidancePanel.hidden = !hasActive;
  renderGuidance();
}

function renderGuidance() {
  elements.guidanceList.replaceChildren();
  [...PRESETS, ...CROP_PRESETS].filter((preset) => activePresets.has(preset.id)).forEach((preset) => {
    const card = document.createElement("article");
    card.className = "guidance-card";

    const badge = document.createElement("span");
    badge.className = "official-badge";
    badge.textContent = preset.guidanceStatus;
    if (preset.guidanceStatus !== "Official source checked") badge.classList.add("reference-badge");
    card.appendChild(badge);

    const title = document.createElement("h3");
    title.textContent = preset.kind === "crop"
      ? `${preset.label} · alternate crop`
      : `${preset.label} · ${preset.frame[0]} × ${preset.frame[1]}`;
    card.appendChild(title);

    if (preset.kind === "crop") {
      const crop = getCropRect(currentAsset.width, currentAsset.height, preset.ratio);
      const measurements = document.createElement("p");
      measurements.className = "measurements";
      const safe = preset.margins ? getSafeRectInCrop(crop, preset) : null;
      measurements.textContent = `Centered crop window: ${Math.round(crop.width)} × ${Math.round(crop.height)} px · ${describeCrop(crop, currentAsset.width, currentAsset.height)}${safe ? ` · safe area ${Math.round(safe.width)} × ${Math.round(safe.height)} px` : ""}`;
      card.appendChild(measurements);
    } else if (preset.margins) {
      const measurements = document.createElement("p");
      measurements.className = "measurements";
      measurements.textContent = `Clearance: ${preset.margins.top}px T · ${preset.margins.right}px R · ${preset.margins.bottom}px B · ${preset.margins.left}px L`;
      card.appendChild(measurements);
    } else if (preset.fullFrame) {
      const measurements = document.createElement("p");
      measurements.className = "measurements";
      measurements.textContent = "In-feed safe area: full 1080 × 1350 frame";
      card.appendChild(measurements);
    }

    const note = document.createElement("p");
    note.textContent = preset.note;
    card.appendChild(note);

    if (preset.source) {
      const link = document.createElement("a");
      link.href = preset.source;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = `${preset.sourceLabel} ↗`;
      card.appendChild(link);
    } else {
      const source = document.createElement("p");
      source.textContent = preset.sourceLabel;
      card.appendChild(source);
    }

    elements.guidanceList.appendChild(card);
  });
}

function createCropCanvas(preset) {
  const { width, height } = currentAsset;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  const crop = getCropRect(width, height, preset.ratio);

  context.fillStyle = "rgba(6, 7, 10, 0.78)";
  if (crop.y > 0) {
    context.fillRect(0, 0, width, crop.y);
    context.fillRect(0, crop.y + crop.height, width, height - crop.y - crop.height);
  }
  if (crop.x > 0) {
    context.fillRect(0, 0, crop.x, height);
    context.fillRect(crop.x + crop.width, 0, width - crop.x - crop.width, height);
  }

  context.save();
  context.strokeStyle = preset.color;
  context.lineWidth = Math.max(4, Math.round(Math.min(width, height) * 0.004));
  context.strokeRect(crop.x + context.lineWidth / 2, crop.y + context.lineWidth / 2, crop.width - context.lineWidth, crop.height - context.lineWidth);
  context.restore();

  drawCropExclusionLabels(context, crop, width, height);

  if (preset.margins) {
    const safe = drawSafeZoneInCrop(context, crop, preset);
    drawLabel(context, "SAFE AREA", safe.x + safe.width / 2, safe.y + safe.height / 2, {
      align: "center",
      size: Math.max(25, Math.round(Math.min(width, height) * 0.03)),
      color: "#ffffff"
    });
    drawLabel(context, `${Math.round(safe.width)} × ${Math.round(safe.height)} px`, safe.x + safe.width / 2, safe.y + safe.height / 2 + Math.max(36, Math.round(height * 0.02)), {
      align: "center",
      size: Math.max(18, Math.round(Math.min(width, height) * 0.021)),
      color: "rgba(255,255,255,0.86)"
    });
  } else {
    drawLabel(context, `${formatRatio(preset.ratio)} CLEAR FRAME`, crop.x + crop.width / 2, crop.y + crop.height / 2, {
      align: "center",
      size: Math.max(28, Math.round(Math.min(width, height) * 0.032)),
      color: "#ffffff"
    });
    drawLabel(context, `${Math.round(crop.width)} × ${Math.round(crop.height)} px`, crop.x + crop.width / 2, crop.y + crop.height / 2 + Math.max(40, Math.round(height * 0.022)), {
      align: "center",
      size: Math.max(20, Math.round(Math.min(width, height) * 0.022)),
      color: "rgba(255,255,255,0.86)"
    });
  }
  drawPill(context, preset.label.toUpperCase(), 26, 26, preset.color);
  return canvas;
}

function drawSafeZoneInCrop(context, crop, preset) {
  const safe = getSafeRectInCrop(crop, preset);
  const top = safe.y - crop.y;
  const bottom = crop.y + crop.height - safe.y - safe.height;
  const left = safe.x - crop.x;
  const right = crop.x + crop.width - safe.x - safe.width;

  context.fillStyle = hexToRgba(preset.color, 0.46);
  if (top) context.fillRect(crop.x, crop.y, crop.width, top);
  if (bottom) context.fillRect(crop.x, crop.y + crop.height - bottom, crop.width, bottom);
  if (left) context.fillRect(crop.x, safe.y, left, safe.height);
  if (right) context.fillRect(crop.x + crop.width - right, safe.y, right, safe.height);

  context.save();
  context.strokeStyle = "rgba(255,255,255,0.96)";
  context.lineWidth = Math.max(4, Math.round(Math.min(crop.width, crop.height) * 0.004));
  context.strokeRect(safe.x + context.lineWidth / 2, safe.y + context.lineWidth / 2, safe.width - context.lineWidth, safe.height - context.lineWidth);
  context.restore();
  return safe;
}

function getSafeRectInCrop(crop, preset) {
  const [frameWidth, frameHeight] = preset.targetFrame;
  const scaleX = crop.width / frameWidth;
  const scaleY = crop.height / frameHeight;
  return {
    x: crop.x + preset.margins.left * scaleX,
    y: crop.y + preset.margins.top * scaleY,
    width: crop.width - (preset.margins.left + preset.margins.right) * scaleX,
    height: crop.height - (preset.margins.top + preset.margins.bottom) * scaleY
  };
}

function drawCropExclusionLabels(context, crop, width, height) {
  const size = Math.max(16, Math.round(Math.min(width, height) * 0.018));
  if (crop.y > size * 2.5) {
    drawLabel(context, "CROPPED OUT", width / 2, crop.y / 2, { align: "center", size, color: "rgba(255,255,255,0.7)" });
    drawLabel(context, "CROPPED OUT", width / 2, crop.y + crop.height + (height - crop.y - crop.height) / 2, { align: "center", size, color: "rgba(255,255,255,0.7)" });
  }
  if (crop.x > size * 2.5) {
    drawLabel(context, "CROP", crop.x / 2, height / 2, { align: "center", size, color: "rgba(255,255,255,0.7)" });
    drawLabel(context, "CROP", crop.x + crop.width + (width - crop.x - crop.width) / 2, height / 2, { align: "center", size, color: "rgba(255,255,255,0.7)" });
  }
}

function getCropRect(width, height, targetRatio) {
  const sourceRatio = width / height;
  if (sourceRatio > targetRatio) {
    const cropWidth = height * targetRatio;
    return { x: (width - cropWidth) / 2, y: 0, width: cropWidth, height };
  }
  const cropHeight = width / targetRatio;
  return { x: 0, y: (height - cropHeight) / 2, width, height: cropHeight };
}

function describeCrop(crop, width, height) {
  if (crop.y > 0.5) return `removes ${Math.round(crop.y)} px from top and bottom`;
  if (crop.x > 0.5) return `removes ${Math.round(crop.x)} px from left and right`;
  return `uses the full ${width} × ${height} frame`;
}

function formatRatio(ratio) {
  const match = CROP_PRESETS.find((preset) => preset.ratio === ratio);
  if (match?.id.includes("9x16")) return "9:16";
  if (match?.id.includes("4x5")) return "4:5";
  if (match?.id.includes("1x1")) return "1:1";
  return "16:9";
}

function renderPlatformPreview() {
  if (!currentAsset) return;
  const preview = PLATFORM_PREVIEWS.find((candidate) => candidate.id === activeContextId);
  if (!preview) return;

  const canvas = elements.platformPreviewCanvas;
  const context = canvas.getContext("2d");
  canvas.width = 1080;
  canvas.height = 1920;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#08080a";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const media = currentAsset.type === "Video" ? elements.previewVideo : elements.previewImage;
  let mediaRect = { x: 0, y: 0, width: 1080, height: 1920 };

  if (preview.platform === "instagram-feed") {
    mediaRect = drawInstagramFeedPreview(context, media);
  } else if (preview.platform === "facebook-feed") {
    mediaRect = drawFacebookFeedPreview(context, media);
  } else if (preview.platform === "youtube-watch") {
    mediaRect = drawYouTubeWatchPreview(context, media);
  } else {
    drawMediaCover(context, media, mediaRect);
    drawFullscreenPlatformUi(context, preview.platform);
  }

  if (elements.contextGuideToggle.checked) drawContextGuide(context, mediaRect, preview);

  elements.contextPreviewLabel.textContent = `${preview.label} · simulated placement`;
  elements.contextPreviewNote.textContent = preview.note;
}

function drawMediaCover(context, media, rect) {
  const sourceWidth = currentAsset.width;
  const sourceHeight = currentAsset.height;
  const sourceRatio = sourceWidth / sourceHeight;
  const targetRatio = rect.width / rect.height;
  let sx = 0;
  let sy = 0;
  let sw = sourceWidth;
  let sh = sourceHeight;
  if (sourceRatio > targetRatio) {
    sw = sourceHeight * targetRatio;
    sx = (sourceWidth - sw) / 2;
  } else {
    sh = sourceWidth / targetRatio;
    sy = (sourceHeight - sh) / 2;
  }
  context.drawImage(media, sx, sy, sw, sh, rect.x, rect.y, rect.width, rect.height);
}

function drawFullscreenPlatformUi(context, platform) {
  context.save();
  context.fillStyle = "#fff";
  context.strokeStyle = "#fff";
  context.lineWidth = 5;
  context.shadowColor = "rgba(0,0,0,.78)";
  context.shadowBlur = 12;

  if (platform === "tiktok") {
    uiText(context, "Following     For You", 540, 74, 31, "center", 800);
    uiText(context, "LIVE", 72, 75, 25, "left", 800);
    drawActionRail(context, 982, 850, ["♡", "38.4K", "◯", "864", "↗", "Share"]);
    drawAvatar(context, 982, 710, "TT", "#16161a", "#00f2ea");
    drawBottomCopy(context, "@yourbrand", "Your caption appears here. Keep key creative above this stack.", "♫  Original sound · yourbrand", 98, 1480);
    drawCtaBar(context, 82, 1708, 916, 92, "Sponsored", "Learn more  ›");
    drawBottomNav(context, ["Home", "Shop", "+", "Inbox", "Profile"]);
  } else if (platform === "instagram-reels") {
    uiText(context, "Reels", 62, 82, 38, "left", 800);
    uiText(context, "⌄", 174, 80, 34, "left", 800);
    uiText(context, "▣", 1005, 82, 36, "right", 700);
    drawActionRail(context, 988, 900, ["♡", "12.8K", "○", "318", "⌁", "Share"]);
    drawBottomCopy(context, "●  yourbrand     Follow", "Sponsored  ·  Your caption appears here…", "♫  Original audio", 70, 1455);
    drawCtaBar(context, 55, 1690, 970, 92, "Visit Instagram profile", "Shop now  ›");
    drawBottomNav(context, ["⌂", "⌕", "＋", "Reels", "●"]);
  } else if (platform === "facebook-reels") {
    uiText(context, "‹", 52, 84, 54, "left", 400);
    uiText(context, "Reels", 112, 82, 39, "left", 800);
    uiText(context, "⌕     ◯", 1018, 82, 34, "right", 700);
    drawActionRail(context, 988, 900, ["♡", "8.2K", "○", "406", "↗", "Share"]);
    drawBottomCopy(context, "●  Your Brand     Follow", "Sponsored  ·  Your caption appears here…", "♫  Original audio", 70, 1460);
    drawCtaBar(context, 55, 1695, 970, 92, "Learn more about this offer", "Learn more  ›");
    drawBottomNav(context, ["Home", "Video", "Friends", "Bell", "Menu"]);
  } else if (platform === "stories") {
    drawStoryProgress(context);
    drawAvatar(context, 70, 99, "IG", "#ff4f9a", "#ffb13b");
    uiText(context, "yourbrand   Sponsored", 120, 100, 25, "left", 700);
    uiText(context, "•••", 1015, 98, 32, "right", 800);
    drawCtaBar(context, 95, 1675, 890, 96, "Sponsored", "Shop now  ↑");
    uiText(context, "Send message", 540, 1832, 28, "center", 700);
  } else if (platform === "shorts") {
    uiText(context, "Shorts", 60, 78, 38, "left", 800);
    uiText(context, "⌕     ⋮", 1018, 78, 35, "right", 700);
    drawActionRail(context, 982, 805, ["♡", "21K", "♢", "Dislike", "○", "482", "↗", "Share"]);
    drawBottomCopy(context, "●  @yourbrand     Subscribe", "Your headline or caption appears here…", "♫  Original sound", 62, 1460);
    drawCtaBar(context, 50, 1692, 980, 98, "Sponsored · Your headline", "Learn more  ›");
    drawBottomNav(context, ["Home", "Shorts", "+", "Subs", "You"]);
  }
  context.restore();
}

function drawInstagramFeedPreview(context, media) {
  context.fillStyle = "#fff";
  context.fillRect(0, 0, 1080, 1920);
  context.fillStyle = "#0b0b0d";
  uiText(context, "Instagram", 50, 68, 39, "left", 800, false, "#111");
  uiText(context, "♡     ◇", 1025, 68, 38, "right", 500, false, "#111");
  drawAvatar(context, 65, 165, "IG", "#ff4f9a", "#ffb13b", false);
  uiText(context, "yourbrand", 116, 153, 27, "left", 800, false, "#111");
  uiText(context, "Sponsored", 116, 184, 21, "left", 500, false, "#666");
  uiText(context, "•••", 1024, 165, 28, "right", 800, false, "#111");
  const rect = { x: 0, y: 225, width: 1080, height: 1350 };
  drawMediaCover(context, media, rect);
  uiText(context, "♡    ○    ◇", 45, 1635, 40, "left", 500, false, "#111");
  uiText(context, "▱", 1030, 1635, 40, "right", 500, false, "#111");
  uiText(context, "8,421 likes", 45, 1698, 25, "left", 800, false, "#111");
  uiText(context, "yourbrand  Your caption appears below the image…", 45, 1741, 24, "left", 500, false, "#111");
  uiText(context, "View all 126 comments", 45, 1784, 23, "left", 500, false, "#6f6f78");
  drawFeedNav(context, ["⌂", "⌕", "＋", "Reels", "●"], false);
  return rect;
}

function drawFacebookFeedPreview(context, media) {
  context.fillStyle = "#f0f2f5";
  context.fillRect(0, 0, 1080, 1920);
  context.fillStyle = "#0866ff";
  uiText(context, "facebook", 42, 72, 44, "left", 800, false, "#0866ff");
  uiText(context, "⌕   ☰", 1030, 72, 36, "right", 700, false, "#111");
  context.fillStyle = "#fff";
  context.fillRect(0, 118, 1080, 1710);
  drawAvatar(context, 63, 188, "f", "#0866ff", "#0866ff", false);
  uiText(context, "Your Brand", 116, 176, 27, "left", 800, false, "#111");
  uiText(context, "Sponsored · 🌐", 116, 210, 21, "left", 500, false, "#65676b");
  uiText(context, "•••", 1025, 187, 29, "right", 700, false, "#111");
  uiText(context, "Your post copy can appear above the creative.", 42, 266, 25, "left", 500, false, "#111");
  const rect = { x: 0, y: 305, width: 1080, height: 1350 };
  drawMediaCover(context, media, rect);
  uiText(context, "●  8.4K", 38, 1700, 24, "left", 600, false, "#65676b");
  uiText(context, "126 comments   43 shares", 1040, 1700, 24, "right", 500, false, "#65676b");
  context.strokeStyle = "#d6d8dc";
  context.beginPath(); context.moveTo(38, 1732); context.lineTo(1042, 1732); context.stroke();
  uiText(context, "♡  Like", 180, 1780, 25, "center", 700, false, "#65676b");
  uiText(context, "○  Comment", 540, 1780, 25, "center", 700, false, "#65676b");
  uiText(context, "↗  Share", 900, 1780, 25, "center", 700, false, "#65676b");
  return rect;
}

function drawYouTubeWatchPreview(context, media) {
  context.fillStyle = "#0f0f0f";
  context.fillRect(0, 0, 1080, 1920);
  uiText(context, "▶ YouTube", 44, 72, 36, "left", 800);
  uiText(context, "⌕     ●", 1030, 72, 34, "right", 700);
  const rect = { x: 0, y: 130, width: 1080, height: 608 };
  drawMediaCover(context, media, rect);
  context.fillStyle = "rgba(0,0,0,.68)";
  context.fillRect(0, 678, 1080, 60);
  uiText(context, "▶      0:06 / 0:15                              ⚙", 34, 710, 23, "left", 600);
  uiText(context, "Your video headline appears here", 38, 800, 34, "left", 800);
  uiText(context, "Sponsored · Your Brand · 124K views", 38, 850, 23, "left", 500, false, "#aaa");
  drawCtaBar(context, 38, 900, 1004, 104, "Your Brand · Sponsored", "Visit site  ›");
  uiText(context, "●  Your Brand       Subscribe", 42, 1080, 28, "left", 800);
  uiText(context, "♡  8.4K       ↗ Share       ⇩ Download", 42, 1170, 27, "left", 700);
  context.fillStyle = "#272727";
  roundRect(context, 38, 1240, 1004, 260, 24); context.fill();
  uiText(context, "Up next", 70, 1292, 24, "left", 800);
  uiText(context, "Related video and recommendation content", 70, 1350, 27, "left", 600);
  return rect;
}

function drawContextGuide(context, mediaRect, preview) {
  context.save();
  const guide = CROP_PRESETS.find((preset) => preset.id === preview.guide);
  if (guide?.margins) {
    const [frameWidth, frameHeight] = guide.targetFrame;
    const scaleX = mediaRect.width / frameWidth;
    const scaleY = mediaRect.height / frameHeight;
    const safe = {
      x: mediaRect.x + guide.margins.left * scaleX,
      y: mediaRect.y + guide.margins.top * scaleY,
      width: mediaRect.width - (guide.margins.left + guide.margins.right) * scaleX,
      height: mediaRect.height - (guide.margins.top + guide.margins.bottom) * scaleY
    };
    context.fillStyle = hexToRgba(guide.color, 0.32);
    context.fillRect(mediaRect.x, mediaRect.y, mediaRect.width, safe.y - mediaRect.y);
    context.fillRect(mediaRect.x, safe.y + safe.height, mediaRect.width, mediaRect.y + mediaRect.height - safe.y - safe.height);
    context.fillRect(mediaRect.x, safe.y, safe.x - mediaRect.x, safe.height);
    context.fillRect(safe.x + safe.width, safe.y, mediaRect.x + mediaRect.width - safe.x - safe.width, safe.height);
    context.strokeStyle = "#fff";
    context.lineWidth = 5;
    context.strokeRect(safe.x + 2.5, safe.y + 2.5, safe.width - 5, safe.height - 5);
    drawPill(context, "SAFE AREA", safe.x + 18, safe.y + 18, guide.color);
  } else if (preview.ratio === 4 / 5) {
    context.strokeStyle = "#bf77ff";
    context.lineWidth = 7;
    context.strokeRect(mediaRect.x + 3.5, mediaRect.y + 3.5, mediaRect.width - 7, mediaRect.height - 7);
    drawPill(context, "FULL 4:5 FRAME USABLE", mediaRect.x + 22, mediaRect.y + 22, "#bf77ff");
  } else {
    context.strokeStyle = "#4e9bff";
    context.lineWidth = 7;
    context.strokeRect(mediaRect.x + 3.5, mediaRect.y + 3.5, mediaRect.width - 7, mediaRect.height - 7);
  }
  context.restore();
}

function uiText(context, text, x, y, size, align = "left", weight = 700, shadow = true, color = "#fff") {
  context.save();
  context.font = `${weight} ${size}px Arial, sans-serif`;
  context.textAlign = align;
  context.textBaseline = "middle";
  context.fillStyle = color;
  if (shadow) {
    context.shadowColor = "rgba(0,0,0,.85)";
    context.shadowBlur = 10;
  }
  context.fillText(text, x, y);
  context.restore();
}

function drawAvatar(context, x, y, initials, colorA, colorB, shadow = true) {
  context.save();
  if (shadow) { context.shadowColor = "rgba(0,0,0,.8)"; context.shadowBlur = 10; }
  const gradient = context.createLinearGradient(x - 32, y - 32, x + 32, y + 32);
  gradient.addColorStop(0, colorA);
  gradient.addColorStop(1, colorB);
  context.fillStyle = gradient;
  context.beginPath(); context.arc(x, y, 34, 0, Math.PI * 2); context.fill();
  context.strokeStyle = "#fff"; context.lineWidth = 4; context.stroke();
  uiText(context, initials, x, y + 1, 19, "center", 800, false);
  context.restore();
}

function drawActionRail(context, x, startY, items) {
  items.forEach((item, index) => {
    const y = startY + index * 64;
    const isIcon = index % 2 === 0;
    uiText(context, item, x, y, isIcon ? 42 : 20, "center", isIcon ? 500 : 700);
  });
}

function drawBottomCopy(context, handle, caption, audio, x, y) {
  uiText(context, handle, x, y, 28, "left", 800);
  uiText(context, caption, x, y + 48, 25, "left", 600);
  uiText(context, audio, x, y + 94, 23, "left", 600);
}

function drawCtaBar(context, x, y, width, height, left, right) {
  context.save();
  context.shadowColor = "rgba(0,0,0,.55)";
  context.shadowBlur = 18;
  context.fillStyle = "rgba(20,20,23,.88)";
  roundRect(context, x, y, width, height, 18); context.fill();
  context.strokeStyle = "rgba(255,255,255,.36)"; context.lineWidth = 2; context.stroke();
  uiText(context, left, x + 26, y + height / 2, 24, "left", 600);
  uiText(context, right, x + width - 26, y + height / 2, 25, "right", 800);
  context.restore();
}

function drawBottomNav(context, items) {
  context.save();
  context.fillStyle = "rgba(5,5,7,.9)";
  context.fillRect(0, 1835, 1080, 85);
  items.forEach((item, index) => uiText(context, item, 108 + index * 216, 1876, item.length > 2 ? 18 : 29, "center", 700));
  context.restore();
}

function drawFeedNav(context, items, dark = true) {
  context.save();
  context.fillStyle = dark ? "#070708" : "#fff";
  context.fillRect(0, 1835, 1080, 85);
  items.forEach((item, index) => uiText(context, item, 108 + index * 216, 1877, 31, "center", 600, false, dark ? "#fff" : "#111"));
  context.restore();
}

function drawStoryProgress(context) {
  const gap = 12;
  const width = (1000 - gap * 3) / 4;
  for (let index = 0; index < 4; index += 1) {
    context.fillStyle = index === 0 ? "#fff" : "rgba(255,255,255,.48)";
    roundRect(context, 40 + index * (width + gap), 30, width, 6, 3); context.fill();
  }
}

async function exportPlatformPreview() {
  if (!currentAsset) return;
  renderPlatformPreview();
  const blob = await new Promise((resolve) => elements.platformPreviewCanvas.toBlob(resolve, "image/png"));
  if (!blob) return;
  const preview = PLATFORM_PREVIEWS.find((candidate) => candidate.id === activeContextId);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${preview.id}-preview.png`;
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function createGuideCanvas(preset) {
  const [width, height] = preset.frame;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");

  if (preset.fullFrame) {
    context.save();
    context.strokeStyle = preset.color;
    context.lineWidth = 10;
    context.strokeRect(5, 5, width - 10, height - 10);
    context.restore();
    drawLabel(context, "FULL 4:5 FRAME VISIBLE IN FEED", width / 2, height / 2, {
      align: "center",
      size: 34,
      color: "#ffffff"
    });
    drawLabel(context, "No published in-image UI exclusion", width / 2, height / 2 + 46, {
      align: "center",
      size: 24,
      color: "rgba(255,255,255,0.86)"
    });
  } else {
    const { top, right, bottom, left } = preset.margins;
    const safeWidth = width - left - right;
    const safeHeight = height - top - bottom;
    context.fillStyle = hexToRgba(preset.color, 0.46);
    if (top) context.fillRect(0, 0, width, top);
    if (bottom) context.fillRect(0, height - bottom, width, bottom);
    if (left) context.fillRect(0, top, left, safeHeight);
    if (right) context.fillRect(width - right, top, right, safeHeight);

    context.save();
    context.strokeStyle = "rgba(255,255,255,0.94)";
    context.lineWidth = 5;
    context.strokeRect(left + 2.5, top + 2.5, safeWidth - 5, safeHeight - 5);
    context.restore();

    drawLabel(context, "SAFE AREA", left + safeWidth / 2, top + safeHeight / 2, {
      align: "center",
      size: Math.max(27, Math.round(width * 0.032)),
      color: "#ffffff"
    });
    drawLabel(context, `${safeWidth} × ${safeHeight} px`, left + safeWidth / 2, top + safeHeight / 2 + 42, {
      align: "center",
      size: Math.max(20, Math.round(width * 0.023)),
      color: "rgba(255,255,255,0.84)"
    });
  }

  drawPill(context, preset.label.toUpperCase(), 26, 26, preset.color);
  return canvas;
}

function drawPill(context, text, x, y, color) {
  const fontSize = 30;
  const paddingX = 20;
  const height = 56;
  context.save();
  context.font = `800 ${fontSize}px Arial, sans-serif`;
  const width = context.measureText(text).width + paddingX * 2;
  roundRect(context, x, y, width, height, 14);
  context.fillStyle = "rgba(5,5,8,0.84)";
  context.fill();
  context.strokeStyle = color;
  context.lineWidth = 3;
  context.stroke();
  context.fillStyle = "#ffffff";
  context.textBaseline = "middle";
  context.fillText(text, x + paddingX, y + height / 2 + 1);
  context.restore();
}

function drawLabel(context, text, x, y, options = {}) {
  context.save();
  context.font = `800 ${options.size || 28}px Arial, sans-serif`;
  context.textAlign = options.align || "left";
  context.textBaseline = "middle";
  context.fillStyle = options.color || "#ffffff";
  context.shadowColor = "rgba(0,0,0,0.9)";
  context.shadowBlur = 10;
  context.fillText(text, x, y);
  context.restore();
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.roundRect(x, y, width, height, radius);
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const red = parseInt(value.slice(0, 2), 16);
  const green = parseInt(value.slice(2, 4), 16);
  const blue = parseInt(value.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function togglePlayPause() {
  if (!currentAsset || currentAsset.type !== "Video") return;
  if (elements.previewVideo.paused) {
    elements.previewVideo.play();
  } else {
    elements.previewVideo.pause();
  }
  updatePlayButton();
}

function updatePlayButton() {
  const isPaused = elements.previewVideo.paused;
  elements.playPauseBtn.innerHTML = `<span aria-hidden="true">${isPaused ? "▶" : "Ⅱ"}</span>`;
  elements.playPauseBtn.setAttribute("aria-label", isPaused ? "Play video" : "Pause video");
  elements.contextPlayPauseBtn.innerHTML = `<span aria-hidden="true">${isPaused ? "▶" : "Ⅱ"}</span>`;
  elements.contextPlayPauseBtn.setAttribute("aria-label", isPaused ? "Play video" : "Pause video");
  elements.contextCanvasPlayBtn.hidden = !isPaused || currentAsset?.type !== "Video";
  elements.contextCanvasPlayBtn.innerHTML = `<span aria-hidden="true">▶</span>`;
}

function updateTimeDisplay() {
  const duration = Number.isFinite(elements.previewVideo.duration) ? elements.previewVideo.duration : 0;
  const current = elements.previewVideo.currentTime || 0;
  elements.timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
  elements.seekBar.value = duration ? (current / duration) * 100 : 0;
  elements.contextTimeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
  elements.contextSeekBar.value = duration ? (current / duration) * 100 : 0;
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds || 0));
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function exportScreenshot() {
  if (!currentAsset) return;
  const { width, height } = currentAsset;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");

  const media = currentAsset.type === "Video" ? elements.previewVideo : elements.previewImage;
  context.drawImage(media, 0, 0, width, height);

  for (const layer of elements.overlayContainer.querySelectorAll(".overlay-layer")) {
    if (layer instanceof HTMLImageElement && !layer.complete) await layer.decode();
    context.drawImage(layer, 0, 0, width, height);
  }

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) return;
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `safe-zone-preview-${currentAsset.width}x${currentAsset.height}.png`;
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setStatus(`Exported safe-zone-preview-${currentAsset.width}x${currentAsset.height}.png`);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
