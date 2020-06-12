let time = ["15 seconds", "30 seconds", "1 minute", "several minutes"];
let key = ["A", "B", "C", 'D', 'E', 'F', 'G', 'a', 'b', 'c', 'd', 'e', 'f', 'g', "Ab", "Bb", "C#", 'no key', 'Eb', 'F#', 'G#', 'a flat', 'b flat', 'c#', 'd flat', 'e flat', 'f#', 'g#'];
let emotions = `Admiring
Adoring
Affectionate
Appreciative
Approving
Calm
Celebratory
Cheerful
Comforting
Comic
Compassionate
Complimentary
Confident
Delightful
Ecstatic
Empathetic
Encouraging
Excited
Exhilarated
Friendly
Funny
Happy
Hilarious
Hopeful
Humorous
Interested
Joyful
Light
Lively
Modest
Nostalgic
Optimistic
Passionate
Playful
Proud
Reassuring
Relaxed
Respectful
Romantic
Scholarly
Self-assured
Sentimental
Silly
Straightforward
Sympathetic
Tender
Angry
Annoyed
Anxious
Apprehensive
Belligerent
Bitter
Blunt
Bossy
Cold
Conceited
Condescending
Confused
Demanding
Depressed
Desolate
Despairing
Desperate
Detached
Disappointed
Disliking
Disrespectful
Doubtful
Embarrassed
Fearful
Forceful
Frantic
Frightened
Frustrated
Furious
Gloomy
Grave
Greedy
Grim
Harsh
Hopeless
Hostile
Impatient
Indifferent
Insecure
Mischievous
Miserable
Mocking
Mournful
Nervous
Outraged
Paranoid
Pathetic
Pessimistic
Psychotic
Sarcastic
Selfish
Serious
Severe
Skeptical
Stressful
Suspicious
Tense
Threatening
Tragic
Uncertain
Uneasy
Unfriendly
Unsympathetic`.split("\n");
let wisdom = ["invert intentionsdo opposite of this prompt", "last dream journal entry", "todo list", "I-IV-V", "use a random scale on Wolfram Tone", "only two chords", "ostinato", "one melodic idea", "no dynamic changes", "nothing happens", "modulation", "hajanga.com"];
let meter = [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 15, 17, 18, 19];
let meterBottom = [2, 4, 8];
let harmony = ["diatonic", "diatonic", "diatonic", "diatonic", "only use 2 notes at a time", "only use 3 notes at a time", "only use 4 notes", "only use 5 notes", "quartal", "quintal", "all triads", "whatever harmony you want", "no vertical/comping"];

let tempo = `Larghissimo (24 bpm and under)
Adagissimo very slowly
Grave (25–45 bpm)
Largo broadly (40–60 bpm)
Lento (45–60 bpm)
Larghetto (60–66 bpm)
Adagio (66–76 bpm)
Adagietto (72–76 bpm)
Andante (76–108 bpm)
Andantino (80–108 bpm)
Marcia moderato (83–85 bpm)
Andante moderato (92–98 bpm)
Moderato (98–112 bpm)
Allegretto (102–110 bpm)
Allegro moderato (116–120 bpm)
Allegro (120–156 bpm)
Vivace (156–176 bpm)
Vivacissimo (172–176 bpm)
Allegrissimo (172–176 bpm)
Presto (168–200 bpm)
Prestissimo (200 bpm and over)`.split("\n");

let textures = `hard
lineny
silky
wet
rough
smooth
sticky
grainy
papery
plasticy
woody
bumply
net-like
fish-like
hair-like
screen-like
curved
pointy
straight
wet
slippery
weird
odd
familiar
creepy
buttony
raised
dented
cloth-like
textured
not textured
scaly
ripply
wavy
goosebumpy
hary (not hairlike)
nobby
squishy
carved
soft
hard
lineny
silky
wet
rough
smooth
sticky
grainy
papery
plasticy
woody
bumply
net-like
fish-like
hair-like
screen-like
curved
pointy
straight
wet
slippery
weird
odd
familiar
creepy
buttony
raised
dented
cloth-like
textured
not textured
scaly
ripply
wavy
goosebumpy
hary (not hairlike)
nobb

squishy
carved`.split("\n");



function randomOf(array) {
	return array[Math.floor(Math.random() * array.length)];
}

document.getElementById("form").addEventListener("submit", (e) => {
	e.preventDefault();
	
	let answers = [];
	
	let polyMeter = Math.ceil(Math.random() * 2);
	for(let i = 0; i<polyMeter; i++) {
		answers.push(randomOf(meter) + "/" + randomOf(meterBottom));
	}
	answers.push(randomOf(tempo));
	answers.push(randomOf(key));
	answers.push(randomOf(time));
	answers.push("");
	answers.push(randomOf(wisdom));
	answers.push(randomOf(harmony));
	answers.push(randomOf(textures));
	answers.push(randomOf(emotions));
	answers.push(randomOf(emotions));
		
	let answerP = document.createElement("p");
	answerP.innerHTML = answers.join("<br>").toLowerCase() + "<br><br><br>";
	document.getElementById("ideas").appendChild(answerP);
});
