Elisabeth Gogolishvili | Photography Portfolio
A premium, minimalist photography portfolio designed with a magazine-style aesthetic. This application features dynamic client albums, a custom light-box gallery, and a fully responsive editorial layout optimized for high-resolution displays (1440px+).

🛠 Features
Magazine Aesthetic: High-end typography and a grayscale-to-color hover interaction model.

Dynamic Client Albums: Automated gallery generation based on a centralized data structure.

Fully Responsive: Custom-built layouts for Mobile, Tablet, and Desktop (specifically optimized for 1440px width).

Interactive Gallery: Integrated Lightbox for immersive, full-screen image viewing.

Commercial Focus: Dedicated sections for editorial and commercial photography projects.

🚀 Tech Stack
React 18 - UI Logic

Tailwind CSS - Styling & Responsive Design

React Router v6 - Dynamic Routing for Client Albums

Lucide React - Premium Iconography

Vite - Build Tooling



src/
 ├── assets/          # High-res photography and brand assets
 ├── components/      # Reusable UI (Footer, Lightbox, Slider)
 ├── data/            # Project & Album configuration files
 ├── pages/           # Page-level components (About, Clients, AlbumView)
 └── App.jsx          # Routing and layout configuration


📸 Adding New Albums
To add a new client gallery, update the src/data/clientAlbums.js file:

Import your images at the top of the file.

Add a new object to the clientAlbums array:


<img width="675" height="259" alt="image" src="https://github.com/user-attachments/assets/b799d470-9d63-4bf4-9f69-6b6eb93a890b" />


🎨 Design System
Colors: Deep Black (#000000), Zinc Grays, Pure White.

Typography: * Display: Cormorant Garamond (Italic / Light)

Sans: Montserrat / Inter (Tracking-widest)



