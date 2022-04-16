li = []
max_length_list = 9

while len(li) < max_length_list:
    item = int(input())
    li.append(item)

print(max(li),li.index(max(li))+1)
