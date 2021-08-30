def sum(numbers):
    if not numbers:
        return 0
    print("calling sum(%s)" % numbers[1:])
    remaining_sum = sum(numbers[1:])
    print("calling to sum(%s) returning %d + %d" %
          (numbers, numbers[0], remaining_sum))
    return numbers[0] + remaining_sum


print(sum([1, 5, 6, 12]))
