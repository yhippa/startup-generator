import { useState, useEffect } from 'react'

const normalIdeas = [
  "Airbnb for RV parking",
  "Subscription box for sustainable cleaning products",
  "AI tool that summarizes legal contracts",
  "Uber for dental hygienists",
  "Slack plugin for lunch coordination",
];

const cursedIdeas = [
  "OnlyFans for dogs",
  "Uber for cursed objects",
  "Blockchain-powered funeral livestreams",
  "AI-generated baby names based on stock prices",
  "Zoom for seances",
];

const nonsenseEndings = [
  "...but it's an NFT",
  "...run by sentient pigeons",
  "...with AI voice clones of your parents",
  "...powered by vibes",
  "...backed by Saudi VC money",
];

function App() {
  const [idea, setIdea] = useState('');
  const [weirdness, setWeirdness] = useState(() =>
    parseInt(localStorage.getItem('weirdnessIndex') || '0')
  );

  const generateIdea = () => {
    const newWeirdness = weirdness + 1;
    localStorage.setItem('weirdnessIndex', newWeirdness);
    setWeirdness(newWeirdness);

    let baseIdea = '';
    if (newWeirdness < 5) {
      baseIdea = normalIdeas[Math.floor(Math.random() * normalIdeas.length)];
    } else {
      const allIdeas = [...normalIdeas, ...cursedIdeas];
      baseIdea = allIdeas[Math.floor(Math.random() * allIdeas.length)];
      const ending = nonsenseEndings[Math.floor(Math.random() * nonsenseEndings.length)];
      baseIdea = `${baseIdea} ${ending}`;
    }

    setIdea(baseIdea);
  };

  useEffect(() => {
    generateIdea();
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Startup Idea Generator</h1>
      <p><strong>VC Confidence Meter:</strong> 💸💸💸💸💸</p>
      <div style={{ margin: '2rem 0', fontSize: '1.5rem' }}>{idea}</div>
      <button onClick={generateIdea} style={{ fontSize: '1.2rem', padding: '0.5rem 1rem' }}>
        Generate Another
      </button>
      <p></p>
      <button
  onClick={() => {
    localStorage.setItem('weirdnessIndex', '0');
    setWeirdness(0);
    generateIdea();
  }}
  style={{ marginTop: '1rem', fontSize: '0.8rem' }}
>
  Reset Weirdness
</button>
      <p style={{ marginTop: '2rem', fontSize: '0.9rem' }}>Weirdness Level: {weirdness}</p>
      <a
  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `💡 Startup Idea:\n${idea}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  style={{ display: 'block', marginTop: '1rem', fontSize: '0.9rem' }}
>
  Share on Twitter
</a>
    </main>
  );
}

export default App;