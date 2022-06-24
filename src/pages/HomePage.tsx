import React from "react"

const Homepage = () => {
  const cars = [
    {
      manufacturer: "Toyota",
      model: "Camry",
      year: "2004",
      color: "Gray",
    },
    {
      manufacturer: "Honda",
      model: "civic",
      year: "2012",
      color: "White",
    },
    {
      manufacturer: "Mercedez",
      model: "G-Wagon",
      year: "2019",
      color: "Black",
    },
  ]
  // const [stardata, setStardata] = React.useState({})
  // const count = 1
  
  // React.useEffect(function(){
  //   fetch("https://swapi.dev/api/people/")
  //   .then(res => res.json())
  //   .then(data => setStardata(data))
  // }, [count])
  return (
    <div>
      <h1>Homepage</h1>
      {/* <pre>{JSON.stringify(stardata, null, 2)}</pre> */}
      <div>{JSON.stringify(cars)}</div>
    </div>
  );
};
export default Homepage;
