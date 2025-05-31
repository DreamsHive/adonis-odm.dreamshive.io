/**
 * Navigation utility for managing page order and relationships
 * This creates a flat, ordered list of all documentation pages
 */

export interface NavigationItem {
  title: string;
  href: string;
  category?: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface PageNavigation {
  previous?: NavigationItem;
  next?: NavigationItem;
  current?: NavigationItem;
}

/**
 * Complete navigation structure - this is the single source of truth
 * for page order and should match the sidebar navigation
 */
export const navigationSections: NavigationSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/introduction",
        category: "Getting Started",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        category: "Getting Started",
      },
      {
        title: "Configuration",
        href: "/docs/configuration",
        category: "Getting Started",
      },
      {
        title: "Commands",
        href: "/docs/commands",
        category: "Getting Started",
      },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      {
        title: "Models & Decorators",
        href: "/docs/models",
        category: "Core Concepts",
      },
      {
        title: "Query Builder",
        href: "/docs/query-builder",
        category: "Core Concepts",
      },
      {
        title: "CRUD Operations",
        href: "/docs/crud",
        category: "Core Concepts",
      },
      {
        title: "Embedded Documents",
        href: "/docs/embedded-documents",
        category: "Core Concepts",
      },
      {
        title: "Relationships",
        href: "/docs/relationships",
        category: "Core Concepts",
      },
    ],
  },
  {
    title: "Advanced Features",
    items: [
      {
        title: "Database Transactions",
        href: "/docs/transactions",
        category: "Advanced Features",
      },
      {
        title: "Connection Management",
        href: "/docs/connections",
        category: "Advanced Features",
      },
      {
        title: "Pagination",
        href: "/docs/pagination",
        category: "Advanced Features",
      },
      {
        title: "Model Lifecycle",
        href: "/docs/lifecycle",
        category: "Advanced Features",
      },
      {
        title: "Validation",
        href: "/docs/validation",
        category: "Advanced Features",
      },
      {
        title: "Error Handling",
        href: "/docs/error-handling",
        category: "Advanced Features",
      },
      {
        title: "Performance",
        href: "/docs/performance",
        category: "Advanced Features",
      },
      {
        title: "Testing",
        href: "/docs/testing",
        category: "Advanced Features",
      },
      {
        title: "Search Documentation",
        href: "/docs/search",
        category: "Advanced Features",
      },
    ],
  },
  {
    title: "API Reference",
    items: [
      {
        title: "BaseModel",
        href: "/api/base-model",
        category: "API Reference",
      },
      {
        title: "Query Builder",
        href: "/api/query-builder",
        category: "API Reference",
      },
      {
        title: "EmbeddedQueryBuilder",
        href: "/api/embedded-query-builder",
        category: "API Reference",
      },
      {
        title: "Database Manager",
        href: "/api/database-manager",
        category: "API Reference",
      },
      {
        title: "Transaction Client",
        href: "/api/transaction-client",
        category: "API Reference",
      },
    ],
  },
  {
    title: "Examples",
    items: [
      {
        title: "Basic Usage",
        href: "/examples/basic-usage",
        category: "Examples",
      },
      {
        title: "Advanced Queries",
        href: "/examples/advanced-queries",
        category: "Examples",
      },
      {
        title: "Embedded Documents",
        href: "/examples/embedded-documents",
        category: "Examples",
      },
      {
        title: "Transactions",
        href: "/examples/transactions",
        category: "Examples",
      },
    ],
  },
];

/**
 * Flattened list of all pages in order
 */
export const allPages: NavigationItem[] = navigationSections.flatMap(
  (section) => section.items
);

/**
 * Get navigation info for a specific page
 * @param currentPath - The current page path
 * @returns Object with previous, next, and current page info
 */
export function getPageNavigation(currentPath: string): PageNavigation {
  // Normalize the path (remove trailing slash if present)
  const normalizedPath =
    currentPath.endsWith("/") && currentPath !== "/"
      ? currentPath.slice(0, -1)
      : currentPath;

  const currentIndex = allPages.findIndex(
    (page) => page.href === normalizedPath
  );

  if (currentIndex === -1) {
    return {}; // Page not found in navigation
  }

  const current = allPages[currentIndex];
  const previous = currentIndex > 0 ? allPages[currentIndex - 1] : undefined;
  const next =
    currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : undefined;

  return {
    previous,
    next,
    current,
  };
}

/**
 * Check if a path is active (current page or parent path)
 * @param href - The href to check
 * @param currentPath - The current page path
 * @returns boolean indicating if the path is active
 */
export function isActive(href: string, currentPath: string): boolean {
  return currentPath === href || currentPath.startsWith(href + "/");
}

/**
 * Check if any item in a group is active
 * @param items - Array of navigation items
 * @param currentPath - The current page path
 * @returns boolean indicating if any item in the group is active
 */
export function isGroupActive(
  items: NavigationItem[],
  currentPath: string
): boolean {
  return items.some((item) => isActive(item.href, currentPath));
}

/**
 * Get filtered navigation sections based on the current path
 * @param currentPath - The current page path
 * @returns Array of navigation sections relevant to the current path
 */
export function getFilteredNavigationSections(
  currentPath: string
): NavigationSection[] {
  // Determine the base path (first segment after /)
  const pathSegments = currentPath.split("/").filter(Boolean);
  const basePath = pathSegments[0];

  switch (basePath) {
    case "docs":
      // For /docs/* paths, show documentation-related sections
      return navigationSections.filter((section) =>
        ["Getting Started", "Core Concepts", "Advanced Features"].includes(
          section.title
        )
      );

    case "api":
      // For /api/* paths, show only API Reference
      return navigationSections.filter(
        (section) => section.title === "API Reference"
      );

    case "examples":
      // For /examples/* paths, show only Examples
      return navigationSections.filter(
        (section) => section.title === "Examples"
      );

    default:
      // For other paths (like home page), show all sections
      return navigationSections;
  }
}
