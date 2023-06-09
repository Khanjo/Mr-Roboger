Describe: roboOutput()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: roboOutput(5);
Expected Output: [0, 1, 2, 3, 4, 5]


Test: "It should replace any number with a 3 in it as 'won't you be my neighbor?'"
Code: roboOutput(15)
Expected Output: [0, 1, 2, "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 12, "won't you be my neighbor?", 14, 15]

Test: "It should replace any number with a 2 in it as 'boop'"
Code: roboOutput(12)
Expected Output: [0, 1, "boop", "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, "boop"]

Test: "It should replace any number with a 1 in it as 'beep'"
Code: roboOutput(10)
Expected Output: [0, "beep", "boop", "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "beep"]