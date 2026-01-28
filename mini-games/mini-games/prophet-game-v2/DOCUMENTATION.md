# GenLayer Prophet v2 – Technical Documentation

GenLayer Prophet v2 is designed to simulate GenLayer’s Intelligent Contracts and Optimistic Democracy through a multiplayer prediction game.

Players act as validators, predictions act as votes, and majority consensus determines truth. XP rewards represent incentive alignment.

---

## 1. Mapping to GenLayer Concepts

| GenLayer Concept        | Prophet v2 Implementation                     |
|------------------------|-----------------------------------------------|
| Validators             | Players in each room                          |
| Predictions            | Player answers                                |
| Consensus              | Majority vote result                          |
| Optimistic Democracy   | Majority is assumed correct                   |
| Incentives             | XP rewards for correct consensus              |
| Speed Incentives       | Bonus XP for fastest correct players          |
| Intelligent Contracts  | Non-deterministic result based on consensus   |

---

## 2. Intelligent Contract Simulation

The game includes a JavaScript-based simulation of a GenLayer Intelligent Contract:

```js
class ProphetGameV2Contract {
  createRoom(...)
  submitPrediction(...)
  resolveRoom(...)
}

               ## Extended Technical Notes (Optional)

Below is a deeper explanation for developers and reviewers who want full architecture details.



# GenLayer Prophet v2 - Technical Documentation

## Architecture Overview

GenLayer Prophet v2 is a multiplayer consensus game that demonstrates GenLayer's core blockchain concepts through interactive gameplay. The architecture consists of three main layers:

### 1. Smart Contract Layer (Simulated)
```python
class ProphetGameV2Contract:
    def __init__(self):
        self.rooms = {}
        self.global_scores = defaultdict(int)
