def hansu(a: list) -> int:
    cnt = 0
    arr_length = len(a)
    if arr_length == 1:
        return 0
    front_cd = a[0] - a[1]
    end_cd = a[1] - a[2]
    if front_cd == end_cd:
        cnt += 1
    return cnt

X = input()
num = 0
for i in range(1, int(X)+1):
    if i < 100 : 
        num += 1
    else:
        X_arr = [int(j) for j in str(i)]
        num += hansu(X_arr)
print(num)