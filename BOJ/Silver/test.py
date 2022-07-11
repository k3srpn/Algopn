def split_and_convert(n) -> int:
    num2str = str(n)
    str_list = list(num2str)

    return str_list


str_list = split_and_convert(500)
print(split_and_convert(500))

int_list = [int(i) for i in str_list]



print(int_list)