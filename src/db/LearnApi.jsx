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
//   let starWarData: any = []
  function loader (){
    axios.get('https://swapi.dev/api/people/')
      .then(function (response) {
        starWarData = response.data.results
        console.log(starWarData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(()=>{
    // Run function
    loader()

  },[])

    return (
      <div>
        <h1>Contact Us page</h1>
        {starWarData && <div>
          <div>{JSON.stringify(cars, null, 2)}</div>
        <DebugDataComponent data={starWarData} />
          </div>}
        
      </div>
    );