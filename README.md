# DT162G - Moment 2
## Amanda Björk
### Om repot
I projektet används Node.js och Express för att läsa in en hårdkodad JSON-fil courses.json via HTTP-metoden `GET`. Kurserna skrivs ut i en tabell i index.html. Genom att klicka på soptunnan för varje kurs tas denna bort från JSON-filen via HTTP-metoden `DELETE`. CORS tillåts för att källor.

### Användning
- Klona repot med `git clone https://github.com/abbelot/moment2-courses.git`. 
- Initiera projektet med kommandot `npm init` för att återinstallera node_modules. 
- Ange kommando `npm run dev` för att starta servern på port 3000 (script är deklarerat i package.json).
- Starta Live Server för index.html för att visa HTML-sidan och konsumera webbtjänsten.
 
### Endpoints
- Hämta alla kurser: `/courses`
- Hämta en kurs: `/courses/${id}`
- Radera en kurs: `/courses/${id}`