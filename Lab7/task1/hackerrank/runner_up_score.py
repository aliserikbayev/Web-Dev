n = int(input())
arr = list(map(int, input().split()))

max_score = max(arr)
runner_up = max([score for score in arr if score != max_score])

print(runner_up)
