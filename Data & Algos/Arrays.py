numbers = []


def add_number(list):
    print('Current length is:', len(list))
    list.append(1)
    print('Current length is:', len(list))
    list.extend([2, 3, 4])
    print('Current length is:', len(list))
    list.delete(1)
    print('Current length is:', len(list))

    add_number(numbers)


# new_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# result = new_list[1]

# if 1 in new_list:
#     print(True)

# for n in new_list:
#     if n == 1:
#         print(True)
#         break
