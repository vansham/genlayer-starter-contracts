# v0.1.0
# { "Depends": "py-genlayer:latest" }

from genlayer import *

class Counter(gl.Contract):
    count: u256

    def __init__(self):
        self.count = 0

    @gl.public.view
    def get_count(self) -> u256:
        return self.count

    @gl.public.write
    def increment(self):
        self.count += 1

    @gl.public.write
    def decrement(self):
        assert self.count > 0, "Count must be > 0"
        self.count -= 1
