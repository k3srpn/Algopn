t_case = int(input())
li = list(map(int, input().split()))
max = li[0]
min = li[0]

for i in li:
    if i > max:
        max = i
    if i < min:
        min = i

print(min, max)