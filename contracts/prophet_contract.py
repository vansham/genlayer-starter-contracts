# contracts/prophet_contract.py

class ProphetGameContract:
    def __init__(self):
        self.predictions = {}
        self.scores = {}

    def submit_prediction(self, player, prediction):
        self.predictions[player] = prediction
        return f"Prediction submitted by {player}"

    def reward_player(self, player, xp):
        if player not in self.scores:
            self.scores[player] = 0
        self.scores[player] += xp
        return f"{xp} XP rewarded to {player}"

    def get_score(self, player):
        return self.scores.get(player, 0)
