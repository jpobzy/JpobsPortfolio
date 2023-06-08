
def removeElement(nums, val):
    i = 0
    for j in nums:
        if j != val:
            print(i)
            print(nums)
            print(f"j is {j}")
            print()
            nums[i] = j
            i+= 1
        else:
            print(f"nums is: {nums}")
    print(f"final is {nums}")
    return i


nums = [0,1,2,2,3,0,4,2]
val = 2
removeElement(nums, 2)