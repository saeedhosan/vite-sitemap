## Introduction

The `vite-sitemap` plugin makes it easier to generate sitemaps for Vite projects.

> It simplifies sitemap creation by producing a standardized, well-structured final output.

## Installation

Install the plugin using your preferred package manager:

```bash
npm i -D vite-sitemap
```

## Usage

To use the plugin, import it in your `vite.config.js` or `vite.config.ts` file and add it to the `plugins` array:

```ts
import { defineConfig } from "vite";
import sitemap from "vite-sitemap";

export default defineConfig({
  plugins: [
    sitemap({
      baseURL: "https://www.example.com",
      urls: [
        "about",
        "privacy-policy",
        "terms-and-conditions",
        // Add more paths here
      ],
    }),
  ],
});
```

### Configuration Options

The `sitemap` plugin accepts an options object with the following properties:

| Option      | Type     | Default         | Description                                                                        |
| ----------- | -------- | --------------- | ---------------------------------------------------------------------------------- |
| `baseURL`   | string   | `""`            | The base URL of your website. All paths will be appended to this URL.              |
| `outputDir` | string   | Project `dist`  | (Optional) Directory where the sitemap file should be written.                     |
| `urls`      | string[] | `[]`            | An array of paths you want to include in your sitemap.                             |
| `filename`  | string   | `'sitemap.xml'` | The name of the sitemap file to be generated.                                      |
| `freq`      | string   | `'daily'`       | Change frequency for each URL in the sitemap (`daily`, `weekly`, `monthly`, etc.). |

#### Example Usage

```ts
import { defineConfig } from "vite";
import sitemap from "vite-sitemap";

export default defineConfig({
  plugins: [
    sitemap({
      freq: "weekly", // optional - default daily
      filename: "custom-sitemap.xml", // optional
      baseURL: "https://www.example.com",
      urls: ["about", "contact", "privacy-policy"],
    }),
  ],
});
```

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](.github/CONTRIBUTING.md) guide for more details.
