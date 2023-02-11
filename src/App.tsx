import { useEffect, useState } from "react";

import ActionCard from "./components/Card/ActionCard";
import CorpoCard from "./components/Card/CorpoCard";
import PitStopCard from "./components/Card/PitStopCard";
import axios from "axios";

function App() {
  const [corpo, setCorpo] = useState([]);
  const [pitStop, setPitStop] = useState([]);
  const [action, setAction] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/corpo").then(function (response) {
      setCorpo(response.data);
    });
    axios("http://localhost:3000/pitStop").then(function (response) {
      setPitStop(response.data);
    });
    axios("http://localhost:3000/action").then(function (response) {
      setAction(response.data);
    });
  }, []);

  return (
    <div className="flex flex-row gap-5 m-5">
      <div className="flex gap-5 flex-col">
        {corpo?.map((corpoCard) => (
          <CorpoCard
            height={600}
            width={400}
            title={corpoCard.title}
            url={corpoCard.imageUrl}
            energyCost1={corpoCard.energyCost1}
            speedCost1={corpoCard.speedCost1}
            money1={corpoCard.money1}
            effect1={corpoCard.effect1}
            funtext1={corpoCard.funtext1}
            energyCost2={corpoCard.energyCost2}
            speedCost2={corpoCard.speedCost2}
            money2={corpoCard.money2}
            effect2={corpoCard.effect2}
            funtext2={corpoCard.funtext2}
          />
        ))}
      </div>
      <div className="flex gap-5 flex-col">
        {pitStop?.map((pitStopCard) => (
          <PitStopCard
            width={400}
            height={600}
            title={pitStopCard.title}
            url={pitStopCard.imageUrl}
            effect={pitStopCard.effect}
            funtext={pitStopCard.funtext}
          />
        ))}
      </div>
      <div className="flex gap-5 flex-col">
        {action?.map((actionCard) => (
          <ActionCard
            width={400}
            height={600}
            title={actionCard.title}
            url={actionCard.imageUrl}
            effect={actionCard.effect}
            actionType={actionCard.actionType}
            funtext={actionCard.funtext}
            energyCost={actionCard.energyCost}
            moneyCost={actionCard.moneyCost}
          />
        ))}
      </div>
    </div>
    // <div className="flex flex-row">
    // <PitStopCard
    //   width={400}
    //   height={600}
    //   title="PitStopper"
    //   url="https://staticg.sportskeeda.com/wp-content/uploads/2015/10/a-1445690699-800.jpg"
    //   effect="This card has a very big and boring effect description that noone wants to read"
    //   funtext="Come on you can do it"
    // />
    // <ActionCard
    //   width={400}
    //   height={600}
    //   title="Action Card"
    //   url="https://media.hinrichfoundation.com/media/x51ag21x/carputer-parts.png"
    //   effect="This card has a very big and boring effect description that noone wants to read"
    //   funtext="Come on you can do it"
    //   energyCost={5}
    //   moneyCost={5}
    // />
    // <CorpoCard
    //   height={600}
    //   width={400}
    //   title="CorpoCard"
    //   url="https://thumbs.dreamstime.com/z/letter-p-logo-modern-business-corporate-symbol-design-set-60965417.jpg"
    //   energyCost1={3}
    //   speedCost1={2}
    //   money1={7}
    //   effect1="Really long fucking text"
    //   funtext1="Ahhahahah this is really long"
    //   energyCost2={5}
    //   speedCost2={4}
    //   money2={12}
    //   effect2="Really long fucking text"
    //   funtext2="Ahhahahah this is really long"
    // />
    //   </div>
  );
}

export default App;
