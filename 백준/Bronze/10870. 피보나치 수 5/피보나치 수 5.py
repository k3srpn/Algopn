def fib(arr: list):
    length = len(arr)
    num = arr[-1] + arr[-2]
    arr.append(num)
    return arr

N = int(input())
fib_list = [0, 1]

for _ in range(N):
    fib(fib_list)
print(fib_list[N])