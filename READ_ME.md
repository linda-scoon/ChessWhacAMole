# ChessWhacAMole

This is a game just like whac a mole but with chess pieces. The chess piece has to be moved to the star following the movement rules of the chess piece.

# Calculating allowable moves on the chess board requires converting letters/columns to ASCII. Explanation below...

Firstly, a chess board is an 8x8 board, typically denoted with rows being numbered from 1 to 8, and columns labelled under letters from a to h.
To move a piece on the board, we would denote the name of the piece and where it is moving to. King to e5, for example.

Now onto ASCII...

In ASCII, a pawn moving two spaces forward from a2 to a4 would be a pawn moving from column 97 of row 2, to column 97 of row 4. The ASCII for a = 97, and we add 2 spaces to the original row of 2.
So, 2 + 2 = 4. Pawn from a2 to a4.
We are only adding/subtracting from the second part of the chess piece coordinates, which is a numeric character.

That is nice and easy!

However! If we were to instead move a rook from a1 to b1, would have to calculate the difference between a and b...
So, we instead use convert this to ASCII which represents the characters 'a' and 'b' as numbers!

In fact, we can use ASCII to convert all of the 8 characters on a chessboard, from a to h. How exciting!

Converting to ASCII, the numbers to denote the letters - consecutively - from a to h is from 97 to 104. See below for explanation...

a = 97
b = 98
c = 99
d = 100
e = 101
f = 102
g = 103
h = 104!! Yay!

Using this, we can now figure out how to move our rook from a1 to b1.

The conversation for a1 would be a = column "97" (in ASCII) and the row is 1. b1 would be column "98" and the row would stay as 1.
In order to move the rook from a1 to b1, we could add 1 to 97, to get 98 - which is b1! Yay!

Now, you should understand most of the program once you have that logic down. Ur welcome.
