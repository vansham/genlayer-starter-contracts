"use client";

import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAudit = async () => {
    setLoading(true);
    
    // Simulated AI audit (replace with real contract call later)
    setTimeout(() => {
      setResult({
        score: 75,
        critical_issues: 1,
        high_issues: 2,
        medium_issues: 3,
        summary: "Contract has security vulnerabilities that need attention",
        vulnerabilities: [
          "Missing access control on withdraw function",
          "Potential reentrancy vulnerability in transfer",
          "Unchecked return value"
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            🛡️ DecentralAudit
          </h1>
          <p className="text-xl text-purple-300">
            AI-Powered Smart Contract Security Auditor
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Powered by GenLayer • Inspired by OpenAI EVM-Bench
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          
          {/* Code Input */}
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              📝 Paste Solidity Code
            </h2>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="pragma solidity ^0.8.0;&#10;&#10;contract MyContract {&#10;    // Your code here...&#10;}"
              className="w-full h-96 bg-slate-900 text-green-400 font-mono text-sm p-4 rounded-lg border border-slate-700 focus:border-purple-500 focus:outline-none"
            />
            <button
              onClick={handleAudit}
              disabled={!code || loading}
              className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? "🔍 Analyzing..." : "🚀 Run Security Audit"}
            </button>
          </div>

          {/* Results */}
          <div className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              📊 Audit Results
            </h2>
            
            {!result && !loading && (
              <div className="text-center text-slate-400 py-20">
                <p className="text-lg">Paste your code and click "Run Security Audit"</p>
              </div>
            )}

            {loading && (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
                <p className="text-purple-300 mt-4">AI analyzing your contract...</p>
              </div>
            )}

            {result && (
              <div className="space-y-4">
                {/* Score */}
                <div className="bg-slate-900 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Security Score</span>
                    <span className={`text-4xl font-bold ${
                      result.score >= 80 ? "text-green-400" :
                      result.score >= 60 ? "text-yellow-400" :
                      "text-red-400"
                    }`}>
                      {result.score}/100
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all ${
                        result.score >= 80 ? "bg-green-400" :
                        result.score >= 60 ? "bg-yellow-400" :
                        "bg-red-400"
                      }`}
                      style={{ width: `${result.score}%` }}
                    />
                  </div>
                </div>

                {/* Issues Count */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-red-900/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-red-400">{result.critical_issues}</div>
                    <div className="text-xs text-slate-400">Critical</div>
                  </div>
                  <div className="bg-orange-900/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-orange-400">{result.high_issues}</div>
                    <div className="text-xs text-slate-400">High</div>
                  </div>
                  <div className="bg-yellow-900/30 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400">{result.medium_issues}</div>
                    <div className="text-xs text-slate-400">Medium</div>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-slate-900 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Summary</h3>
                  <p className="text-slate-300 text-sm">{result.summary}</p>
                </div>

                {/* Vulnerabilities */}
                <div className="bg-slate-900 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Vulnerabilities Found</h3>
                  <ul className="space-y-2">
                    {result.vulnerabilities.map((vuln: string, i: number) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-red-400 mr-2">⚠️</span>
                        <span className="text-slate-300">{vuln}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Powered by GenLayer AI Consensus • 5 Validators • On-Chain Verification
          </p>
        </div>
      </div>
    </div>
  );
}
