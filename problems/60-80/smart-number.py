import math

def is_smart_number(num):
    val = int(math.sqrt(num))
    if val * val == num:
        return True
    return False


print(is_smart_number(4))