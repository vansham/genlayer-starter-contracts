# v0.1.0
# { "Depends": "py-genlayer:latest" }

from genlayer import *

class OwnerOnlyCounter(gl.Contract):
    count: u256
    owner: address

    def __init__(self):
        self.count = 0
        self.owner = gl.msg.sender

    @gl.public.view
    def get_count(self) -> u256:
        return self.count

    @gl.public.write
    def increment(self):
        self.count += 1

    @gl.public.write
    def reset(self):
        assert gl.msg.sender == self.owner, "Not owner"
        self.count = 0
