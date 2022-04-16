max_length_list = 10
li = []

while len(li) < max_length_list:
    item = int(input())
    li.append(item % 42)
li = set(li)
print(len(li))