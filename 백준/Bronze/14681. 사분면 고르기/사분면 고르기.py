x = int(input())
y = int(input())


if x * y > 0 and y > 0:
    print(1)
elif x * y > 0 and y < 0:
    print(3)
elif x * y < 0 and y > 0:
    print(2)
elif x * y < 0 and y < 0:
    print(4)