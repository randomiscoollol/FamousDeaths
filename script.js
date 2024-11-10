// Static death data (no modification to this array, stays the same)
const deathData = {
    "Musicians": [
        {
            name: "XXXTentacion",
            realName: "Jahseh Dwayne Ricardo Onfroy",
            dateOfDeath: "2018-06-18",
            causeOfDeath: "Gunshot wounds",
            lastSong: "Bad!",
            details: "XXXTentacion was tragically shot and killed during a robbery at a motorcycle dealership."
        },
        {
            name: "Juice WRLD",
            realName: "Jarad Higgins",
            dateOfDeath: "2019-12-08",
            causeOfDeath: "Seizure from overdose",
            lastSong: "Bandit",
            details: "Juice WRLD passed away after suffering a seizure, allegedly triggered by a drug overdose at an airport."
        },
        {
            name: "Aaliyah",
            realName: "Aaliyah Dana Haughton",
            dateOfDeath: "2001-08-25",
            causeOfDeath: "Plane crash",
            lastSong: "Rock the Boat",
            details: "Aaliyah tragically died in a plane crash while leaving the Bahamas after filming the *Rock the Boat* music video."
        },
        {
            name: "Avicii",
            realName: "Tim Bergling",
            dateOfDeath: "2018-04-20",
            causeOfDeath: "Suicide by hanging",
            lastSong: "SOS",
            details: "Avicii's death was a shock to the music world, as he was found dead in his hotel room in Oman, reportedly from suicide."
        },
        {
            name: "Chris Cornell",
            realName: "Christopher John Boyle",
            dateOfDeath: "2017-05-18",
            causeOfDeath: "Suicide by hanging",
            lastSong: "The Promise",
            details: "Chris Cornell, the lead singer of Soundgarden, passed away after his show in Detroit. His death was ruled a suicide."
        },
        {
            name: "Mac Miller",
            realName: "Malcolm James McCormick",
            dateOfDeath: "2018-09-07",
            causeOfDeath: "Drug overdose",
            lastSong: "Circles",
            details: "Mac Miller died of an accidental overdose. *Circles* was his final album, which was released posthumously."
        },
        {
            name: "Chester Bennington",
            realName: "Chester Charles Bennington",
            dateOfDeath: "2017-07-20",
            causeOfDeath: "Suicide by hanging",
            lastSong: "One More Light",
            details: "Chester Bennington's death came two months after the release of *One More Light*, which dealt with mental health struggles."
        },
        {
            name: "Whitney Houston",
            realName: "Whitney Elizabeth Houston",
            dateOfDeath: "2012-02-11",
            causeOfDeath: "Drowning",
            lastSong: "I Look to You",
            details: "Whitney Houston drowned in a hotel bathtub, with heart disease and drug use contributing to her death."
        },
        {
            name: "Amy Winehouse",
            realName: "Amy Jade Winehouse",
            dateOfDeath: "2011-07-23",
            causeOfDeath: "Alcohol poisoning",
            lastSong: "Body and Soul",
            details: "Amy Winehouse died after a long battle with substance abuse. *Body and Soul* was her final collaboration, with Tony Bennett."
        }
    ],
    "Actors": [
        {
            name: "Heath Ledger",
            realName: "Heathcliff Andrew Ledger",
            dateOfDeath: "2008-01-22",
            causeOfDeath: "Accidental overdose",
            lastSong: null,
            details: "Heath Ledger passed away from an overdose of prescription drugs, leaving behind his iconic portrayal of the Joker in *The Dark Knight*."
        },
        {
            name: "Robin Williams",
            realName: "Robin McLaurin Williams",
            dateOfDeath: "2014-08-11",
            causeOfDeath: "Suicide by hanging",
            lastSong: null,
            details: "Robin Williams, beloved actor and comedian, took his own life due to severe depression and Lewy body dementia."
        }
    ],
    "Public Figures": [
        {
            name: "Prinxess Diana",
            realName: "Diana Frances Spencer",
            dateOfDeath: "1997-08-31",
            causeOfDeath: "Car crash",
            lastSong: null,
            details: "Princess Diana died in a car crash in Paris while trying to evade paparazzi, an event that shocked the world."
        }
    ],
    "Musicians - Classic": [
        {
            name: "Cliff Burton",
            realName: "Clifford Lee Burton",
            dateOfDeath: "1986-09-27",
            causeOfDeath: "Bus accident",
            lastSong: "To Live Is To Die",
            details: "Cliff Burton was tragically killed in a bus accident while on tour with Metallica in Sweden."
        },
        {
            name: "Jimmy Hendrix",
            realName: "James Marshall Hendrix",
            dateOfDeath: "1970-09-18",
            causeOfDeath: "Drug overdose",
            lastSong: "Hear My Train a Comin'",
            details: "Jimi Hendrix died of an overdose, and *Hear My Train a Comin’* was one of his final recorded tracks."
        },
        {
            name: "Jim Morrison",
            realName: "James Douglas Morrison",
            dateOfDeath: "1971-07-03",
            causeOfDeath: "Heart failure (possibly drug-related)",
            lastSong: "Riders on the Storm",
            details: "Jim Morrison was found dead in Paris from heart failure, though the exact cause is still debated."
        },
        {
            name: "Randy Rhoads",
            realName: "Randall William Rhoads",
            dateOfDeath: "1982-03-19",
            causeOfDeath: "Plane crash",
            lastSong: "Over the Mountain",
            details: "Randy Rhoads, the legendary guitarist for Ozzy Osbourne, died in a plane crash while on tour."
        },
        {
            name: "John Bonham",
            realName: "John Henry Bonham",
            dateOfDeath: "1980-09-25",
            causeOfDeath: "Alcohol poisoning",
            lastSong: null,
            details: "John Bonham, the drummer of Led Zeppelin, died from alcohol poisoning, leading to the band's disbandment."
        },
        {
            name: "Keith Moon",
            realName: "Keith John Moon",
            dateOfDeath: "1978-09-07",
            causeOfDeath: "Drug overdose",
            lastSong: null,
            details: "Keith Moon, the eccentric drummer of The Who, overdosed on pills and was found dead at the age of 32."
        }
    ]
};

// Add more death data if needed

// Display the death data
const deathList = document.getElementById('death-list');

// Function to display death data based on category
function displayDeathData(category) {
    deathList.innerHTML = ''; // Clear previous list
    deathData[category].forEach(death => {
        const deathCard = document.createElement('div');
        deathCard.classList.add('death-card');
        deathCard.innerHTML = `
            <h3>${death.name}</h3>
            <p><strong>Real Name:</strong> ${death.realName}</p>
            <p><strong>Date of Death:</strong> ${death.dateOfDeath}</p>
            <p><strong>Cause of Death:</strong> ${death.causeOfDeath}</p>
            <p><strong>Last Song:</strong> ${death.lastSong || 'N/A'}</p>
            <p><strong>Details:</strong> ${death.details}</p>
        `;
        deathList.appendChild(deathCard);
    });
}

// Example usage: display deaths in 'Musicians'
displayDeathData("Musicians");
