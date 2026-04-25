def jumpingOnClouds(c: list, k: int):
    index = 0
    energy = 100
    while True:
        index = (index + k) % len(c)
        energy -= 1

        if(c[index] == 1):
            energy -= 2
        if(index == 0):
            break 
    return energy


print(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))


# Time complexity: O(n)