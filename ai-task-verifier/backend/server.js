import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 3002;

app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "Build AI TODO App",
    description: "Create TODO with AI suggestions",
    bounty: 2000,
    status: "OPEN"
  },
  {
    id: 2,
    title: "Smart Contract Auditor",
    description: "Build security analysis tool",
    bounty: 3000,
    status: "OPEN"
  }
];

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: Date.now() });
});

app.get('/api/tasks', (req, res) => {
  console.log('📋 Tasks requested');
  res.json({ success: true, tasks });
});

app.post('/api/analyze', async (req, res) => {
  try {
    const { github_url } = req.body;
    console.log('🔍 Analyzing:', github_url);
    
    const match = github_url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) return res.status(400).json({ error: 'Invalid URL' });
    
    const [, owner, repo] = match;
    const r = await axios.get(`https://api.github.com/repos/${owner}/${repo.replace('.git', '')}`);
    
    console.log('✅ Analysis complete:', r.data.name);
    
    res.json({
      success: true,
      analysis: {
        name: r.data.name,
        stars: r.data.stargazers_count,
        language: r.data.language,
        quality_score: 75
      }
    });
  } catch (err) {
    console.error('❌ Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log('🚀 Backend running: http://localhost:' + PORT);
  console.log('📡 Health: http://localhost:' + PORT + '/health');
  console.log('📋 Tasks: http://localhost:' + PORT + '/api/tasks');
});
