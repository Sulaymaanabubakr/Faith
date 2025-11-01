# Faith Tabernacle Website Replica

This project is a handcrafted replica of the Faith Tabernacle official website built with semantic HTML5, modern CSS and vanilla JavaScript. It mirrors the navigation flow, layout structure, and page content organisation observed on the reference site for internal comparison purposes.

## Overview

- Multi-page website including Home, About Us, The Mandate, Media Center, WOFBI, Christian Family, Downloads, Education, Contact and Give Online pages.
- Consistent header, sticky navigation, hero banners, call-to-action buttons and footer across the entire site.
- Responsive layout using CSS Grid and Flexbox with smooth scrolling, fade-in animations, scroll-to-top button and a floating WhatsApp contact button.
- Lightweight codebase without UI frameworks; typography leverages Google Fonts (Poppins & Open Sans) and Remix Icons.

## How This Build Replicates the Reference Site

- Page structure, section hierarchy and navigation order mirror the Faith Tabernacle reference site.
- Hero sections, announcements, ministries, media highlights, call-to-action blocks and contact segments are recreated using the mandated colour palette (deep red, gold, white and light grey).
- Inner pages feature matching hero banners, breadcrumbs, and content segments describing the church mandate, ministries, education commission, and giving options.
- Interactive behaviours include sticky header, responsive mobile navigation, smooth anchor scrolling, intersection-based fade-in animations, and CTA hover states as observed on the live site.

## Folder Structure

```
root/
├── index.html
├── about.html
├── mandate.html
├── media.html
├── wofbi.html
├── family.html
├── downloads.html
├── education.html
├── contact.html
├── give.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
└── README.md
```

## Deployment Guide

1. **Install dependencies:** None required. The project is fully static.
2. **Preview locally:** Serve the project root with any static server, e.g. `python3 -m http.server 8000`, and navigate to `http://localhost:8000` in a browser.
3. **Hosting:** Upload the contents of the repository to any static hosting service (GitHub Pages, Netlify, Vercel, etc.). Ensure the root directory is served so that relative links between pages resolve correctly.
4. **Updates:** Modify the HTML files for content changes, `assets/css/styles.css` for styling adjustments, and `assets/js/main.js` for interactive behaviour.

## License

This project is intended for internal comparison and review purposes only.
