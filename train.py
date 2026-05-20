# TASK K
def countVowels(word):
    vowels = "aeiouAEIOU"
    find_vowels = []
    count = 0

    for letter in word:
        if letter in vowels:
            count += 1
            find_vowels.append(letter)  # it is just practice for myself!

    return count, find_vowels


print(countVowels("Never Give Up!"))
