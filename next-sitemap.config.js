/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://wndwappliancerepair.com",
  generateRobotsTxt: false, // robots.txt is managed manually in /public
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  additionalPaths: async (config) => [],
  transform: async (config, path) => {
    // Priority overrides per page type
    const priorityMap = {
      "/": 1.0,
    };

    // Service pages
    if (path.startsWith("/services/") && path !== "/services/") {
      return { loc: path, priority: 0.9, changefreq: "monthly" };
    }
    if (path === "/services/") {
      return { loc: path, priority: 0.6, changefreq: "monthly" };
    }

    // Brand pages
    if (path.startsWith("/brands/") && path !== "/brands/") {
      return { loc: path, priority: 0.8, changefreq: "monthly" };
    }
    if (path === "/brands/") {
      return { loc: path, priority: 0.6, changefreq: "monthly" };
    }

    // City pages (flat URL ending in -appliance-repair)
    if (path.endsWith("-appliance-repair/") || path.endsWith("-appliance-repair")) {
      return { loc: path, priority: 0.9, changefreq: "monthly" };
    }

    // B2B pages
    if (
      path.includes("property-management") ||
      path.includes("vacation-rental")
    ) {
      return { loc: path, priority: 0.9, changefreq: "monthly" };
    }

    // Emergency page
    if (path.includes("emergency")) {
      return { loc: path, priority: 0.9, changefreq: "monthly" };
    }

    // Blog posts
    if (path.startsWith("/blog/") && path !== "/blog/") {
      return { loc: path, priority: 0.7, changefreq: "weekly" };
    }

    // Static pages
    if (["/about/", "/contact/", "/faq/"].includes(path)) {
      return { loc: path, priority: 0.5, changefreq: "yearly" };
    }

    return {
      loc: path,
      priority: priorityMap[path] ?? config.priority,
      changefreq: config.changefreq,
    };
  },
};
