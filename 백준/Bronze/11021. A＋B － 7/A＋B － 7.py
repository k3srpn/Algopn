import sys

T = int(input())

for i in range(1, T+1):
    num1, num2 = map(int, sys.stdin.readline().split())
    print(f"Case #{i}: {num1+num2}")