def solve(a: list) -> int:
    ans = 0
    for idx in range(len(a)):
        ans += a[idx]
    return ans
