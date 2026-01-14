# contracts/prophet_contract.py
# GenLayer-style Intelligent Contract for Prophet Game

class ProphetGameContract:
    """
    A simple intelligent contract that simulates prediction submission
    and XP reward distribution logic inspired by GenLayer.
    """

    def __init__(self):
        self.predictions = {}
        self.scores = {}

    def submit_prediction(self, player: str, prediction: str):
        """
        Player submits a prediction.
        """
        self.predictions[player] = prediction
        return {
            "status": "submitted",
            "player": player,
            "prediction": prediction
        }

    def validate_outcome(self, correct_answer: str):
        """
        Validates all predictions and rewards players.
        """
        results = {}
        for player, pred in self.predictions.items():
            if pred == correct_answer:
                self.reward_player(player, 10)  # reward 10 XP
                results[player] = "correct"
            else:
                results[player] = "wrong"
        return results

    def reward_player(self, player: str, xp: int):
        """
        Adds XP to player score.
        """
        if player not in self.scores:
            self.scores[player] = 0
        self.scores[player] += xp

    def get_score(self, player: str):
        """
        Returns XP score of a player.
        """
        return self.scores.get(player, 0)
