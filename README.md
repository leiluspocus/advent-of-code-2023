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
