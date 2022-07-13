num1, num2 = input().split()

n1 = int(str(num1)[::-1])
n2 = int(str(num2)[::-1])

if n1 > n2:
    print(n1)
else:
    print(n2)
