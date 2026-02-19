# 🛡️ DecentralAudit

AI-Powered Smart Contract Security Auditor on GenLayer

## 🎯 Problem
Smart contracts secure $100B+ in crypto assets. Manual audits are slow and expensive. Inspired by OpenAI's EVM-Bench which showed AI can detect vulnerabilities with 72% accuracy.

## 💡 Solution
DecentralAudit uses GenLayer's AI consensus to automatically audit Solidity smart contracts. 5 AI validators analyze code for vulnerabilities and provide on-chain security certificates.

## ✨ Features
- 🤖 AI-powered security analysis
- ⚡ Instant results (30-60 seconds)
- 🔒 On-chain audit certificates
- 📊 Security score 0-100
- 🎯 Vulnerability detection:
  - Reentrancy attacks
  - Access control issues
  - Integer overflow
  - Unchecked external calls

## 🚀 Tech Stack
- **Frontend**: Next.js 15 + TypeScript + Tailwind
- **Smart Contract**: GenLayer Python Intelligent Contract
- **AI**: gl.nondet.exec_prompt
- **Consensus**: gl.eq_principle.strict_eq (5 validators)

## 🎥 Demo
[Live Demo](https://decentralaudit.vercel.app)

## 📸 Screenshots
![Homepage](./docs/screenshot.png)

## 🏗️ Architecture
```
User → Frontend → GenLayer Contract → 5 AI Validators → Consensus → Result
```

## 🔧 Local Development
```bash
cd frontend
npm install
npm run dev
```

## 🌐 Deployment
- Frontend: Vercel
- Contract: GenLayer Testnet Asimov

## 📊 Impact
- Solves $100B smart contract security problem
- Makes security audits accessible to everyone
- On-chain proof of security analysis
- Inspired by cutting-edge AI research (EVM-Bench)

## 🏆 Built For
GenLayer Testnet Asimov Builder Program

## 📄 License
MIT
