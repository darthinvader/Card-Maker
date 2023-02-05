import ActionCard from "./components/Card/ActionCard";
import Card from "./components/Card/Card";
import PitStopCard from "./components/Card/PitStopCard";

function App() {
  return (
    <div className="flex flex-row">
      <PitStopCard
        width={400}
        height={600}
        title="PitStopper"
        url="https://staticg.sportskeeda.com/wp-content/uploads/2015/10/a-1445690699-800.jpg"
        effect="This card has a very big and boring effect description that noone wants to read"
        funtext="Come on you can do it"
      />
      <ActionCard
        width={400}
        height={600}
        title="Action Card"
        url="https://media.hinrichfoundation.com/media/x51ag21x/carputer-parts.png"
        effect="This card has a very big and boring effect description that noone wants to read"
        funtext="Come on you can do it"
        energyCost={5}
        moneyCost={5}
      />
    </div>
  );
}

export default App;
