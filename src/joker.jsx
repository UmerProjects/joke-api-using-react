import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});
  let URL = "https://official-joke-api.appspot.com/random_joke";
  let getNewJoke = async () => {
    let response = await fetch(URL);
    let responseJson = await response.json();
    console.log(responseJson);
    setJoke({ setup: responseJson.setup, punchline: responseJson.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let responseJson = await response.json();
      console.log(responseJson);
      setJoke({ setup: responseJson.setup, punchline: responseJson.punchline });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h4>joker</h4>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
