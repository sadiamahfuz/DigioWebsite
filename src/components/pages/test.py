#!/bin/python3
import math
import os
import random
import re
import sys
import ast
import numpy as np

class OpConv2D:
    def __init__(self, filters_count, kernel_size, inputs):
        self.inputs = inputs
        self.kernel_size = kernel_size

        # Shape of the input feature map
        input_height = inputs.shape[0]
        input_width = inputs.shape[1]
        input_channels = inputs.shape[2]

        # Shape of this layer's output feature map
        self.output_height = input_height - kernel_size + 1
        self.output_width = input_width - kernel_size + 1
        self.output_channels = filters_count

        # self.weights contains filters_count filters of shape: kernel_size x kernel_size x input_channels
        self.weights = np.random.normal(size=(filters_count, kernel_size, kernel_size, input_channels), scale=0.1)

    def forward(self):
        Z = np.zeros((self.output_height, self.output_width, self.output_channels), dtype=np.float32)

        for h in range(self.output_height):
            for w in range(self.output_width):
                # Apply all filters
                for c in range(self.output_channels):
                    z = 0
                    for i in range(self.kernel_size):
                        for j in range(self.kernel_size):
                            for k in range(self.weights.shape[-1]):
                                z += self.inputs[h + i, w + j, k] * self.weights[c][i][j][k]
                    Z[h, w, c] = z
        return Z

    # dZ is the derivate of the loss with respect to the output of this layer's forward propagation.
    def backward(self, dZ):
        dW = np.zeros(self.weights.shape, dtype=np.float32)
        dA_prev = np.zeros(self.inputs.shape, dtype=np.float32)

        #enter you code here
        return (dW, dA_prev)

# Used to approximate the output
def sround(item):
    if type(item) is list:
        return [sround(it) for it in item]
    else:
        return round(item, 3)

if __name__ == '__main__':
    # Check test type
    printdA = ast.literal_eval(sys.stdin.readline())

    # Read all from stdin
    x = sys.stdin.read()

    # stdin string is a python multi-dimensional list literal
    x = ast.literal_eval(x)
    x = np.array(x, np.float32)

    # Set seed for consistency
    np.random.seed(1)

    op = OpConv2D(4, 3, x)
    Z = op.forward()

    # This should be a mathematical formula that computes the derivate of the
    # loss with respect to the output of this layer's forward propagation
    # For the purpose of this test we will assume this is 1
    dZ = np.ones(Z.shape, dtype=np.float32)
    dW, dA = op.backward(dZ)

    # Print the approximate output to stdout.
    print(sround(dW.tolist()))
    if printdA:
        print(sround(dA.tolist()))
