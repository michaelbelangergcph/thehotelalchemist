# The Hotel Alchemist — website v1

## Run it locally
1. Install Node.js (18 or newer) if you don't have it: https://nodejs.org
2. In this folder, run: npm install
3. Then run: npm run dev
4. Open the local address it prints (usually http://localhost:5173)

## Change the words
Open src/App.jsx. Every headline, sub-headline, card and button label is
plain text between quote marks. Change the words, save the file, and if
the dev server is running you'll see the update instantly.

## Change the colors or spacing
Open src/App.css. The top of the file has a list of named values
(--navy, --ivory, --brass, and so on). Change a value there and it
updates everywhere that color is used.

## Publish an update
git add -A
git commit -m "describe your change here"
git push
Vercel picks up the push automatically and republishes within a minute.
