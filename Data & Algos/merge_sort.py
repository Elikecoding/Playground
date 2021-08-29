def merge_sort(list):
    # Sorts a list in accending orders
    # Returns a new sorted listen
    # Divide: find  the midpoint and divide into sublists
    # Conquer: Recursively sort the sublists create in the previous step
    # Combine: Merge the sorted sublist created in previous step
    # runs in O(n log n) because it takes as many items in the list to merge it which is linear
    # due to the way the python splicing works the run time is actually O(k log n)

    # Stopping condition we want to stop whe nwe reach single or empty lists
    if len(list) <= 1:
        return list

    left_half, right_half = split(list)
    # This is the recursive part of our function you can see were calling merge_sort and passing in the list we get from the split function #
    left = merge_sort(left_half)
    right = merge_sort(right_half)

    # Conquer section
    return merge(left, right)


def split(list):
    # divide the unsorted list at midpoint in sublists, returns left and right_half
    # takes over O(log n) time worst case
    mid = len(list)//2
    left = list[:mid]
    right = list[mid:]

    return left, right


def merge(left, right):
    # merges two array and sorts them in the process the returns merged list
    # run O(n) worst case
    l = []
    i = 0
    j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            l.append(left[i])
            i += 1
        else:
            l.append(right[j])
            j += 1

    while i < len(left):
        l.append(left[i])
        i += 1

    while j < len(right):
        l.append(right[j])
        j += 1

    return l


def verify_sorted(list):
    n = len(list)

    if n == 0 or n == 1:
        return True

    return list[0] < list[1] and verify_sorted(list[1:])


# How to manually test my merge sort is working
nlist = [54, 75, 121, 6352, 733, 77, 1241, 66]
l = merge_sort(nlist)
print(verify_sorted(nlist))
print(verify_sorted(l))
