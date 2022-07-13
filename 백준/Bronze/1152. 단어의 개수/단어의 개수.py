S = input().split()
search = ' '
for word in S:
    if word in search:
        S.remove(word)
    
print(len(S))