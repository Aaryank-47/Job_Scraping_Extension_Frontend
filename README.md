# 🧩 Job Scraping Chrome Extension (Frontend)

This is a **Chrome Extension frontend** built using **Vite** that allows users to scrape job listings from LinkedIn and Indeed via a backend FastAPI server.

---

## 🚀 How to Use

```bash
### 1. Clone the Repository


git clone https://github.com/Aaryank-47/Job_Scraping_Extension_Frontend.git
cd Job_Scraping_Extension_Frontend

### 2. Install Dependencies
npm install

### 3. Build the Extension
npm run build


After running this command, a dist/ folder will be generated. This folder contains the final build of the Chrome Extension.

### 4. Load Extension in Chrome
Open Google Chrome.

Go to chrome://extensions/.

Enable Developer Mode (top-right corner).

Click on Load Unpacked.

Select the dist/ folder created after the build.

✅ Your Chrome Extension is now ready to use!


🔧 Server Setup Required

Use this FastAPI server repo:
👉 https://github.com/Aaryank-47/Job_Scraping_fast_api

To Run the backend server:
git clone https://github.com/Aaryank-47/Job_Scraping_fast_api.git
cd Scrape_API
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn api:app --reload


🛠️ Built With
😎Vite – Next generation frontend tooling

😎JavaScript - Backend Server

😎FastAPI – Fast API server for job scraping