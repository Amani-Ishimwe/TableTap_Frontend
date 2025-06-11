# TableTap Restaurant Website

Welcome to **TableTap**, a modern, multi-page static website crafted to streamline the dining experience! Whether you want to order food online, reserve a table, or scan a QR code to view a restaurant’s menu, TableTap has you covered. This project is a front-end demo showcasing five CSS frameworks—**Bootstrap**, **Tailwind CSS**, **Bulma**, **Foundation**, and **Materialize**—to create a responsive, user-friendly interface. With features like a **Bootstrap off-canvas menu** for navigation and **DataTables** for interactive tables, TableTap is a great starting point for a restaurant platform. Let’s dive into what makes this project tick, how to set it up, and where each framework shines!

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Framework Usage](#framework-usage)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running Locally](#running-locally)
- [Deploying to Vercel](#deploying-to-vercel)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)
- [Resources](#resources)
- [License](#license)

## Project Overview
TableTap is a static website designed to simulate a restaurant platform where users can:
- Browse restaurants and menus.
- Reserve tables via a booking form.
- View order history or status.
- Contact restaurants for inquiries.
- Access menus by scanning a QR code (simulated on the Menu page).

Built with **HTML**, **CSS**, and **JavaScript**, the site uses CDN-hosted libraries for its five CSS frameworks, jQuery (for DataTables), and Bootstrap’s JavaScript. While currently static, TableTap can be extended with a backend (e.g., Node.js/Express with Prisma, as in your previous RBAC setup) to support dynamic features like order processing or QR code generation.

## Features
- **Bootstrap Off-Canvas Navigation**: A sleek, responsive menu that slides in on mobile, ensuring smooth navigation across all pages.
- **DataTables**: Interactive tables on the Menu and Orders pages, with sorting, searching, and pagination for menu items and order details.
- **Responsive Design**: Optimized for mobile, tablet, and desktop using the frameworks’ responsive utilities.
- **Five CSS Frameworks**: Each page leverages a different framework to showcase diverse styling approaches.
- **QR Code Simulation**: The Menu page mimics what users see after scanning a table’s QR code.

## File Structure
Here’s how the project is organized:
```
tabletap/
├── index.html              # Home page (Tailwind CSS)
├── menu.html               # Menu page (Bulma + DataTables)
├── reservations.html       # Reservations page (Foundation)
├── orders.html             # Orders page (Materialize + DataTables)
├── contact.html            # Contact page (Bootstrap)
├── css/
│   └── styles.css          # Custom CSS for minor overrides
├── js/
│   └── scripts.js          # Custom JavaScript for DataTables initialization
├── images/
│   └── placeholder.jpg     # Placeholder image (600x400px)
└── README.md               # This documentation
```

## Framework Usage
Each page uses a different CSS framework to highlight its unique strengths, while Bootstrap’s off-canvas navigation ensures consistent site-wide navigation. Here’s where each framework is applied:

- **Bootstrap** (`contact.html`):
  - Powers the **Contact page** with a clean, responsive form for user inquiries.
  - Provides the **off-canvas navigation menu** across all pages, offering a mobile-friendly slide-in menu.
  - Chosen for its robust components and widespread adoption, making navigation and forms look polished.

- **Tailwind CSS** (`index.html`):
  - Styles the **Home page**, featuring a vibrant hero section with a gradient background and a grid of featured restaurants.
  - Leverages Tailwind’s utility-first approach for rapid, custom styling without heavy CSS files.
  - Perfect for creating a modern, trendy look with fine-grained control over design.

- **Bulma** (`menu.html`):
  - Drives the **Menu page**, where a DataTable displays menu items like pizzas and desserts.
  - Offers a minimalist, modular design that pairs seamlessly with DataTables’ Bulma integration.
  - Ideal for clean layouts focused on content, simulating a QR code-scanned menu.

- **Foundation** (`reservations.html`):
  - Shapes the **Reservations page**, with a centered form for booking tables using Foundation’s XY grid system.
  - Ensures precise, responsive form layouts across devices.
  - Selected for its flexibility and structured approach to forms and grids.

- **Materialize** (`orders.html`):
  - Enhances the **Orders page**, where a DataTable shows order history with a Material Design aesthetic.
  - Brings Google’s Material Design principles for a bold, app-like feel with card-like tables and vibrant colors.
  - Chosen for its eye-catching style and DataTables compatibility.

## Prerequisites
Before setting up the project, ensure you have:
- A modern web browser (e.g., Chrome, Firefox) for testing.
- **Git** installed ([git-scm.com](https://git-scm.com)) for cloning or pushing to GitHub.
- **Node.js** (optional, for running a local server via `http-server`) from [nodejs.org](https://nodejs.org).
- A **GitHub account** for version control and Vercel deployment.
- A **Vercel account** ([vercel.com](https://vercel.com)) for hosting.

## Setup Instructions
1. **Clone or Download the Project**:
   - Clone via Git:
     ```bash
     git clone https://github.com/your-username/tabletap.git
     cd tabletap
     ```
   - Or download the zip folder and extract it to `tabletap/`.

2. **Add Placeholder Image**:
   - Save a 600x400px image (e.g., a food photo from [Unsplash](https://unsplash.com)) as `images/placeholder.jpg`.
   - Ensure the path in HTML files (`src="images/placeholder.jpg"`) is correct.

3. **Verify Files**:
   - Confirm all files (`index.html`, `menu.html`, `css/styles.css`, etc.) are in place as per the file structure.
   - Check that `README.md` is included.

## Running Locally
Test the site locally before deploying to ensure everything works.

### Option 1: Open Static Files
- Double-click `index.html` to open in a browser.
- Navigate using the off-canvas menu.
- **Note**: Some scripts (e.g., DataTables) may fail due to `file://` protocol CORS restrictions.

### Option 2: Use a Local HTTP Server (Recommended)
1. Install `http-server`:
   ```bash
   npm install -g http-server
   ```
2. Start the server in the `tabletap/` folder:
   ```bash
   http-server -p 8080
   ```
3. Visit `http://localhost:8080` in your browser.
4. Test DataTables (Menu, Orders) and off-canvas navigation.

### Option 3: VS Code Live Server
1. Install [Visual Studio Code](https://code.visualstudio.com).
2. Add the “Live Server” extension (by Ritwick Dey).
3. Open `tabletap/` in VS Code.
4. Right-click `index.html` > “Open with Live Server” (typically at `http://localhost:5500`).

## Deploying to Vercel
Host TableTap on Vercel for a live, publicly accessible site.

1. **Push to GitHub**:
   - Initialize a Git repository if not already done:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     ```
   - Create a repository on [GitHub](https://github.com) named `tabletap`.
   - Push your code:
     ```bash
     git remote add origin https://github.com/your-username/tabletap.git
     git branch -M main
     git push -u origin main
     ```

2. **Import to Vercel**:
   - Log in to [vercel.com](https://vercel.com) with your GitHub account.
   - Click **Add New** > **Project**.
   - Select your `tabletap` repository and click **Import**.
   - Configure:
     - Framework Preset: **Other** (static site).
     - Root Directory: `./`.
     - Build Command: Leave blank.
     - Output Directory: Leave blank.
   - Click **Deploy**.

3. **Access the Live Site**:
   - Vercel provides a URL (e.g., `tabletap.vercel.app`) after deployment.
   - Test all pages and features (e.g., DataTables, off-canvas menu).

4. **Update Site**:
   - Push changes to GitHub:
     ```bash
     git add .
     git commit -m "Update menu"
     git push origin main
     ```
   - Vercel automatically redeploys.

5. **Optional: Custom Domain**:
   - In Vercel’s dashboard, go to **Settings** > **Domains**.
   - Add your domain (e.g., `tabletap.com`) and update DNS settings at your registrar (e.g., Namecheap).

## Troubleshooting
- **404 on Subpages (e.g., `/menu`)**:
  - Ensure `menu.html` exists.
  - Add a `vercel.json` file for clean URLs:
    ```json
    {
      "cleanUrls": true
    }
    ```
  - Redeploy.
- **Images Not Loading**:
  - Verify `images/placeholder.jpg` is in the repository and paths are correct.
- **DataTables Not Working**:
  - Ensure jQuery loads before DataTables in `menu.html` and `orders.html`.
  - Check CDN connectivity.
- **Deployment Fails**:
  - Review Vercel’s build logs for missing files or errors.
  - Confirm `.gitignore` doesn’t exclude critical files (e.g., `images/`).
- **CORS Issues Locally**:
  - Use `http-server` or Live Server instead of `file://`.

## Future Enhancements
- **Backend Integration**: Add a Node.js/Express backend with Prisma (like your RBAC middleware) to save orders, reservations, and generate QR codes.
- **QR Code Generation**: Use QRCode.js to create dynamic QR codes linking to `menu.html`.
- **Payment Gateway**: Integrate Stripe for online payments.
- **Accessibility**: Add alt text to all images and test with WAVE for WCAG compliance.
- **SEO**: Include meta tags for better search visibility:
  ```html
  <meta name="description" content="TableTap: Order food, reserve tables, and scan QR menus at restaurants.">
  ```

## Resources
- **Frameworks**:
  - [Bootstrap](https://getbootstrap.com)
  - [Tailwind CSS](https://tailwindcss.com)
  - [Bulma](https://bulma.io)
  - [Foundation](https://get.foundation)
  - [Materialize](https://materializecss.com)
- **Libraries**:
  - [DataTables](https://datatables.net)
  - [jQuery](https://jquery.com)
- **Tools**:
  - [Vercel](https://vercel.com/docs)
  - [Git](https://git-scm.com)
  - [http-server](https://www.npmjs.com/package/http-server)
- **Tutorials**:
  - [Vercel Static Site Deployment](https://vercel.com/guides/how-to-deploy-a-static-site-on-vercel)
  - [DataTables Integration](https://datatables.net/examples/styling/bulma.html)

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you like!

---

Thanks for exploring TableTap! 🍽️ This project is a fun way to see five CSS frameworks in action while building a practical restaurant platform. If you need help extending it with a backend, adding payments, or tweaking the design, just let me know. Happy coding, and enjoy your virtual dining experience!