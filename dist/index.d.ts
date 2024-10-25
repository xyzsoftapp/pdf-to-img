/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import "./polyfill.js";
import type { DocumentInitParameters } from "pdfjs-dist/types/src/display/api.js";
export type PdfMetadata = {
    Title?: string;
    Author?: string;
    Producer?: string;
    Creator?: string;
    CreationDate?: string;
    ModDate?: string;
};
export type Options = {
    /** For cases where the PDF is encrypted with a password */
    password?: string;
    /** defaults to `1`. If you want high-resolution images, increase this */
    scale?: number;
    /** document init parameters which are passed to pdfjs.getDocument */
    docInitParams?: Partial<DocumentInitParameters>;
};
/**
 * Converts a PDF to a series of images. This returns a `Symbol.asyncIterator`
 *
 * @param input Either (a) the path to a pdf file, or (b) a data url, or (b) a buffer, (c) a buffer, or (e) a ReadableStream.
 *
 * @example
 * ```js
 * import pdf from "pdf-to-img";
 *
 * for await (const page of await pdf("example.pdf")) {
 *   expect(page).toMatchImageSnapshot();
 * }
 *
 * // or if you want access to more details:
 *
 * const doc = await pdf("example.pdf");
 * expect(doc.length).toBe(1);
 * expect(doc.metadata).toEqual({ ... });
 *
 * for await (const page of doc) {
 *   expect(page).toMatchImageSnapshot();
 * }
 * ```
 */
export declare function pdf(input: string | Uint8Array | Buffer | NodeJS.ReadableStream, options?: Options): Promise<{
    length: number;
    metadata: PdfMetadata;
    getPage(pageNumber: number): Promise<Buffer>;
    [Symbol.asyncIterator](): AsyncIterator<Buffer, void, void>;
}>;
