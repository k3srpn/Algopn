students = list(map(int, range(1,31)))
data = list()
for i in range(0,28):
    data.append(input())

parseDataList = sorted(list(map(int, data)))

absent_list = list()
for i in students:
    if i not in parseDataList:
        absent_list.append(i)

for i in sorted(absent_list):
    print(i)
