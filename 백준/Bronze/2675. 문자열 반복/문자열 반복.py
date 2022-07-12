T = int(input())
for i in range(T):
    text = ''
    num, R = input().split()
    for j in R:
        text += int(num) * j
    print(text)