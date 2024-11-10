// Static death data (no modification to this array, stays the same)
const deathData = [
    {
        name: "XXXTentacion",
        realName: "Jahseh Dwayne Ricardo Onfroy",
        dateOfDeath: "2018-06-18",
        causeOfDeath: "Gunshot wounds"
    },
    {
        name: "Juice WRLD",
        realName: "Jarad Higgins",
        dateOfDeath: "2019-12-08",
        causeOfDeath: "Seizure from overdose"
    },
    {
        name: "Jocelyn Flores",
        realName: "Jocelyn Amparo Flores",
        dateOfDeath: "2017-05-13",
        causeOfDeath: "Suicide"
    },
    {
        name: "Kurt Cobain",
        realName: "Kurt Donald Cobain",
        dateOfDeath: "1994-04-05",
        causeOfDeath: "Suicide by gunshot"
    },
    {
        name: "Tupac Shakur",
        realName: "Tupac Amaru Shakur",
        dateOfDeath: "1996-09-13",
        causeOfDeath: "Gunshot wounds"
    },
    {
        name: "Notorious B.I.G.",
        realName: "Christopher George Latore Wallace",
        dateOfDeath: "1997-03-09",
        causeOfDeath: "Gunshot wounds"
    },
    {
        name: "Aaliyah",
        realName: "Aaliyah Dana Haughton",
        dateOfDeath: "2001-08-25",
        causeOfDeath: "Plane crash"
    },
    {
        name: "Avicii",
        realName: "Tim Bergling",
        dateOfDeath: "2018-04-20",
        causeOfDeath: "Suicide by hanging"
    },
    {
        name: "Chris Cornell",
        realName: "Christopher John Boyle",
        dateOfDeath: "2017-05-18",
        causeOfDeath: "Suicide by hanging"
    },
    {
        name: "Mac Miller",
        realName: "Malcolm James McCormick",
        dateOfDeath: "2018-09-07",
        causeOfDeath: "Drug overdose"
    },
    {
        name: "Chester Bennington",
        realName: "Chester Charles Bennington",
        dateOfDeath: "2017-07-20",
        causeOfDeath: "Suicide by hanging"
    },
    {
        name: "Whitney Houston",
        realName: "Whitney Elizabeth Houston",
        dateOfDeath: "2012-02-11",
        causeOfDeath: "Drowning"
    },
    {
        name: "Amy Winehouse",
        realName: "Amy Jade Winehouse",
        dateOfDeath: "2011-07-23",
        causeOfDeath: "Alcohol poisoning"
    },
    {
        name: "Heath Ledger",
        realName: "Heathcliff Andrew Ledger",
        dateOfDeath: "2008-01-22",
        causeOfDeath: "Accidental overdose"
    },
    {
        name: "Robin Williams",
        realName: "Robin McLaurin Williams",
        dateOfDeath: "2014-08-11",
        causeOfDeath: "Suicide by hanging"
    },
    {
        name: "Princess Diana",
        realName: "Diana Frances Spencer",
        dateOfDeath: "1997-08-31",
        causeOfDeath: "Car crash"
    }
];

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

// Handle form submission
const form = document.getElementById('death-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const realName = document.getElementById('real-name').value;
    const dateOfDeath = document.getElementById('date-of-death').value;
    const causeOfDeath = document.getElementById('cause-of-death').value;

    // Send the data to the Discord webhook
    fetch('https://discord.com/api/webhooks/1305032174084423732/Aem8RBU_GflITGBxHImilgFg9uA_vpeOp-LjaTFlU1QbkkumzJ7Vn3_W1HtYCG2BojVr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `New Death Submission:\nName: ${name}\nReal Name: ${realName}\nDate of Death: ${dateOfDeath}\nCause of Death: ${causeOfDeath}`
        })
    })
    .then(response => response.json())
    .then(data => {
        alert('Submission sent!');
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
