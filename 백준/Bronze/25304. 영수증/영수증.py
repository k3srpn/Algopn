totalprice = int(input())

how_many_loop = int(input())

resolve = 0
for i in range(0, how_many_loop):
    price, cnt = map(int, input().split())
    resolve += price * cnt

if (resolve == totalprice):
    print('Yes')
else:
    print('No')
