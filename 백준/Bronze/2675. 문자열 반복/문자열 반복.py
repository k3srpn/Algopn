T = int(input())
for i in range(T):
    num, R = input().split()
    for j in R:
        print(j * int(num), end='')
    print()