n_list = list(map(int, input().split()))
sum =0
for element in n_list:
    if element != 0:
        sum = sum + element**2

print(sum%10)