repeat = int(input())
ps = []
for i in range(repeat):
    ps.append(input())

i = 0
for i in range(len(ps)):
    unpack = list(map(str, ps[i]))
    stack = []
    #검증시작
    for idx, val in enumerate(unpack):
        if idx == 0:#첫번째는 무조건 추가
            stack.append(val)
        elif not stack: #비어있으면 추가시킴
            stack.append(val)
        else:
            if (val==")" and stack[-1]=="("):
                stack.pop()
            elif val == stack[-1]:
                stack.append(val)
            elif (val=="(" and stack[-1]==")"):
                stack.append(val)
    if not stack:
        print('YES')
    else:
        print('NO')