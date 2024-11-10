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
            causeOfDeath: "Suicide",
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
            name: "Michael Jackson",
            realName: "Michael Joseph Jackson",
            dateOfDeath: "2009-06-25",
            causeOfDeath: "Cardiac arrest",
            lastSong: "This Is It",
            details: "Michael Jackson died from cardiac arrest induced by propofol and benzodiazepine intoxication."
        },
        {
            name: "Prince",
            realName: "Prince Rogers Nelson",
            dateOfDeath: "2016-04-21",
            causeOfDeath: "Accidental overdose",
            lastSong: "Black Is the New Black",
            details: "Prince died from an accidental overdose of fentanyl at his Paisley Park home and recording studio in Minnesota."
        },
        {
            name: "David Bowie",
            realName: "David Robert Jones",
            dateOfDeath: "2016-01-10",
            causeOfDeath: "Liver cancer",
            lastSong: "Lazarus",
            details: "David Bowie died two days after the release of his final album *Blackstar*, which was intended as a parting gift to his fans."
        },
        {
            name: "Freddie Mercury",
            realName: "Farrokh Bulsara",
            dateOfDeath: "1991-11-24",
            causeOfDeath: "Bronchopneumonia brought on by AIDS",
            lastSong: "Mother Love",
            details: "Freddie Mercury died from bronchopneumonia brought on by AIDS, just one day after publicly acknowledging he had the disease."
        },
        {
            name: "John Lennon",
            realName: "John Winston Ono Lennon",
            dateOfDeath: "1980-12-08",
            causeOfDeath: "Gunshot wounds",
            lastSong: "Walking on Thin Ice",
            details: "John Lennon was shot and killed by Mark David Chapman outside his apartment building in New York City."
        },
        {
            name: "Elvis Presley",
            realName: "Elvis Aaron Presley",
            dateOfDeath: "1977-08-16",
            causeOfDeath: "Heart attack",
            lastSong: "Way Down",
            details: "Elvis Presley died at his Graceland mansion in Memphis, Tennessee, from a heart attack, likely brought on by years of prescription drug abuse."
        }
    ],
    "Actors": [
        {
            name: "Heath Ledger",
            realName: "Heathcliff Andrew Ledger",
            dateOfDeath: "2008-01-22",
            causeOfDeath: "Accidental overdose",
            lastMovie: "The Imaginarium of Doctor Parnassus",
            details: "Heath Ledger passed away from an overdose of prescription drugs, leaving behind his iconic portrayal of the Joker in *The Dark Knight*."
        },
        {
            name: "Robin Williams",
            realName: "Robin McLaurin Williams",
            dateOfDeath: "2014-08-11",
            causeOfDeath: "Suicide by hanging",
            lastMovie: "Night at the Museum: Secret of the Tomb",
            details: "Robin Williams, beloved actor and comedian, took his own life due to severe depression and Lewy body dementia."
        },
        {
            name: "Chadwick Boseman",
            realName: "Chadwick Aaron Boseman",
            dateOfDeath: "2020-08-28",
            causeOfDeath: "Colon cancer",
            lastMovie: "Ma Rainey's Black Bottom",
            details: "Chadwick Boseman died after a four-year battle with colon cancer, which he had kept private while continuing to act in major films."
        },
        {
            name: "Carrie Fisher",
            realName: "Carrie Frances Fisher",
            dateOfDeath: "2016-12-27",
            causeOfDeath: "Cardiac arrest",
            lastMovie: "Star Wars: The Rise of Skywalker",
            details: "Carrie Fisher died after suffering a cardiac arrest on a flight from London to Los Angeles."
        },
        {
            name: "Philip Seymour Hoffman",
            realName: "Philip Seymour Hoffman",
            dateOfDeath: "2014-02-02",
            causeOfDeath: "Drug overdose",
            lastMovie: "The Hunger Games: Mockingjay - Part 2",
            details: "Philip Seymour Hoffman died from a drug overdose in his Manhattan apartment."
        },
        {
            name: "Paul Walker",
            realName: "Paul William Walker IV",
            dateOfDeath: "2013-11-30",
            causeOfDeath: "Car crash",
            lastMovie: "Furious 7",
            details: "Paul Walker died in a single-car accident while riding as a passenger in a Porsche Carrera GT."
        },
        {
            name: "Alan Rickman",
            realName: "Alan Sidney Patrick Rickman",
            dateOfDeath: "2016-01-14",
            causeOfDeath: "Pancreatic cancer",
            lastMovie: "Alice Through the Looking Glass",
            details: "Alan Rickman died from pancreatic cancer at the age of 69, leaving behind a legacy of iconic roles."
        },
        {
            name: "River Phoenix",
            realName: "River Jude Bottom",
            dateOfDeath: "1993-10-31",
            causeOfDeath: "Drug overdose",
            lastMovie: "Dark Blood",
            details: "River Phoenix died of a drug overdose outside the Viper Room club in West Hollywood."
        },
        {
            name: "James Dean",
            realName: "James Byron Dean",
            dateOfDeath: "1955-09-30",
            causeOfDeath: "Car crash",
            lastMovie: "Giant",
            details: "James Dean died in a car crash at the age of 24, shortly after finishing filming on *Giant*."
        },
        {
            name: "Marilyn Monroe",
            realName: "Norma Jeane Mortenson",
            dateOfDeath: "1962-08-05",
            causeOfDeath: "Barbiturate overdose",
            lastMovie: "Something's Got to Give",
            details: "Marilyn Monroe was found dead in her home from a barbiturate overdose, ruled a probable suicide."
        }
    ],
    "Public Figures": [
        {
            name: "Princess Diana",
            realName: "Diana Frances Spencer",
            dateOfDeath: "1997-08-31",
            causeOfDeath: "Car crash",
            lastPublicAppearance: "Visited Sarajevo",
            details: "Princess Diana died in a car crash in Paris while trying to evade paparazzi, an event that shocked the world."
        },
        {
            name: "John F. Kennedy",
            realName: "John Fitzgerald Kennedy",
            dateOfDeath: "1963-11-22",
            causeOfDeath: "Assassination",
            lastPublicAppearance: "Motorcade in Dallas",
            details: "President Kennedy was assassinated while riding in a motorcade in Dallas, Texas."
        },
        {
            name: "Martin Luther King Jr.",
            realName: "Michael King Jr.",
            dateOfDeath: "1968-04-04",
            causeOfDeath: "Assassination",
            lastPublicAppearance: "I've Been to the Mountaintop speech",
            details: "Dr. King was assassinated on the balcony of the Lorraine Motel in Memphis, Tennessee."
        },
        {
            name: "Nelson Mandela",
            realName: "Nelson Rolihlahla Mandela",
            dateOfDeath: "2013-12-05",
            causeOfDeath: "Respiratory failure",
            lastPublicAppearance: "2010 FIFA World Cup closing ceremony",
            details: "Nelson Mandela died at his home in Johannesburg at the age of 95."
        },
        {
            name: "Steve Jobs",
            realName: "Steven Paul Jobs",
            dateOfDeath: "2011-10-05",
            causeOfDeath: "Pancreatic cancer",
            lastPublicAppearance: "Apple's WWDC 2011",
            details: "Steve Jobs, co-founder of Apple Inc., died after a long battle with pancreatic cancer."
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
            name: "Jimi Hendrix",
            realName: "James Marshall Hendrix",
            dateOfDeath: "1970-09-18",
            causeOfDeath: "Asphyxiation",
            lastSong: "Hear My Train a Comin'",
            details: "Jimi Hendrix died from asphyxiation due to aspiration of vomit, and *Hear My Train a Comin'* was one of his final recorded tracks."
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
            causeOfDeath: "Asphyxiation",
            lastSong: "I'm Gonna Crawl",
            details: "John Bonham, the drummer of Led Zeppelin, died from asphyxiation due to vomit, leading to the band's disbandment."
        },
        {
            name: "Keith Moon",
            realName: "Keith John Moon",
            dateOfDeath: "1978-09-07",
            causeOfDeath: "Drug overdose",
            lastSong: "Who Are You",
            details: "Keith Moon, the eccentric drummer of The Who, overdosed on pills and was found dead at the age of 32."
        }
    ],
    "Authors": [
        {
            name: "Ernest Hemingway",
            realName: "Ernest Miller Hemingway",
            dateOfDeath: "1961-07-02",
            causeOfDeath: "Suicide by gunshot",
            lastWork: "The Old Man and the Sea",
            details: "Hemingway took his own life at his home in Ketchum, Idaho, after years of declining physical and mental health."
        },
        {
            name: "Virginia Woolf",
            realName: "Adeline Virginia Woolf",
            dateOfDeath: "1941-03-28",
            causeOfDeath: "Suicide by drowning",
            lastWork: "Between the Acts",
            details: "Virginia Woolf drowned herself in the River Ouse near her home in Sussex, England."
        },
        {
            name: "Edgar Allan Poe",
            realName: "Edgar Allan Poe",
            dateOfDeath: "1849-10-07",
            causeOfDeath: "Unknown",
            lastWork: "Annabel Lee",
            details: "Poe was found delirious on the streets of Baltimore and died in the hospital; the exact cause of his death remains a mystery."
        },
        {
            name: "F. Scott Fitzgerald",
            realName: "Francis Scott Key Fitzgerald",
            dateOfDeath: "1940-12-21",
            causeOfDeath: "Heart attack",
            lastWork: "The Last Tycoon",
            details: "Fitzgerald died of a heart attack at the age of 44, leaving his final novel, 'The Last Tycoon', unfinished."
        },
        {
            name: "Hunter S. Thompson",
            realName: "Hunter Stockton Thompson",
            dateOfDeath: "2005-02-20",
            causeOfDeath: "Suicide by gunshot",
            lastWork: "Hey Rube: Blood Sport, the Bush Doctrine, and the Downward Spiral of Dumbness",
            details: "Thompson took his own life at his home in Colorado, leaving behind a note titled 'Football Season Is Over'."
        }
    ],
    "Scientists": [
        {
            name: "Albert Einstein",
            realName: "Albert Einstein",
            dateOfDeath: "1955-04-18",
            causeOfDeath: "Abdominal aortic aneurysm",
            lastWork: "Unfinished unified field theory",
            details: "Einstein died at Princeton Hospital after refusing surgery, saying: 'I want to go when I want. It is tasteless to prolong life artificially. I have done my share; it is time to go. I will do it elegantly.'"
        },
        {
            name: "Stephen Hawking",
            realName: "Stephen William Hawking",
            dateOfDeath: "2018-03-14",
            causeOfDeath: "Complications from ALS",
            lastWork: "Brief Answers to the Big Questions",
            details: "Hawking died peacefully at his home in Cambridge, 55 years after his diagnosis with motor neurone disease."
        },
        {
            name: "Marie Curie",
            realName: "Maria Skłodowska-Curie",
            dateOfDeath: "1934-07-04",
            causeOfDeath: "Aplastic anemia from radiation exposure",
            lastWork: "Radioactivity",
            details: "Curie died from aplastic anemia, likely caused by her long-term exposure to radiation through her work."
        },
        {
            name: "Nikola Tesla",
            realName: "Nikola Tesla",
            dateOfDeath: "1943-01-07",
            causeOfDeath: "Coronary thrombosis",
            lastWork: "Teleforce",
            details: "Tesla died alone in Room 3327 of the New Yorker Hotel, where he had lived for the last ten years of his life."
        }
    ],
    "Civil Rights Leaders": [
        {
            name: "Martin Luther King Jr.",
            realName: "Michael King Jr.",
            dateOfDeath: "1968-04-04",
            causeOfDeath: "Assassination",
            lastSpeech: "I've Been to the Mountaintop",
            details: "Dr. King was assassinated on the balcony of the Lorraine Motel in Memphis, Tennessee."
        },
        {
            name: "Malcolm X",
            realName: "Malcolm Little",
            dateOfDeath: "1965-02-21",
            causeOfDeath: "Assassination",
            lastSpeech: "Speech at Columbia University",
            details: "Malcolm X was assassinated while giving a speech at the Audubon Ballroom in New York City."
        },
        {
            name: "Nelson Mandela",
            realName: "Nelson Rolihlahla Mandela",
            dateOfDeath: "2013-12-05",
            causeOfDeath: "Respiratory failure",
            lastPublicAppearance: "2010 FIFA World Cup closing ceremony",
            details: "Nelson Mandela died at his home in Johannesburg at the age of 95."
        }
    ],
    "World Leaders": [
        {
            name: "Winston Churchill",
            realName: "Sir Winston Leonard Spencer-Churchill",
            dateOfDeath: "1965-01-24",
            causeOfDeath: "Stroke",
            lastPublicAppearance: "House of Commons (1964)",
            details: "Churchill died at his London home, aged 90, on the morning of Sunday 24 January 1965, 70 years to the day after his father's death."
        },
        {
            name: "Mahatma Gandhi",
            realName: "Mohandas Karamchand Gandhi",
            dateOfDeath: "1948-01-30",
            causeOfDeath: "Assassination",
            lastWords: "Hey Ram... Oh god!",
            details: "Gandhi was assassinated by Nathuram Godse, who shot him three times in the chest at point-blank range."
        },
        {
            name: "John F. Kennedy",
            realName: "John Fitzgerald Kennedy",
            dateOfDeath: "1963-11-22",
            causeOfDeath: "Assassination",
            lastPublicAppearance: "Motorcade in Dallas",
            details: "President Kennedy was assassinated while riding in a motorcade in Dallas, Texas."
        }
    ],
    "Philosophers": [
        {
            name: "Socrates",
            realName: "Socrates",
            dateOfDeath: "399 BC",
            causeOfDeath: "Execution by poisoning",
            lastWords: "Crito, we owe a cock to Asclepius. Please, don't forget to pay the debt.",
            details: "Socrates was sentenced to death by drinking a poisonous hemlock potion for corrupting the minds of the youth of Athens and impiety."
        },
        {
            name: "Friedrich Nietzsche",
            realName: "Friedrich Wilhelm Nietzsche",
            dateOfDeath: "1900-08-25",
            causeOfDeath: "Pneumonia and stroke",
            lastWork: "Ecce Homo",
            details: "Nietzsche suffered a collapse in 1889 and spent the last decade of his life in a state of mental incapacitation."
        },
        {
            name: "Jean-Paul Sartre",
            realName: "Jean-Paul Charles Aymard Sartre",
            dateOfDeath: "1980-04-15",
            causeOfDeath: "Edema of the lung",
            lastWork: "Critique of Dialectical Reason",
            details: "Sartre died at the Broussais Hospital in Paris at the age of 74."
        },
    ]
};


