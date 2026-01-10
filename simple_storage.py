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
