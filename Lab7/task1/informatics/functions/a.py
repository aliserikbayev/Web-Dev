def min_of_four(a, b, c, d):
    return min(min(a, b), min(c, d))

numbers = list(map(int, input().split()))
print(min_of_four(*numbers))
