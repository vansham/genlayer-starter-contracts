from backend.node.genvm.icontract import IContract
from backend.node.genvm.equivalence_principle import call_llm_with_principle
import json

class TaskVerifier(IContract):
    def __init__(self):
        self.tasks = {}
        self.task_counter = 0
        
    def create_task(self, title: str, description: str, bounty: int) -> dict:
        if bounty < 100:
            raise Exception("Minimum bounty: 100")
        
        self.task_counter += 1
        self.tasks[self.task_counter] = {
            "id": self.task_counter,
            "title": title,
            "description": description,
            "bounty": bounty,
            "status": "OPEN",
            "creator": self.msg_sender
        }
        return {"success": True, "task_id": self.task_counter}
    
    def submit_proof(self, task_id: int, github_url: str, repo_data: str) -> dict:
        if task_id not in self.tasks:
            raise Exception("Task not found")
        
        task = self.tasks[task_id]
        task["github_url"] = github_url
        task["repo_data"] = repo_data
        task["status"] = "SUBMITTED"
        
        return {"success": True, "message": "Submitted for AI verification"}
    
    def verify_with_ai(self, task_id: int) -> dict:
        task = self.tasks[task_id]
        repo_info = json.loads(task["repo_data"])
        
        prompt = f"""
Analyze this task submission:
Task: {task['title']}
GitHub: {task.get('github_url', 'N/A')}
Quality Score: {repo_info.get('quality_score', 0)}/100

Reply: VERIFIED or REJECTED
"""
        
        result = call_llm_with_principle(prompt, eq_principle="Be fair")
        
        if "VERIFIED" in result.upper():
            task["status"] = "VERIFIED"
            return {"success": True, "verdict": "VERIFIED", "payment": task["bounty"]}
        else:
            task["status"] = "REJECTED"
            return {"success": True, "verdict": "REJECTED"}
    
    def get_all_tasks(self) -> list:
        return list(self.tasks.values())
