import imgRock1 from '../images/rock-user.jpeg';
import imgRock2 from '../images/rock-comp.jpeg';
import imgPaper1 from '../images/paper-user.jpeg';
import imgPaper2 from '../images/paper-comp.jpeg';
import imgScissors1 from '../images/scissors-user.jpeg';
import imgScissors2 from '../images/scissors-comp.jpeg';
import imgLizard1 from '../images/lizard-user.jpeg';
import imgLizard2 from '../images/lizard-comp.jpeg';
import imgSpock1 from '../images/spock-user.jpeg';
import imgSpock2 from '../images/spock-comp.jpeg';

const rock = {
    name: "Rock",
    win: ["Lizard", "Scissors"],
    src1: imgRock1,
    src2: imgRock2
};
const paper = {
    name: "Paper",
    win: ["Rock", "Spock"],
    src1: imgPaper1,
    src2: imgPaper2
};
const scissors = {
    name: "Scissors",
    win: ["Paper", "Lizard"],
    src1: imgScissors1,
    src2: imgScissors2
};
const lizard = {
    name: "Lizard",
    win: ["Spock", "Paper"],
    src1: imgLizard1,
    src2: imgLizard2
};
const spock = {
    name: "Spock",
    win: ["Scissors", "Rock"],
    src1: imgSpock1,
    src2: imgSpock2
};

export const selections = [rock, paper, scissors, lizard, spock];