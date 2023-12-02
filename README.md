# advent-of-code-2023
Advent of Code 2023 🎅 (TDD + Node.js) - Will I complete it this year ? 🔮

## Day 1

What a rollercoaster of emotions ! 🎢

From "Easy peasy, lemon squeezie 😎" to "I hate Christmas 🤬, I hate myself 😭, why am I doing this 🫠" to "OMG, is it actually working ? 🥹"

- I tried to handle zero cases ... It was not necessary 🤡
- For puzzle 2, I first simply tried to iterate through a digit array and replace occurences. Of course, overlapping cases (like "zoneight") revealed bugs.
- I thought "zoneight" was supposed to return 11... It was actually supposed to return 18 🤡 (Thanks again Sara!)
- My way to handle puzzle 2 was to sanitize the overlapping characters first, then replace the occurences.
- 💜 `replaceAll`
- 💡 TIL: Read the text carefully and in your communities you shall trust! (So much love for you Sara 💜)
- 🤖 [Access the code](https://github.com/leiluspocus/advent-of-code-2023/tree/main/day1)

<img width="645" alt="Meme found on Reddit, joking on how complex oneight case was" src="https://github.com/leiluspocus/advent-of-code-2023/assets/1473845/d19c69f0-d574-4f56-addc-c98e410de335">

[Source: Reddit](https://www.reddit.com/r/adventofcode/comments/188wjj8/2023_day_1_did_not_see_this_coming/)



## Day 2
- This time, I stick to the case given in the website and... it's done in 30mn! 🥳
- I approach things little by little: I used [Regex101](https://regex101.com/r/hDYqxN/1) to help me figuring out the regex to extract my game ID, how to construct my colors object ... Baby steps encouraged by TDD are not my strongest asset ...
- I'm thinking about having a helper file for functions that are used by several days (it's likely i'll have to read in a file everyday this month...)
- 💜 Approaching this in a TDD way **definitely** helps !
- I got stuck on an error on my Regexp that was not isolating the game ID properly ... (see this commit to handle game IDs that are on 2/3 digits) That was a tricky one!
- [Access the code](https://github.com/leiluspocus/advent-of-code-2023/tree/main/day2)https://github.com/leiluspocus/advent-of-code-2023/tree/main/day2
