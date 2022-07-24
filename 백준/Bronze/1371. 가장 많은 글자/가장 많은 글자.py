import sys

idx_list = [0] * 26


s = sys.stdin.read().replace('\n', '').replace(' ','')

for i in s:
    idx_list[ord(i)-97] += 1

for j in range(26):
    # 만약 리스트의 인덱스가 최댓값과 같다면(최댓값이 여러개라면)
    if idx_list[j] == max(idx_list):
        # 문자를 알파벳 순서에 따라 출력한다.
        print(chr(97+j), end ='')

