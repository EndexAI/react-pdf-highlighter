import "./style/index.css";

export { PdfHighlighter } from "./components/PdfHighlighter";
export { Tip } from "./components/Tip";
export { Highlight } from "./components/Highlight";
export { Popup } from "./components/Popup";
export { AreaHighlight } from "./components/AreaHighlight";
export { PdfLoader } from "./components/PdfLoader";

export { scaledToViewport, viewportToScaled } from "./lib/coordinates";
export { default as getBoundingRect } from "./lib/get-bounding-rect";
export { default as getClientRects } from "./lib/get-client-rects";
export { default as getAreaAsPng } from "./lib/get-area-as-png";
export {
  findOrCreateContainerLayer,
  getPageFromElement,
  getPagesFromRange,
  getWindow,
  isHTMLElement,
} from "./lib/pdfjs-dom";

export type {
  LTWH,
  LTWHP,
  Scaled,
  Position,
  ScaledPosition,
  Content,
  HighlightContent,
  Comment,
  HighlightComment,
  NewHighlight,
  IHighlight,
  ViewportHighlight,
  Viewport,
  Page,
} from "./types";
