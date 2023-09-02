import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";

// Define an array of URLs for your website's pages
const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 }, // Homepage
  { url: "/explore/movie", changefreq: "weekly", priority: 0.8 }, // About page
  { url: "/explore/tv", changefreq: "weekly", priority: 0.8 }, // About page
  // Add more URLs for your website's pages
];

// Create a writable stream
const sitemapStream = new SitemapStream({ hostname: "https://nixverse.vercel.app" });

// Pipe your URLs into the stream
urls.forEach((url) => {
  sitemapStream.write(url);
});

// End the stream
sitemapStream.end();

// Convert the stream to a promise
streamToPromise(sitemapStream)
  .then((sitemapXml) => {
    // Specify the location where you want to save the sitemap
    const sitemapFilePath = "public/sitemap.xml"; // Adjust the path as needed

    // Write the sitemap XML to a file
    fs.writeFileSync(sitemapFilePath, sitemapXml);

    console.log(`Sitemap generated at ${sitemapFilePath}`);
  })
  .catch((error) => {
    console.error("Error generating sitemap:", error);
  });
