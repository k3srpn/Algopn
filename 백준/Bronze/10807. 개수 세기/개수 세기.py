N = input()
arr = input().split(' ')
v = input()
   
count = 0;
for elem in arr:
    if elem == v:
        count += 1
print(count)