```

The contract manages:
- **Room State**: Questions, options, predictions, scores
- **Prediction Storage**: Player answers with timestamps
- **Consensus Resolution**: Vote counting and XP distribution
- **Global Leaderboard**: Cross-session player rankings

### 2. Frontend Game Engine

Built with vanilla JavaScript to ensure:
- Zero external dependencies
- Easy deployment (single HTML file)
- Full client-side operation
- Real-time state management

### 3. Question Database

Structured JSON format for weekly content rotation:
```json
{
  "week1": [
    {
      "question": "What is GenLayer's primary innovation?",
      "options": ["Intelligent Contracts", "Faster Transactions", ...]
    }
  ]
}
```

---

## How Consensus Works

### Optimistic Democracy Implementation

Prophet v2 models GenLayer's Optimistic Democracy through a voting mechanism:

#### Phase 1: Prediction Submission
```javascript
submitPrediction(roomCode, player, answer) {
    const timestamp = Date.now();
    room["predictions"][player] = {
        answer: answer,
        timestamp: timestamp
    };
}
```

Players act as **validators**, submitting predictions (votes) on the answer to each question.

#### Phase 2: Vote Aggregation
```javascript
const voteCounts = {};
Object.values(predictions).forEach(pred => {
    voteCounts[pred.answer] = (voteCounts[pred.answer] || 0) + 1;
});
```

All predictions are collected and tallied to determine vote distribution.

#### Phase 3: Consensus Determination
```javascript
let consensusAnswer = null;
let maxVotes = 0;
Object.entries(voteCounts).forEach(([answer, count]) => {
    if (count > maxVotes) {
        maxVotes = count;
        consensusAnswer = answer;
    }
});
```

The **majority answer becomes consensus** - this is the "optimistic" assumption that the majority is correct.

#### Phase 4: Reward Distribution
```javascript
sortedPlayers.forEach(([player, pred], index) => {
    let xp = 0;
    if (pred.answer === consensusAnswer) {
        xp = 10; // Base reward
        if (index === 0) xp += 5; // Speed bonus
        else if (index === 1) xp += 3;
        else if (index === 2) xp += 1;
    }
    scores[player] = xp;
});
```

Validators who voted with consensus are rewarded. **Speed incentivizes fast validation**.

---

## Optimistic Democracy Mapping

| GenLayer Concept | Prophet v2 Implementation |
|-----------------|---------------------------|
| **Validators** | Players in the game room |
| **Validation** | Submitting answer predictions |
| **Consensus** | Majority vote determines truth |
| **Optimistic Assumption** | Majority is assumed correct |
| **Incentive Alignment** | XP rewards for correct consensus |
| **Speed Rewards** | Bonus XP for fastest validators |
| **Challenge Period** | Round timer (45-60 seconds) |
| **Finality** | Consensus screen shows verified result |

---

## XP Calculation System

### Base Rewards


GenLayer Integration
  // Future: Actual Intelligent Contract call
const contract = new GenLayerContract("0x...");
const result = await contract.resolveConsensus(predictions);
````

---

## Conclusion

GenLayer Prophet v2 successfully demonstrates core blockchain concepts through gamification. By making players act as validators and experience consensus firsthand, the game provides an intuitive understanding of:

- How Optimistic Democracy works
- Why validator incentives matter
- How non-deterministic execution is resolved
- The balance between speed and accuracy

The architecture is designed for easy extension, allowing the game to grow alongside GenLayer's development while maintaining educational value and entertainment.
````

---
````markdown
# GenLayer Prophet v2

**Multiplayer Optimistic Consensus Game**

A fun, interactive game that teaches GenLayer's Intelligent Contracts and Optimistic Democracy through hands-on gameplay.

---

## 🎮 Game Overview

GenLayer Prophet v2 is an educational multiplayer game where players act as **validators** in a consensus network. Players submit predictions, and the majority answer becomes the **consensus truth** - demonstrating GenLayer's Optimistic Democracy in action.

### Core Mechanics

- **6 rounds per game** with timed questions
- **Players vote** on answers (acting as validators)
- **Majority wins** (consensus determination)
- **XP rewards** for matching consensus
- **Speed bonuses** for fastest correct validators

---

## ✨ Features

### 🎯 Optimistic Democracy
- Players submit predictions without seeing others' answers
- Majority vote determines consensus
- Demonstrates trustless agreement

### ⚡ Speed Incentives
- **Fastest correct**: +5 bonus XP
- **2nd fastest**: +3 bonus XP  
- **3rd fastest**: +1 bonus XP
- Mimics validator speed rewards in real blockchains

### 🏆 XP System
- **10 XP** for correct consensus match
- **0 XP** for wrong answers
- **Bonus XP** for speed
- Final leaderboard ranks all players

### 📚 Weekly Content
- **Week 1**: GenLayer Basics
- **Week 2**: Consensus Mechanisms
- **Week 3**: Intelligent Contracts
- Easily extensible for more weeks

### 🎨 Modern UI
- Clean, responsive design
- Smooth animations
- Mobile-friendly
- Glassmorphism aesthetic

---

## 🚀 Quick Start

### Option 1: Direct Download

1. Download `index.html`
2. Open in any modern browser
3. Start playing immediately!

### Option 2: Clone Repository
```bash
git clone https://github.com/vansham/genlayer-starter-contracts.git
cd genlayer-starter-contracts/mini-games/prophet-game-v2
open index.html
```

### Option 3: GitHub Pages

Live demo: `https://vansham.github.io/genlayer-starter-contracts/mini-games/prophet-game-v2/`

---

## 📖 How to Play

### 1. Create or Join Room

**Create Room:**
- Enter your name
- Select week (difficulty level)
- Click "Create New Room"
- Share 6-digit room code with friends

**Join Room:**
- Enter your name
- Enter room code
- Click "Join Room"

### 2. Wait for Players

- Minimum 2 players required
- Host clicks "Start Game" when ready

### 3. Answer Questions

- Read each question carefully
- Select your answer
- Submit before timer runs out (60 seconds)
- Fastest correct answers earn bonus XP!

### 4. View Consensus

After each round:
- See vote distribution
- See consensus answer (majority)
- See your personal result
- See XP breakdown

### 5. Final Leaderboard

After 6 rounds:
- View final rankings
- See total XP earned
- Play again or return to lobby

---

## 📁 Folder Structure
````
mini-games/prophet-game-v2/
├── index.html              # Complete game (all-in-one file)
├── README.md               # This file
└── DOCUMENTATION.md        # Technical documentation



The contract simulation maintains validator state, room lifecycle,
and consensus resolution similar to GenLayer Intelligent Contracts.

