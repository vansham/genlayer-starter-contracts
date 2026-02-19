# { "Depends": "py-genlayer:latest" }
from genlayer import *
import json
import typing

class DecentralAudit(gl.Contract):
    
    audits_count: u256
    
    def __init__(self) -> None:
        self.audits_count = 0
    
    @gl.public.write
    def audit_contract(self, contract_code: str) -> typing.Any:
        
        def perform_audit() -> typing.Any:
            
            prompt = f"""
Analyze this Solidity smart contract for security vulnerabilities.

Code:
{contract_code[:2000]}

Check for:
1. Reentrancy attacks
2. Access control issues
3. Integer overflow
4. Unchecked external calls

Give security score 0-100 and list critical issues.

Respond ONLY with JSON:
{{
    "score": 85,
    "critical_issues": 0,
    "high_issues": 1,
    "medium_issues": 2,
    "summary": "Contract is generally secure with minor issues",
    "vulnerabilities": [
        "Missing access control on withdraw function"
    ]
}}
"""
            
            result = gl.nondet.exec_prompt(prompt)
            result = result.replace("```json", "").replace("```", "").strip()
            return json.loads(result)
        
        audit_result = gl.eq_principle.strict_eq(perform_audit)
        
        self.audits_count += 1
        
        return audit_result
    
    @gl.public.view
    def get_total_audits(self) -> int:
        return int(self.audits_count)