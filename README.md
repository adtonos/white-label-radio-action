# Actions on Google: Radio Player

This action demonstrates how to create a radio player action. Single radio stream actions are typically used by radio stations to provide a convenient and quick access to their live stream.

User interface is limited to Play and Stop use cases.


## Prerequisites
1. Node.js and NPM
    + We recommend installing using [nvm](https://github.com/creationix/nvm)


## Setup
1. `gactions login`
1. `cd sdk && gactions push` to push your project (model)
1. `cd sdk/webhook && npm i && npm run debug` to start backend on port 3030


## Running this Sample
+ You can test your Action on any Google Assistant-enabled device on which the Assistant is signed into the same account used to create this project. Just say or type, “OK Google, talk to Audio App”.
+ You can also use the Actions on Google Console simulator to test most features and preview on-device behavior.


## Usage

```text
Ok Google, play Audio App

Ok Google, stop
```
