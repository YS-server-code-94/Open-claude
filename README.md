# SHAHEEN-YS


<p align="center">
  <img src="https://i.postimg.cc/m22gQSbf/SHAHEEN-YS.png" alt="SHAHEEN-YS" width="360" />
</p>

# SHAHEEN-YS
## Open Gateway for AI models — Rebranded & Customized

> Arabic / English

دعاء لأهلنا في فلسطين 🇵🇸

Prayer for our people in Palestine 🇵🇸

---

[![Project Name](https://img.shields.io/badge/Project-SHAHEEN--YS-orange)](#) [![Status](https://img.shields.io/badge/Status-Active-brightgreen)](#) [![License](https://img.shields.io/badge/License-MIT-blue)](#)


## About
SHAHEEN-YS is a customized open-source UI and Gateway originally based on an Open Claude replica. It provides a dark-themed mobile-like web UI for interacting with multiple AI providers, a lightweight API proxy, and a developer-friendly deployment stack (Docker / PostgreSQL / Railway-ready).


## Project Snapshot
<p align="center">
  <img src="https://i.postimg.cc/ncchv1HZ/SHAHEEN-YSs.png" alt="screenshot-1" width="280" style="margin:6px;" />
  <img src="https://i.postimg.cc/m22gQSbf/SHAHEEN-YS.png" alt="screenshot-2" width="280" style="margin:6px;" />
  <img src="https://i.postimg.cc/sDDgpJVr/SHAHEEN.jpg" alt="screenshot-3" width="280" style="margin:6px;" />
</p>

---

## Project details
- Project Name: SHAHEEN-YS
- Created: 2026-07-29
- Maintainer / Developer: Yousef Z. A. Shaheen (🇵🇸)

### Developer Contacts
- Instagram: [@1.0_v_](https://www.instagram.com/1.0_v_?igsh=N2N5MXNwN3p4ZDY2)
- Telegram: [@Y9_S4](https://t.me/Y9_S4)
- TikTok: https://www.tiktok.com/@zix8ii
- Facebook: https://www.facebook.com/share/1HrfmU67VS/
- WhatsApp: https://wa.link/lc6f5w
- Support (Telegram): [@Y9_S4](https://t.me/Y9_S4)

---

## Badges & Highlights
- 🚀 Project Name
- 🌌 About
- ✨ Overview
- 🎯 Vision
- 💡 Mission
- 🔥 Highlights
- ⭐ Features
- 🧠 AI Capabilities
- 🤖 Supported Models
- 🔌 Integrations
- 🧩 Plugins
- 🛠 Tools
- 🏗 Architecture
- 📐 System Design
- 🔄 Workflow
- 📊 Performance
- 🔐 Security
- 🛡 Privacy
- 🌐 Deployment
- ☁️ Cloud Deployment
- 🖥 Self Hosting
- 📦 Installation
- ⚙️ Configuration
- 🔑 Environment Variables
- 💻 Development
- 🎨 Frontend Development
- ⚙️ Backend Development
- 🧪 Testing
- ✅ Quality Assurance
- 📚 Documentation
- 🔗 API Documentation
- 🗄 Database
- 🧠 Machine Learning Pipeline
- 📁 Project Structure
- 🗂 Repository Structure
- 🧬 Technology Stack
- 🛠 Developer Tools
- 🧰 Requirements
- 📋 Prerequisites
- 🚀 Quick Start
- 📝 Usage
- 💬 Examples
- 🎨 Customization
- 🔧 Advanced Configuration
- 🧱 Building From Source
- 🐳 Docker
- ☸️ Kubernetes
- ☁️ Infrastructure
- 🔄 CI/CD
- 🔁 Continuous Integration
- 📈 Roadmap
- 🗓 Milestones
- 🚧 Current Status
- 🐛 Known Issues
- 📝 Changelog
- 🔄 Migration Guide
- 🤝 Contributing
- 🧑‍💻 Contributors
- 💖 Sponsors
- 🌍 Community
- 💬 Discussions
- 📢 Announcements
- 📜 License
- ⚖️ Legal
- 🙏 Acknowledgements
- ⭐ Star History
- 📞 Contact
- 🔗 Links
- 🏆 Credits

---

## Features
- Dark mobile-first UI
- Multi-provider AI gateway (OpenAI, Anthropic, Mistral, Groq, Google, etc.)
- Local branding and theming (SHAHEEN-YS)
- Admin login endpoint (server/api)
- Docker + docker-compose + Railway example
- PostgreSQL support for future persistence

## Environment Variables
Important variables are listed in `.env.example`. Key additions for SHAHEEN-YS:

- MAX_CONCURRENT_TASKS_YS — Max background concurrent tasks (default: 4)
- LOG_LEVEL_YS — Logging level (e.g. info, debug)
- TZ_YS — Timezone used by the app
- START_FROM_LATEST_YS — Whether to start processing from latest events

Gateway variables (example):
- GATEWAY_URL_YS
- GATEWAY_API_KEY_YS
- GATEWAY_TIMEOUT_YS

Also the app uses VITE_ prefixed variables for keys intended to the frontend. Keep secrets on the server or platform environment.

## Installation (Quick Start)
1. Copy `.env.example` to `.env` and fill values.
2. Install frontend deps:

```bash
npm ci
npm run dev
```

3. Start backend (optional):

```bash
cd server
npm ci
npm run dev
```

4. Or run with Docker Compose:

```bash
cp .env.example .env
docker compose up --build
```

## Screenshots
See the images above for the app look & feel. Add more screenshots to `public/` and update this file when ready.

## Contribution
Contributions are welcome. Open an issue or a pull request for suggested changes.

## License
This project uses MIT-style license (check LICENSE file).

---

## Contact & Credits
Developer: Yousef Z. A. Shaheen 🇵🇸

Thank you and peace for Palestine. دعاء لأهلنا في فلسطين 🇵🇸
