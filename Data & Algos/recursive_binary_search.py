def receive_binary_search(list, target):
    if len(list) == 0:
        return False
        # Stopping conditions
    else:
        midpoint = (len(list))//2

        if list[midpoint] == target:
            return True
            # base case
        else:
            if list[midpoint] < target:
                return receive_binary_search(list[midpoint+1:], target)
            else:
                return receive_binary_search(list[:midpoint], target)


def verify(result):
    print("Target found:", result)


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = result = receive_binary_search(numbers, 6)
verify(result)
