ReadMe

This is a small React and TypeScript app that counts characters and words as you type, and shows how long your text takes to read.

The app has three components. CharacterCounter (keeps track of the text and puts the other two together.) It shows minWords, maxWords, and targetReadingTime props to set your writing goals. TextInput is the typing box. It is tracked and  StatsDisplay shows the character count, word count, and reading time.

Reflection 
How did you handle state updates when the text changed?
i used used state t kep track of the letter words and spaces being ettered and it changed ith each one.
What considerations did you make when calculating reading time?
I looked up the avarge adults reading time  and increased it slightly  for thos who are slower readers. 
How did you ensure the UI remained responsive during rapid text input?
the  useState helped make the change but it was tracked with  a function and i just tested it out when i made changes and cleared any errors. 
What challenges did you face when implementing the statistics calculations? It was difficult to figure out how to make them work simultaneoukdy with using only one use state.For me the components seamed scattered and I has diffuculty figuring out what goes where and making theminteract with each other.