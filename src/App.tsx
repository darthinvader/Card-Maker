import ActionCard from "./components/Card/ActionCard";
import Card from "./components/Card/Card";
import CorpoCard from "./components/Card/CorpoCard";
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
      <CorpoCard
        height={600}
        width={400}
        title="CorpoCard"
        url="https://thumbs.dreamstime.com/z/letter-p-logo-modern-business-corporate-symbol-design-set-60965417.jpg"
        energyCost1={3}
        speedCost1={2}
        money1={7}
        effect1="Really long fucking text"
        funtext1="Ahhahahah this is really long"
        energyCost2={5}
        speedCost2={4}
        money2={12}
        effect2="Really long fucking text"
        funtext2="Ahhahahah this is really long"
      />
    </div>
  );
}

export default App;
