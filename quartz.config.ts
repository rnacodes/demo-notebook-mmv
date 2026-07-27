import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration for Demo Digital Notebook
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Demo Digital Notebook",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    locale: "en-US",
    baseUrl: "demogarden.mymediaverseuniverse.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto",
        body: "Roboto",
        code: "Roboto Mono",
      },
      // My MediaVerse palette — dark mode is the faithful MMV theme,
      // light mode is derived (seasalt stage, ultra-violet accent)
      colors: {
        lightMode: {
          light: "#fcfafa",
          lightgray: "#e3e0e8",
          gray: "#8a8594",
          darkgray: "#474350",
          dark: "#1b1b1b",
          secondary: "#362759",
          tertiary: "#695a8c",
          highlight: "rgba(54, 39, 89, 0.10)",
          textHighlight: "rgba(233, 169, 77, 0.45)",
        },
        darkMode: {
          light: "#1b1b1b",
          lightgray: "#474350",
          gray: "#999999",
          darkgray: "#fcfafa",
          dark: "#fcfafa",
          secondary: "#e9a94d",
          tertiary: "#f4ce85",
          highlight: "rgba(105, 90, 140, 0.22)",
          textHighlight: "rgba(233, 169, 77, 0.35)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
