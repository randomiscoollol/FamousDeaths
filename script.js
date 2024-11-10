const deathData = [
    {
        name: "XXXTentacion",
        realName: "Jahseh Dwayne Ricardo Onfroy",
        dateOfDeath: "2018-06-18",
        causeOfDeath: "Gunshot wounds",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/XXXTentacion_2017.jpg"
    },
    {
        name: "Juice WRLD",
        realName: "Jarad Higgins",
        dateOfDeath: "2019-12-08",
        causeOfDeath: "Seizure from overdose",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Juice_WRLD_2019.jpg"
    },
    {
        name: "Jocelyn Flores",
        realName: "Jocelyn Amparo Flores",
        dateOfDeath: "2017-05-13",
        causeOfDeath: "Suicide",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Jocelyn_Flores_1.jpg"
    },
    {
        name: "Kurt Cobain",
        realName: "Kurt Donald Cobain",
        dateOfDeath: "1994-04-05",
        causeOfDeath: "Suicide by gunshot",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Kurt_Cobain_1993.jpg"
    },
    {
        name: "Tupac Shakur",
        realName: "Tupac Amaru Shakur",
        dateOfDeath: "1996-09-13",
        causeOfDeath: "Gunshot wounds",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Tupac_Amaru_Shakur_1993.jpg"
    },
    {
        name: "Notorious B.I.G.",
        realName: "Christopher George Latore Wallace",
        dateOfDeath: "1997-03-09",
        causeOfDeath: "Gunshot wounds",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/The_Notorious_B.I.G.jpg"
    },
    {
        name: "Aaliyah",
        realName: "Aaliyah Dana Haughton",
        dateOfDeath: "2001-08-25",
        causeOfDeath: "Plane crash",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Aaliyah_2001.jpg"
    },
    {
        name: "Avicii",
        realName: "Tim Bergling",
        dateOfDeath: "2018-04-20",
        causeOfDeath: "Suicide by hanging",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Avicii_2013.jpg"
    },
    {
        name: "Chris Cornell",
        realName: "Christopher John Boyle",
        dateOfDeath: "2017-05-18",
        causeOfDeath: "Suicide by hanging",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Chris_Cornell_2016.jpg"
    },
    {
        name: "Mac Miller",
        realName: "Malcolm James McCormick",
        dateOfDeath: "2018-09-07",
        causeOfDeath: "Drug overdose",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Mac_Miller_2014.jpg"
    },
    {
        name: "Chester Bennington",
        realName: "Chester Charles Bennington",
        dateOfDeath: "2017-07-20",
        causeOfDeath: "Suicide by hanging",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Chester_Bennington_2013.jpg"
    },
    {
        name: "Whitney Houston",
        realName: "Whitney Elizabeth Houston",
        dateOfDeath: "2012-02-11",
        causeOfDeath: "Drowning",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/Whitney_Houston_2010.jpg"
    },
    {
        name: "Amy Winehouse",
        realName: "Amy Jade Winehouse",
        dateOfDeath: "2011-07-23",
        causeOfDeath: "Alcohol poisoning",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Amy_Winehouse_2011.jpg"
    },
    {
        name: "Heath Ledger",
        realName: "Heathcliff Andrew Ledger",
        dateOfDeath: "2008-01-22",
        causeOfDeath: "Accidental overdose",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Heath_Ledger_2006.jpg"
    },
    {
        name: "Robin Williams",
        realName: "Robin McLaurin Williams",
        dateOfDeath: "2014-08-11",
        causeOfDeath: "Suicide by hanging",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Robin_Williams_2011.jpg"
    },
    {
        name: "Prinxess Diana",
        realName: "Diana Frances Spencer",
        dateOfDeath: "1997-08-31",
        causeOfDeath: "Car crash",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Diana_1994.jpg"
    }
];

// Function to display death data
function displayDeathData() {
    const deathList = document.getElementById("death-list");
    deathData.forEach(death => {
        const deathCard = document.createElement("div");
        deathCard.classList.add("death-card");
        
        deathCard.innerHTML = `
            <img src="${death.imageUrl}" alt="${death.name}" />
            <h3>${death.name}</h3>
            <p><strong>Real Name:</strong> ${death.realName}</p>
            <p><strong>Date of Death:</strong> ${death.dateOfDeath}</p>
            <p><strong>Cause of Death:</strong> ${death.causeOfDeath}</p>
        `;
        
        deathList.appendChild(deathCard);
    });
}

// Function to handle form submission
document.getElementById("death-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const realName = document.getElementById("real-name").value;
    const dateOfDeath = document.getElementById("date-of-death").value;
    const causeOfDeath = document.getElementById("cause-of-death").value;
    const imageUrl = document.getElementById("image-url").value;

    const death = {
        name,
        realName,
        dateOfDeath,
        causeOfDeath,
        imageUrl
    };

    // Add to the deathData array
    deathData.push(death);
    
    // Update the display
    displayDeathData();
    
    // Reset the form
    document.getElementById("death-form").reset();

    // Submit data to webhook (Discord)
    const webhookUrl = "https://discord.com/api/webhooks/1305032174084423732/Aem8RBU_GflITGBxHImilgFg9uA_vpeOp-LjaTFlU1QbkkumzJ7Vn3_W1HtYCG2BojVr";
    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: `${name} - ${realName}\nDate of Death: ${dateOfDeath}\nCause of Death: ${causeOfDeath}\nImage: ${imageUrl}`
        })
    });
});

// Display initial death data
displayDeathData();
