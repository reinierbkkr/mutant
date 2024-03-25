[![pipeline status](https://git.sogyo.nl/rbakker/hexagon-sun/badges/main/pipeline.svg)][![coverage report](https://git.sogyo.nl/rbakker/hexagon-sun/badges/main/coverage.svg)]

## Mutant

A drum machine.

## Goal

Making an interactive drum machine, where the user can create a drum pattern that is then playable in the browser. The user can save and load patterns.

## How to start

to start the back end run the following command:
```
./gradlew bootRun
```

to start the client run the following command:
```
cd client
npm run install
npm run dev
```

## MoSCoW

**Musts**
- [ ] Vite/Vue frontend, pleasing to the eye
- [x] Play multiple sequenced audio samples according to programmed pattern
- [x] A clickable interface to program a beat
- [x] Retrieve audio samples from back-end
- [ ] Store and retrieve a pattern in a database

**Shoulds**
- [x] Loop the beat
- [ ] Make the BPM changeable
- [x] Release on remote server
- [ ] User can choose available samples

**Coulds**
- [ ] Make an algorithm to generate beat patterns in the backend 
- [x] Edit live
- [ ] Responsive design
- [ ] Make audio file of beat
- [ ] Make a bar that moves over the programmed pattern

**Woulds**
- [ ] Automatic deploy to remote server
- [ ] Live tempo change
- [ ] User login system to store users patterns
- [ ] User can upload samples

## Technical learning goals

- Familiarize myself with Vite, Vue, TypeScript and Pinia
- Implement front-end unit tests with Vitest
- Use a simplified git flow (always have a functioning main branch)

## Personal learning goals

- Set realistic goals and focus on them
- Make structured use of issueboard/todolist
- Ask for help early
- Take some time to read up on subjects I don't know about