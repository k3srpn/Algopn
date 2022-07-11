N = int(input())

count = 0
defaultN = N

while True:
    count += 1
    ldigit_N = N // 10 #왼쪽자리
    rdigit_N = N % 10 #오른쪽 자리
    N = (rdigit_N * 10) + ((ldigit_N + rdigit_N) % 10)
    if N == defaultN:
        print(count)
        break