# Mohammed Noufal Rizwan: Portfolio

## Run locally
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # outputs dist/
    npm run preview  # serve the production build

## Edit content
All content lives in `src/data.js`. Add project links via the `links` array. Replace `public/Mohammed_Noufal_Rizwan_Resume.pdf` to update the download.

## Deploy
Vercel: push to GitHub, import the repo at vercel.com/new (Vite is auto-detected), click Deploy.
Netlify: push to GitHub, "Add new site > Import an existing project", build `npm run build`, publish `dist`.
