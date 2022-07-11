C = int(input()) #테스트 케이스 수
result = list()

for i in range(C):
    j = 0
    total = 0
    cnt = 0
    
    case_list = list(map(int, input().split()))
    N = case_list.pop(0) #첫 수

    #총합
    for j in case_list:
        total += j    

    #평균
    avg = total / N

    for c in range(len(case_list)):
        if case_list[c] > avg:
            cnt += 1

    percent = (cnt / N ) * 100
    result.append(percent)

for x in result:
    print("{:.3f}%".format(x))