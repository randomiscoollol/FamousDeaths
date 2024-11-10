// Static death data (no modification to this array, stays the same)
const deathData = [
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
        name: "Jocelyn Flores",
        realName: "Jocelyn Amparo Flores",
        dateOfDeath: "2017-05-13",
        causeOfDeath: "Suicide",
        lastSong: null,
        details: "Jocelyn Flores was a model and close friend of XXXTentacion, whose death inspired his song *Jocelyn Flores*."
    },
    {
        name: "Kurt Cobain",
        realName: "Kurt Donald Cobain",
        dateOfDeath: "1994-04-05",
        causeOfDeath: "Suicide by gunshot",
        lastSong: "You Know You're Right",
        details: "The Nirvana frontman took his own life, leaving behind an unfinished track, *You Know You're Right*."
    },
    {
        name: "Tupac Shakur",
        realName: "Tupac Amaru Shakur",
        dateOfDeath: "1996-09-13",
        causeOfDeath: "Gunshot wounds",
        lastSong: "Until the End of Time",
        details: "Tupac Shakur was gunned down in a drive-by shooting in Las Vegas."
    },
    {
        name: "Notorious B.I.G.",
        realName: "Christopher George Latore Wallace",
        dateOfDeath: "1997-03-09",
        causeOfDeath: "Gunshot wounds",
        lastSong: "Notorious Thugs",
        details: "The Notorious B.I.G. was killed in a drive-by shooting in Los Angeles, with many conspiracy theories surrounding his death."
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
    },
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
    },
    {
        name: "Prinxess Diana",
        realName: "Diana Frances Spencer",
        dateOfDeath: "1997-08-31",
        causeOfDeath: "Car crash",
        lastSong: null,
        details: "Princess Diana died in a car crash in Paris while trying to evade paparazzi, an event that shocked the world."
    },
    {
        name: "Cliff Burton",
        realName: "Clifford Lee Burton",
        dateOfDeath: "1986-09-27",
        causeOfDeath: "Bus accident",
        lastSong: "To Live Is To Die",
        details: "Cliff Burton was tragically killed in a bus accident while on tour with Metallica in Sweden."
    },
    {
        name: "Elliott Smith",
        realName: "Steven Paul Smith",
        dateOfDeath: "2003-10-21",
        causeOfDeath: "Stab wounds (suspected suicide)",
        lastSong: "A Distorted Reality Is Now a Necessity to Be Free",
        details: "Elliott Smith’s final recording was on his album *From a Basement on the Hill*."
    },
    {
        name: "Lemmy Kilmister",
        realName: "Ian Fraser Kilmister",
        dateOfDeath: "2015-12-28",
        causeOfDeath: "Prostate cancer, cardiac arrhythmia",
        lastSong: "The Wörld Is Yours",
        details: "Lemmy Kilmister of Motörhead passed away shortly after his diagnosis with cancer."
    },
    {
        name: "Chuck Schuldiner",
        realName: "Charles Michael Schuldiner",
        dateOfDeath: "2001-12-13",
        causeOfDeath: "Brain cancer",
        lastSong: "Spirit Crusher",
        details: "Chuck Schuldiner, known as the father of death metal, passed away after battling brain cancer."
    },
    {
        name: "Selena Quintanilla",
        realName: "Selena Quintanilla-Pérez",
        dateOfDeath: "1995-03-31",
        causeOfDeath: "Gunshot wound",
        lastSong: "No Me Queda Más",
        details: "Selena, the Queen of Tejano music, was tragically murdered by her former fan club president."
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
        name: "Phil Lynott",
        realName: "Philip Parris Lynott",
        dateOfDeath: "1986-01-04",
        causeOfDeath: "Drug overdose",
        lastSong: "The Boys Are Back in Town",
        details: "Phil Lynott, the lead singer and bassist of Thin Lizzy, passed away from complications related to drug use."
    },
    {
        name: "Keith Moon",
        realName: "Keith John Moon",
        dateOfDeath: "1978-09-07",
        causeOfDeath: "Drug overdose",
        lastSong: null,
        details: "Keith Moon, the eccentric drummer of The Who, overdosed on pills and was found dead at the age of 32."
    }
];

// Add more death data if needed

// Display the death data
const deathList = document.getElementById('death-list');
deathData.forEach(death => {
    const deathCard = document.createElement('div');
    deathCard.classList.add('death-card');
    deathCard.innerHTML = `
        <h3>${death.name}</h3>
        <p><strong>Real Name:</strong> ${death.realName}</p>
        <p><strong>Date of Death:</strong> ${death.dateOfDeath}</p>
        <p><strong>Cause of Death:</strong> ${death.causeOfDeath}</p>
    `;
    deathList.appendChild(deathCard);
});
