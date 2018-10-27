function WelcomeHeader(props) {
  return (
    <div>
      <h2>{props.header}</h2>
      <p>{props.subHeader}</p>
    </div>
  )
}

function Options(props) {
  
  return (
    <div>
      <h2>Choose Options</h2>
      <p>
        New Only <input type="checkbox" id="coding" name="interest" value="coding" checked={props.checked}></input>
      </p>
      <p>
        Select Type <Select types={Object.keys(props.data)} />
      </p>
      <CarTypes types={props.data} />
    </div>
  )
}

function Select(props) {
  const options = props.types.map(type => <option value={type}>{type}</option>);
  return (
    <select>
      <option value='All'>All</option>
      {options}
    </select>
  )
}

function CarTypes(props) {
  const carTypes = Object.keys(props.types).map(type => 
    <div>
      <h2>{type}</h2>
      <CarList list={props.types[type]}/>
    </div>);
  return (<div>{carTypes}</div>)
}

function CarList(props) {
  const list = props.list.map(list => 
    <CarInfo year={list.year} model={list.model} price={list.price} />
    );
  return (
    <div>{list}</div>
  )  
}  

function CarInfo(props) {
  return (
    <ul>
      <table>
        <tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr>
        <tr>
          <td>{props.year}</td>
          <td>{props.model}</td>
          <td>${props.price}</td>
          <td><button>Buy Now</button></td>
        </tr>
      </table>
    </ul>
  )
}

function VehicleData() {
  return {
    'Cars': [
      {year: 2013, model:'A', price: 3200},
      {year: 2011, model:'B', price: 4400},
      {year: 2016, model:'B', price: 15500},
    ],
    'Trucks': [
      {year: 2014, model:'D', price: 18000},
      {year: 2013, model:'E', price: 5200},
    ],
    'Convertibles': [
      {year: 2009, model:'E', price: 2000},
      {year: 2010, model:'E', price: 6000},
      {year: 2012, model:'E', price: 12500},
      {year: 2017, model:'E', price: 50000},
    ]

  }
}

function TransportApp() {
  return (
    <main>
      <WelcomeHeader header="Welcome to React Transportation" subHeader="The best place to buy vehicles online" />
      <Options checked={true} data={VehicleData()}/>
    </main>
  )
}

ReactDOM.render(
  <TransportApp />,
  document.getElementById('root')
)