//display the death data
const deathList = document.getElementById('death-list');

function searchDeaths() {
    const searchTerm = document.getElementById('nameSearch').value.toLowerCase();
    const selectedCategory = document.getElementById('categorySearch').value;
    
    deathList.innerHTML = '';
    
    Object.keys(deathData).forEach(category => {
        if (selectedCategory === 'all' || selectedCategory === category) {
            const filteredDeaths = deathData[category].filter(death => 
                death.name.toLowerCase().includes(searchTerm) ||
                death.realName.toLowerCase().includes(searchTerm)
            );
            
            filteredDeaths.forEach(death => {
                const deathCard = document.createElement('div');
                deathCard.classList.add('death-card');
                deathCard.innerHTML = `
                    <h3>${death.name}</h3>
                    <p><strong>Real Name:</strong> ${death.realName}</p>
                    <p><strong>Date of Death:</strong> ${death.dateOfDeath}</p>
                    <p><strong>Cause of Death:</strong> ${death.causeOfDeath}</p>
                    <p><strong>Last Work/Song/Appearance:</strong> ${death.lastSong || death.lastWork || death.lastPublicAppearance || 'N/A'}</p>
                    <p><strong>Details:</strong> ${death.details}</p>
                `;
                deathList.appendChild(deathCard);
            });
        }
    });
}

// search listeners
document.getElementById('nameSearch').addEventListener('input', searchDeaths);
document.getElementById('categorySearch').addEventListener('change', searchDeaths);

// show it
searchDeaths();
