def cntAlpha(char, arr):
    cnt = 0
    for i in arr:
        if char == i:
            cnt += 1
    return cnt

str = input().upper()
str_list = list(set(str))
cnt = []

for i in range(len(str_list)):
    cnt.append(cntAlpha(str_list[i], str))

Max_value = max(cnt)

if cnt.count(Max_value) > 1:
    print("?")
else:
    print(str_list[cnt.index(max(cnt))])