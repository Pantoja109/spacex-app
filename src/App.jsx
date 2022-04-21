import { useState, useEffect } from "react";
import { Heading, Image } from "@chakra-ui/react";
import { LaunchItem } from "./components/LaunchItem.jsx";
import * as API from "./services/launches";
import logo from "./assets/logo.png";

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);
  return (
    <div>
      <Image m={4} src={logo} alt="" width={300} />
      <Heading as="h1" size="lg" m={4}>
        SpaceX App!
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </div>
  );
}

export default App;
