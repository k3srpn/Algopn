ss = list(map(int, input().split()))

chess = [1, 1, 2, 2, 2, 8]

for idx in range(len(chess)):
   chess[idx] = chess[idx] - ss[idx]

print(*chess)