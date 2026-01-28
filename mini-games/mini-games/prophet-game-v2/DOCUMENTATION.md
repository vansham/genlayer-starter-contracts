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
