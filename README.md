# SeaRoute AI — GitHub Pages Web Edition

This is a static, GitHub Pages-ready web adaptation of the uploaded SeaRoute AI Android project. It preserves the main concepts visible in the Android source: Route Planner, Fleet Map, Carbon CII, Safety & Ethics, and AI Co-Pilot.

## Run locally
Open `index.html` in a browser. For best results, use a simple local web server or the GitHub Pages deployment.

## Publish on GitHub Pages
1. Create or open a GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, and the `assets/` folder to the repository root.
3. Commit the files.
4. Open **Settings → Pages**.
5. Under build/deployment, select **Deploy from a branch**, choose `main` and `/(root)`, then Save.
6. Wait for GitHub Pages to publish, then open the provided site URL. If an old version is cached, hard refresh the browser.

## Implemented
- Responsive dashboard and mobile navigation.
- English/Bangla UI switch with language preference persistence.
- Light/dark display toggle.
- Route-time, fuel and fuel-cost estimates based on user inputs.
- Saved trip plans in browser local storage.
- Interactive pre-departure checklist saved in browser local storage.
- Simple fuel-based CO₂ estimate with clear non-compliance disclaimer.
- Fleet map illustration explicitly labeled as demo/not for navigation.
- Local maritime safety guidance helper.

## Important limitations
- This is a static website; it does **not** include a backend or live marine-data connection.
- The co-pilot currently uses local prepared guidance, not a real Gemini API call.
- No live vessel tracking, official warning feed, GPS, certified routing, or rescue dispatch is implemented.
- Never put a Gemini API key or any other secret in `app.js` or another public frontend file. To add real Gemini AI, configure a secure server-side endpoint/backend and call that endpoint from the website.
- Carbon figures are estimates from the inputs and are not an official IMO CII rating.
- Saved trips and checklist state are stored in the current browser only and do not sync across devices.

## Project files
- `index.html` — app structure and pages
- `styles.css` — responsive ocean-themed UI
- `app.js` — navigation, language switching, trip calculations, local storage and guidance helper
- `assets/` — image assets extracted from the supplied Android project
