import { strict as invariant } from "node:assert";
import Canvas from "canvas";
export class NodeCanvasFactory {
    /* eslint-disable class-methods-use-this, no-param-reassign */
    create(width, height) {
        invariant(width > 0 && height > 0, "Invalid canvas size");
        const canvas = Canvas.createCanvas(width, height);
        const context = canvas.getContext("2d");
        return {
            canvas,
            context,
        };
    }
    reset(canvasAndContext, width, height) {
        invariant(canvasAndContext.canvas, "Canvas is not specified");
        invariant(width > 0 && height > 0, "Invalid canvas size");
        canvasAndContext.canvas.width = width;
        canvasAndContext.canvas.height = height;
    }
    destroy(canvasAndContext) {
        invariant(canvasAndContext.canvas, "Canvas is not specified");
        // Zeroing the width and height cause Firefox to release graphics
        // resources immediately, which can greatly reduce memory consumption.
        canvasAndContext.canvas.width = 0;
        canvasAndContext.canvas.height = 0;
        canvasAndContext.canvas = null;
        canvasAndContext.context = null;
    }
}
