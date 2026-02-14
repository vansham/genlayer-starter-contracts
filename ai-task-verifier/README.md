# 🧠 AI Task Verifier - GenLayer Project

AI-powered task verification platform built on GenLayer blockchain with intelligent contract consensus.

## 🎯 Overview

Decentralized marketplace where task creators post bounties and workers submit GitHub repositories for AI-powered verification. Uses GenLayer's LLM consensus mechanism for trustless validation.

## ✨ Features

- **Smart Contract**: GenLayer intelligent contract with AI verification
- **Task Management**: Create, claim, and verify tasks on-chain
- **GitHub Integration**: Automatic repository analysis
- **AI Verification**: LLM consensus validates submissions
- **Quality Scoring**: Automated code quality assessment
- **Reputation System**: Worker reputation tracking
- **Anti-Spam**: AI-powered spam detection

## 🏗️ Architecture
```
User → Frontend (React) → Backend (Node.js) → GenLayer Node → AI Validators → Consensus
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- GitHub Codespaces (recommended)
- GenLayer CLI (for deployment)

### Backend Setup
```bash
cd backend
npm install
npm start
```
Backend runs on: `http://localhost:3002`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: `http://localhost:5175`

## 🧪 Testing

1. Open frontend in browser
2. Browse available tasks
3. Submit GitHub repo: `https://github.com/facebook/react`
4. Click "Analyze" to see AI verification
5. View quality scores and analysis

## 📁 Project Structure
```
ai-task-verifier/
├── contracts/
│   └── TaskVerifier.py          # GenLayer intelligent contract
├── backend/
│   ├── package.json
│   └── server.js                # Express API + GitHub integration
├── frontend/
│   ├── package.json
│   └── src/
│       ├── main.jsx
│       └── App.jsx              # React UI
├── DEPLOYMENT.md                # Deployment guide
└── README.md
```

## 🔗 Smart Contract

**Location:** `contracts/TaskVerifier.py`

**Key Functions:**
- `create_task(title, description, bounty)` - Create new task
- `claim_task(task_id)` - Claim a task
- `submit_proof(task_id, github_url, repo_data)` - Submit work
- `verify_with_ai(task_id)` - AI verification with consensus
- `get_all_tasks()` - Fetch all tasks
- `get_open_tasks()` - Fetch open tasks

**AI Verification:**
```python
result = call_llm_with_principle(
    verification_prompt,
    eq_principle="Be fair and objective"
)
```

## 🔧 Tech Stack

**Blockchain:**
- GenLayer (Intelligent Contracts)
- Python (Contract language)
- LLM Consensus (AI verification)

**Backend:**
- Node.js + Express
- GitHub API integration
- Axios for HTTP requests

**Frontend:**
- React 18
- Vite (build tool)
- Axios for API calls

## 🎨 Features Breakdown

### Task Creation
- Title, description, requirements
- Bounty amount (min 100 tokens)
- Deadline setting
- Verification criteria

### GitHub Analysis
- File count and structure
- Lines of code
- Commit history
- README detection
- Language analysis
- Quality scoring (0-100)

### AI Verification
- Requirement matching
- Code quality assessment
- Documentation check
- Effort level detection
- Anti-plagiarism logic

### Reputation System
- Tasks completed tracking
- Rejection penalties
- Score-based ranking
- Leaderboard

## 📊 API Endpoints

### GET `/health`
Health check

### GET `/api/tasks`
Get all tasks

### POST `/api/analyze`
Analyze GitHub repository
```json
{
  "github_url": "https://github.com/user/repo"
}
```

## 🚧 GenLayer Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment guide.

### Quick Deploy
```bash
# Install GenLayer CLI
pip3 install genlayer

# Initialize
genlayer init

# Deploy contract
genlayer deploy contracts/TaskVerifier.py
```

## 🎯 Use Cases

- **Bounty Programs**: Companies post coding tasks
- **Hackathons**: AI-verified submissions
- **Open Source**: Reward contributors
- **Education**: Assignment verification
- **Freelancing**: Automated quality checks

## 🔐 Security

- Input validation on all endpoints
- Rate limiting (API)
- GitHub URL sanitization
- CORS configuration
- Safe API key handling

## 🎓 How It Works

1. **Task Creator** posts task with bounty
2. **Worker** claims task and builds solution
3. **Worker** submits GitHub repository
4. **Backend** analyzes repo metrics
5. **Smart Contract** triggers AI verification
6. **AI Validators** analyze independently
7. **GenLayer** reaches consensus (VERIFIED/REJECTED)
8. **Payment** released automatically if verified

## 📈 Quality Metrics

**Repository Analysis:**
- File count (max 20 points)
- Lines of code (max 25 points)
- README presence (max 20 points)
- Commit count (max 20 points)
- Language diversity (max 10 points)
- Description quality (max 5 points)

**Total Score:** 0-100

## 🌟 Future Enhancements

- [ ] Wallet integration (MetaMask)
- [ ] Payment distribution system
- [ ] Dispute resolution
- [ ] Task NFT certificates
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] ZK proof integration

## 📸 Screenshots

### Task List
![Tasks](docs/tasks.png)

### Verification Results
![Results](docs/results.png)

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines.

## 📄 License

MIT License

## 🙏 Acknowledgments

- Built on GenLayer blockchain platform
- GitHub API for repository data
- Inspired by decentralized task marketplaces

## 📞 Contact

- GitHub: [@vansham](https://github.com/vansham)
- Project: [genlayer-starter-contracts/ai-task-verifier](https://github.com/vansham/genlayer-starter-contracts/tree/main/ai-task-verifier)

---

**Built with ❤️ for GenLayer Ecosystem**

For questions or support, open an issue on GitHub!
