# Sketch Scripts

A collection of scripts to automate the boring things. Will be a sketch plugin soon™️.

## Setup

Clone the repo and run `yarn` to install dependencies. As of now, all commands must be run from within the is folder, so it is advised you make a copy of your sketch file and place it in here before trying to run any scripts.

All commands are called from within the `run.js` file. So, if you wish to use a specific command make sure it is uncommented. A bit hacky, but works for now until I get the CLI setup.

## Commands

`getColor.js` - Returns all color values in a file with the location (page) and number of times it has occured;

`getTextStyles.js` - Returns all text styles (**Family** and **Size**) within a file the location. Also returns the unique families and sizes present in a file.
