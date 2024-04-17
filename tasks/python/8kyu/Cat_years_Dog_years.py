#I have a cat and a dog.
#I got them at the same time as kitten/puppy. That was humanYears years ago.
#Return their respective ages now as [humanYears,catYears,dogYears]

def human_years_cat_years_dog_years(human_years):
    cache = {1:[1,15,15], 2:[2,24,24]}
    if human_years in cache:
        return cache[human_years]
    for i in range(3,human_years+1):
        cache[i] = [i,cache[i-1][1]+4,cache[i-1][2]+5]
    return cache[human_years]
