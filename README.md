## Mutant

A drum machine.

## Goal

Making an interactive drum machine, where the user can use the mouse to create a drum pattern that is then playable in the browser. The user can save and load patterns.

## How to start

to start the back end run the following command:
./gradlew bootRun

to start the client run the following command:
cd client
npm run install
npm run dev

## MoSCoW

**Musts**
- Vite/Vue frontend, pleasing to the eye
- Play multiple sequenced audio samples according to programmed pattern
- A clickable interface to program a beat
- Retrieve audio samples from back-end

**Shoulds**
- Loop the beat
- Store and retrieve a beat pattern in a database
- Make the BPM changeable
- Release on remote server

**Coulds**
- Make an algorithm to generate beat patterns in the backend 
- Edit live
- Responsive design
- Make audio file of beat

**Woulds**
- Automatic deploy to remote server
- Live tempo change
- User login system to store users patterns

## Technical learning goals

- Familiarize myself with Vite, Vue, TypeScript and Pinia
- Implement front-end unit tests with Vitest
- Use a simplified git flow (always have a functioning main branch)

## Personal learning goals

- Set realistic goals and focus on them
- Make structured use of issueboard/todolist
- Ask for help early
- Take some time to read up on subjects I don't know about