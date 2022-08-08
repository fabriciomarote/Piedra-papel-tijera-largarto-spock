import imgRock1 from '../media/rock-user.jpeg';
import imgRock2 from '../media/rock-comp.jpeg';
import imgPaper1 from '../media/paper-user.jpeg';
import imgPaper2 from '../media/paper-comp.jpeg';
import imgScissors1 from '../media/scissors-user.jpeg';
import imgScissors2 from '../media/scissors-comp.jpeg';
import imgLizard1 from '../media/lizard-user.jpeg';
import imgLizard2 from '../media/lizard-comp.jpeg';
import imgSpock1 from '../media/spock-user.jpeg';
import imgSpock2 from '../media/spock-comp.jpeg';

export const rock = {
    name: "Rock",
    win: ["Lizard", "Scissors"],
    src1: imgRock1,
    src2: imgRock2
};
export const paper = {
    name: "Paper",
    win: ["Rock", "Spock"],
    src1: imgPaper1,
    src2: imgPaper2
};
export const scissors = {
    name: "Scissors",
    win: ["Paper", "Lizard"],
    src1: imgScissors1,
    src2: imgScissors2
};
export const lizard = {
    name: "Lizard",
    win: ["Spock", "Paper"],
    src1: imgLizard1,
    src2: imgLizard2
};
export const spock = {
    name: "Spock",
    win: ["Scissors", "Rock"],
    src1: imgSpock1,
    src2: imgSpock2
};

export const selections = [rock, paper, scissors, lizard, spock];