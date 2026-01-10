# GenLayer Starter Contracts

This repository contains **starter smart contract templates** for developers
building on **GenLayer Studio**.

These templates are designed to help new builders quickly learn and deploy
their first contracts with minimal setup.

---

## 🧠 What’s Inside

This repo includes the following base templates:

### 🟡 `simple_storage.py`
A basic contract with:
- a stored value
- setter & getter functions

### 🟡 `counter_contract.py`
A counter example with:
- increment
- decrement
- read counter

### 🟡 `owner_only_counter.py`
A counter where only the owner can reset the counter.

---

## 🚀 How to Use These Templates

### Step 1 — Open GenLayer Studio
Go to: https://studio.genlayer.com/run-debug

### Step 2 — Connect Wallet
Make sure your wallet is connected and you have Studio testnet GEN.

### Step 3 — Create a New File
In GenLayer Studio, create a new file with any of the template files
below and paste the corresponding code.

### Step 4 — Deploy
Click **Deploy new instance** → confirm wallet transaction → wait for success.

### Step 5 — Interact
Use the built-in UI buttons to call view or write functions.

---

## 📄 Contract Templates

### 📌 simple_storage.py
```python
# v0.1.0
# { "Depends": "py-genlayer:latest" }

from genlayer import *

class SimpleStorage(gl.Contract):
    value: u256

    def __init__(self):
        self.value = 0

    @gl.public.view
    def get(self) -> u256:
        return self.value

    @gl.public.write
    def set(self, v: u256):
        self.value = v
