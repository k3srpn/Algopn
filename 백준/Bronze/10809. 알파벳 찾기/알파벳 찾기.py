minusone_list = [-1] * 26
alphabet_list = list('abcdefghijklmnopqrstuvwxyz')
S = list(input())

for i in range(len(S)):
    for j in range(len(alphabet_list)):
        if S[i] == alphabet_list[j]:
            if minusone_list[j] < 0:
                minusone_list[j] = i

for i in minusone_list:
    print(i, end=' ')