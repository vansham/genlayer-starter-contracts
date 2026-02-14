import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3002/api/tasks')
      .then(r => setTasks(r.data.tasks))
      .catch(console.error);
  }, []);

  const analyze = async () => {
    if (!url) return alert('GitHub URL dalo');
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3002/api/analyze', { github_url: url });
      setResult(res.data);
    } catch (err) {
      alert('Error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)', padding: '30px', borderRadius: '10px', color: 'white', marginBottom: '30px' }}>
        <h1>🧠 AI Task Verifier</h1>
        <p>GenLayer AI-Powered Verification</p>
      </div>

      <h2>📋 Available Tasks</h2>
      {tasks.map(t => (
        <div key={t.id} style={{ border: '1px solid #ddd', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
          <h3>{t.title}</h3>
          <p>{t.description}</p>
          <p><b>Bounty:</b> {t.bounty} tokens | <b>Status:</b> {t.status}</p>
        </div>
      ))}

      <hr style={{ margin: '30px 0' }} />

      <h2>📤 Submit Proof</h2>
      <input 
        value={url} 
        onChange={e => setUrl(e.target.value)} 
        placeholder="https://github.com/user/repo"
        style={{ width: '100%', padding: '12px', fontSize: '16px', marginBottom: '10px' }}
      />
      <button onClick={analyze} disabled={loading} style={{ padding: '12px 24px', background: loading ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        {loading ? '⏳ Analyzing...' : '🔍 Analyze'}
      </button>

      {result && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#e7f3ff', borderRadius: '5px' }}>
          <h3>✅ Results</h3>
          <p><b>Name:</b> {result.analysis.name}</p>
          <p><b>Stars:</b> {result.analysis.stars}</p>
          <p><b>Language:</b> {result.analysis.language}</p>
          <p><b>Quality:</b> {result.analysis.quality_score}/100</p>
        </div>
      )}
    </div>
  );
}

export default App;
