def linear_search(list, target):
    for i in range(0, len(list)):
        if list[i] == target:
            return i
    return None

def verify(index):
    if index is not None:
        print("Target found on: ", index)
    else:
        print("Target not found")

numbers = [0,1,2,3,4,5,6,7,8,9,10]

result = linear_search(numbers,8)
result2 = linear_search(numbers,1)
verify(result)
verify(result2)