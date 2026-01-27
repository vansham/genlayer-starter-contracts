# contracts/prophet_contract_v2.py
# GenLayer-style Intelligent Contract (v2)
# Prophet Game – Consensus Based Prediction Game

from collections import defaultdict, Counter
import time


class ProphetGameV2Contract:
    """
    Advanced Intelligent Contract for Prophet Game v2.
    Implements:
    - Multiplayer rooms
    - Prediction submission
    - Majority consensus (Optimistic Democracy)
    - XP rewards
    - Speed bonus
    - Leaderboard
    """

    def __init__(self):
        # room_id -> room data
        self.rooms = {}
        # global leaderboard
        self.global_scores = defaultdict(int)

    def create_room(self, room_id: str, question: str, options: list):
        """
        Creates a new game room.
        """
        self.rooms[room_id] = {
            "question": question,
            "options": options,
            "predictions": {},     # player -> (answer, timestamp)
            "scores": defaultdict(int),
            "created_at": time.time(),
            "resolved": False
        }
        return {
            "status": "room_created",
            "room_id": room_id,
            "question": question,
            "options": options
        }

    def submit_prediction(self, room_id: str, player: str, answer: str):
        """
        Player submits a prediction in a room.
        """
        room = self.rooms.get(room_id)
        if not room:
            return {"error": "Room does not exist"}

        if room["resolved"]:
            return {"error": "Game already resolved"}

        if answer not in room["options"]:
            return {"error": "Invalid option"}

        timestamp = time.time()
        room["predictions"][player] = (answer, timestamp)

        return {
            "status": "prediction_submitted",
            "player": player,
            "answer": answer,
            "time": timestamp
        }

    def resolve_room(self, room_id: str):
        """
        Resolves the game using Majority Consensus (Optimistic Democracy).
        """
        room = self.rooms.get(room_id)
        if not room:
            return {"error": "Room does not exist"}

        if room["resolved"]:
            return {"error": "Room already resolved"}

        predictions = room["predictions"]
        if not predictions:
            return {"error": "No predictions submitted"}

        # Count votes
        answers = [ans for ans, _ in predictions.values()]
        vote_counter = Counter(answers)

        # Majority consensus answer
        consensus_answer = vote_counter.most_common(1)[0][0]

        # Sort by submission speed
        sorted_by_time = sorted(predictions.items(), key=lambda x: x[1][1])

        results = {}

        for idx, (player, (answer, timestamp)) in enumerate(sorted_by_time):
            xp = 0

            if answer == consensus_answer:
                xp = 10  # base XP for correct consensus

                # Speed bonus for top 3 fastest correct players
                if idx == 0:
                    xp += 5
                elif idx == 1:
                    xp += 3
                elif idx == 2:
                    xp += 1

                room["scores"][player] += xp
                self.global_scores[player] += xp

                results[player] = {
                    "status": "correct",
                    "xp": xp
                }
            else:
                results[player] = {
                    "status": "wrong",
                    "xp": 0
                }

        room["resolved"] = True
        room["consensus_answer"] = consensus_answer

        return {
            "status": "resolved",
            "room_id": room_id,
            "question": room["question"],
            "consensus_answer": consensus_answer,
            "vote_distribution": dict(vote_counter),
            "results": results
        }

    def get_room_leaderboard(self, room_id: str):
        """
        Returns leaderboard for a specific room.
        """
        room = self.rooms.get(room_id)
        if not room:
            return {"error": "Room does not exist"}

        leaderboard = sorted(
            room["scores"].items(),
            key=lambda x: x[1],
            reverse=True
        )

        return leaderboard

    def get_global_leaderboard(self):
        """
        Returns global XP leaderboard.
        """
        leaderboard = sorted(
            self.global_scores.items(),
            key=lambda x: x[1],
            reverse=True
        )
        return leaderboard

