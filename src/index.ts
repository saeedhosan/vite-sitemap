import { writeFile } from "fs/promises";
import { resolve } from "path";

/**
 * Unslash a url or string
 */
export const unslash = (str: string): string => str.replace(/(\/$)|(^\/)/g, "");

/**
 * add slash from last of url or string
 */
export const adslash = (str: string): string => unslash(str).replace(/$/, "/");

type SitemapOptions = {
    baseURL?: string;
    outputDir?: string;
    urls?: string[];
    filename?: string;
    freq?: string;
};
export default function sitemap(options?: SitemapOptions) {
    const urls = options?.urls || [];
    const baseUrl = options?.baseURL || "";
    const filename = options?.filename || "sitemap.xml";
    const changefreq = options?.freq || "daily";

    // Format the current date 2025-10-08T23:14:04.429Z
    const formattedDate = (new Date()).toISOString();

    const sitemapEntries = urls.map((route, i) => {
        return `<url>
            <loc>${adslash(baseUrl)}${unslash(route)}</loc>
            <lastmod>${formattedDate}</lastmod>
            <changefreq>${changefreq}</changefreq>
            <priority>0.8</priority>
        </url>`;
    });

    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        <url>
            <loc>${baseUrl}</loc>
            <lastmod>${formattedDate}</lastmod>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
        <url>
            <loc>${adslash(baseUrl)}</loc>
            <lastmod>${formattedDate}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.9</priority>
        </url>
        ${sitemapEntries.join("")}
    </urlset>
    `;

    return {
        name: "sitemap",

        async writeBundle(options: { dir: string }) {
            try {
                await writeFile(resolve(options.dir, filename), sitemapXML);
            } catch (error) {
                throw new Error(String(error));
            }
        },
    };
}
