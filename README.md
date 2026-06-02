# MindCheck — Mental Wellness Assessment

A fully client-side mental wellness assessment powered by Google Gemini AI.

## Setup

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2. Add your API key
```bash
cp .env.example .env
```
Open `.env` and replace `your_gemini_api_key_here` with your actual Gemini key.  
Get a free key at: https://aistudio.google.com/app/apikey

### 3. Generate config.js
```bash
node build-config.js
```
This reads your `.env` and creates `config.js` which the HTML loads at runtime.

### 4. Open the site
Open `examination-system.html` directly in your browser — no server needed.

---

## File structure

| File | Committed? | Purpose |
|------|-----------|---------|
| `examination-system.html` | Yes | Main app |
| `config.js` | **No** | Holds API key for browser — gitignored |
| `.env` | **No** | Holds API key for build script — gitignored |
| `.env.example` | Yes | Safe template showing what `.env` needs |
| `build-config.js` | Yes | Generates `config.js` from `.env` |
| `.gitignore` | Yes | Keeps `.env` and `config.js` off GitHub |

## Important

Your API key is **never pushed to GitHub**. The `.gitignore` blocks both `.env` and `config.js`.  
Anyone cloning the repo must supply their own key by following the setup steps above.
