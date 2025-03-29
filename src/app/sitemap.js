// src/app/sitemap.js
export default async function sitemap() {
    const baseUrl = "https://recreational-surfacing.com";
    
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/clients`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/systems`,
        lastModified: new Date(),
      },
    ];
  }