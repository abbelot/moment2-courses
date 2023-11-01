# DT162G - Moment 2
## Amanda Björk
### Om repot
I projektet används Node.js och Express för att läsa in en hårdkodad JSON-fil courses.json via HTTP-metoden `GET`. Kurserna skrivs ut i en tabell i index.html. Genom att klicka på soptunnan för varje kurs tas denna bort från JSON-filen via HTTP-metoden `DELETE`. 

### Användning
Klona repot med `git clone https://github.com/abbelot/moment2-courses.git`. Initiera projektet med kommandot `npm init` för att installera node_modules. Ange `npm run dev` för att starta servern på port 3000. Index.html kan startas med Live Server och konsumerar webbtjänsten genom att CORS tillåts från alla källor.
 
### Endpoints
Hämta alla kurser: `/courses`
Hämta en kurs: `/courses/${id}`
Radera en kurs: `/courses/${id}`