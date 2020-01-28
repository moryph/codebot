# Codebot

A repository for JavaScript lessons, including a Discord bot based group assignment.

You will need to install Node to run all of the code within this assignment. You can get Node
[here](https://nodejs.org/en/). The latest version is fine (as of this writing, this is 13.7.0).

There are two package.json files within this repository. The main one, located within this directory, is meant for
the lessons, and general other things within this repository as a whole. The bot package.json file is meant for dependencies
that run the bot, and is the one installed and used for any bot related work. Both of these will need to be installed
if both lessons and bot work is desired.

After Node is installed, install dependencies from these package.json files like so (do this both in this
directory and in bot/ if you want to install both):

```bash
$ npm install
```

Each unit's exercises come with it a test suite that verifies the exercises' correctness. To run this script, run the following command:

```bash
$ npm run test-unit<x>
```

Where <x> is the unit number you want to test. For example, to run the unit 1 tests:

```bash
$ npm run test-unit1
```

These tests are mainly for verification purposes. They will tell you the questions you get wrong (though only the first one
of each exercise, run the tests until you have no failures) but the reason for failure is not going to be displayed. Please
carefully read through the failing code, and ask questions if you do not understand the reason for failure (of course there
is also a small chance the tests themselves are flawed, in which case I will fix them).

During the actual lesson itself I will add additional notes into each unit, these will be present in a notes folder within
that unit. The exercises folder contains the exercises to fill in. The tests contain test code, it is not necessary to look into
this folder.

The bot folder contains code that will be used to implement a discord bot. This will give a sense of what developing a
software application is like, especially collaborating with other people. Each unit will correspond to implementing one
set of commands on the bot. This project will be gone over in detail in the first lesson.

Feel free to start on the exercises ahead of time, though they will require self learning. Additional units will be added
later on, as well as more bot commands. You can read over any of the code in the repo, though only some parts are meant
to be understood by someone going through these lessons, the other parts may use unfamiliar syntax or techniques.