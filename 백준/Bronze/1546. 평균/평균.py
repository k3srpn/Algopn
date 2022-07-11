N = int(input())
arr = list(map(int, input().split()))

max_score = max(arr)

newArr=[]
for score in arr:
     newArr.append(score / max_score * 100)
    
avg = sum(newArr)/N
print(avg)