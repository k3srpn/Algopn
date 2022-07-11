num = int(input())
ox_list = list()

for i in range(num):
    elements = input()
    ox_list.append(elements)

score = 0
o_score = 0
x_score = 0


for ox in ox_list:
    o_score = 0
    score = 0
    ret = ox
    osc_list = list(ret)
    for idx in range(len(osc_list)):
        if idx == 0: # 인덱스 0번쨰만
            if osc_list[idx] == 'O':
                o_score += 1
                score += o_score
            elif osc_list[idx] == 'X':
                o_score = 0
        #인덱스 1 이상 부터
        else:
            if osc_list[idx] == 'O':
                o_score += 1
                score += o_score
            elif osc_list[idx] == 'X':
                o_score = 0
    print(score)