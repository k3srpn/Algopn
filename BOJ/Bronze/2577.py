A = int(input())
B = int(input())
C = int(input())

li = list(map(int, str(A * B * C)))

for i in range(10):
    print(li.count(i))