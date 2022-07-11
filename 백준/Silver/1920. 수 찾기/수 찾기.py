def binary_search(target, data, start, end):
    while start <= end:
        mid = (start + end ) // 2

        if target == data[mid]:
            return 1
        elif target > data[mid]:
            start = mid + 1
        else:
            end = mid -1
    return 0

N = input()
N_arr = list(map(int, input().split()))
N_arr.sort()

M = input()
M_arr = list(map(int, input().split()))

for i in M_arr:
    start = 0
    end = len(N_arr) - 1
    print(binary_search(i, N_arr, start, end))