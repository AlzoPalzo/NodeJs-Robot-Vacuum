## Robot Vacuum

### What is it?
Robot vacuum lets you create an imaginary robot in a room with dirt. You can give the vacuum movement instructions and the program will tell
you the final position of the vacuum as well as how much dirt it cleaned up.

### Instructions
You will need npm installed.
**To use the program**:
- Clone this repository
- Run `npm install`
- Run `npm start <Text File>`

The text file should be a .txt file in the format:

`5 5` The board size

`3 3` The initial position of the vacuum

`2 2` The position of the dirt(You can have any number of these)

`NNWWEESS` The instructions for the vacuums movement (N)orth (E)ast (S)outh (W)est

The program will check for invalid text files and if it finds any issues it wiil prompt you for another file. You can simply exit any 
time by pressing `Ctrl/Cmd + c`

*Note: You can run this without running npm install. You can simply run `node ./src/roboVac.js <Text File>`
 but the you won't be able to run the testing file.*
 
