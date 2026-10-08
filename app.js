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
    label: "Instagram In-Feed 4:5",
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
  guidancePanel: document.getElementById("guidance-panel"),
  guidanceList: document.getElementById("guidance-list"),
  clearBtn: document.getElementById("clear-btn"),
  exportBtn: document.getElementById("export-btn")
};

let activeObjectUrl = null;
let currentAsset = null;
const activePresets = new Set();
const presetButtons = new Map();

buildPlacementControls();
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

window.addEventListener("beforeunload", () => {
  if (activeObjectUrl) URL.revokeObjectURL(activeObjectUrl);
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

function handleFile(file) {
  if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
    setStatus("Choose an image or video file.", true);
    return;
  }

  clearOverlays();
  currentAsset = null;
  elements.exportBtn.disabled = true;
  updatePlacementAvailability();

  if (activeObjectUrl) URL.revokeObjectURL(activeObjectUrl);
  activeObjectUrl = URL.createObjectURL(file);

  if (file.type.startsWith("image/")) {
    elements.previewVideo.pause();
    elements.previewVideo.removeAttribute("src");
    elements.previewVideo.hidden = true;
    elements.customControls.hidden = true;
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
}

function updatePlacementAvailability() {
  PRESETS.forEach((preset) => {
    presetButtons.get(preset.id).disabled = !currentAsset || !ratiosMatch(currentAsset.ratio, preset.ratio);
  });

  if (!currentAsset) {
    setStatus("Upload a creative to activate matching placements.");
    return;
  }

  const enabled = PRESETS.filter((preset) => ratiosMatch(currentAsset.ratio, preset.ratio));
  if (enabled.length) {
    const group = GROUPS.find((candidate) => candidate.id === enabled[0].group);
    setStatus(`${group.title} detected. ${enabled.length} matching overlay${enabled.length === 1 ? "" : "s"} available.`);
  } else {
    setStatus(`This ${currentAsset.width}:${currentAsset.height} aspect ratio does not match the 16:9, 9:16 or 4:5 guides.`, true);
  }
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
  const preset = PRESETS.find((candidate) => candidate.id === presetId);
  if (!preset || !ratiosMatch(currentAsset.ratio, preset.ratio)) return;

  if (activePresets.has(presetId)) {
    removeOverlay(presetId);
  } else {
    addOverlay(preset);
  }
  updateOverlayUi();
}

function addOverlay(preset) {
  let layer;
  if (preset.image) {
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
  PRESETS.forEach((preset) => {
    const isActive = activePresets.has(preset.id);
    const button = presetButtons.get(preset.id);
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
  PRESETS.filter((preset) => activePresets.has(preset.id)).forEach((preset) => {
    const card = document.createElement("article");
    card.className = "guidance-card";

    const badge = document.createElement("span");
    badge.className = "official-badge";
    badge.textContent = preset.guidanceStatus;
    if (preset.guidanceStatus !== "Official source checked") badge.classList.add("reference-badge");
    card.appendChild(badge);

    const title = document.createElement("h3");
    title.textContent = `${preset.label} · ${preset.frame[0]} × ${preset.frame[1]}`;
    card.appendChild(title);

    if (preset.margins) {
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
}

function updateTimeDisplay() {
  const duration = Number.isFinite(elements.previewVideo.duration) ? elements.previewVideo.duration : 0;
  const current = elements.previewVideo.currentTime || 0;
  elements.timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
  elements.seekBar.value = duration ? (current / duration) * 100 : 0;
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
