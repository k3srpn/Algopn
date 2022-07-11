def split_and_convert(n) -> int:
    num2str = str(n)
    str_list = list(num2str)

    return str_list

def d(n): #n과 n의 각 자리수를 더하는 함수 ex) d(75) = 75 + 7 + 5 =87
    digit_sum = 0
    origin_number = n
    str_list = split_and_convert(origin_number) #문자열로 쪼개기
    int_list = [int(i) for i in str_list]

    #자리숫자들 다 더하기
    for i in int_list:
        digit_sum += i

    #원래 숫자랑 자릿수자합이랑 다 더하기
    ans = origin_number + digit_sum 

    return ans

self_number = []
nonself_number = []

for i in range(1,10001):
    nonself_number.append(d(i))
    
for j in range(1,10001):
    self_number.append(j)

complement = list(set(self_number) - set(nonself_number))
complement.sort()

print(*complement, sep='\n')

