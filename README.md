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
- [Access the code](https://github.com/leiluspocus/advent-of-code-2023/tree/main/day2)

## Day 3
- It was super hard!
- I first handled only characters that were specified in the example. But I didn't commit it ...
- I dropped this day ! 🚪
- 🤖 [Access the code](https://github.com/leiluspocus/advent-of-code-2023/tree/main/day3)

## Day 4
- It was smooth compared to Day 3.
- I had to read the description multiple times concerning how the points were distributed...
- I had trouble understanding the description, I decided to skip part 2.

## Day 5
- Not enough time to understand it for now.

## Day 6
- Part 1 was extremely smooth ! 🥹

## Day 11
- I built the matrix containing the universes
- 💡 The method `every` ([MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every))
- I had my matrix but I was having a hard time picturing how I would implement the path resolution. After browsing Reddit, I got [inspired by someone who was calculating distance](https://www.reddit.com/r/adventofcode/comments/18fmrjk/comment/kcvnsna/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button) thanks to the position of the galaxy (it's called [Manhattan distance](https://fr.wikipedia.org/wiki/Distance_de_Manhattan) btw)
- I decided to measure my time resolving advent of code: I don't want to spent more than 2 hours on these puzzles. The part 1 took me 1h45, so I won't be doing part 2 !
- Even if I'm not doing all days, I decided to do only days that inspire me to write something "clean" and to write something in this daily log (well, at least understandable ^^' ) 🧽
- I noticed that I was having less pleasure the past days and I was not taking time to write down my impressions about the day.
- Hopefully, I'll be faster next year 🎢

## Day 14
- Understanding the description is hard ... again.
- I decide to start with the first "tilt" part of rocks (make rocks go all the way north!)
