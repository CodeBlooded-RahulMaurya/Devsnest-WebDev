
var dataa = [
  { Name: "Paneer Parantha", cal: "260" },

  { Name: "Chickpeas", cal: "364" },

  { Name: "White Rice", cal: "300" },
  { Name: "Clarified Butter (Ghee)", cal: "135" },
  { Name: "Samosas", cal: "60" },
  { Name: "Pav bhaji", cal: "600" },
  { Name: "Chhole Bhature", cal: "450" },
  { Name: "Barfi", cal: "103" },
  { Name: "Jalebi", cal: "459" },
  { Name: "Ras Mallai", cal: "250" },
];

export let Container = () => {
  return (
    <div className="container">
      <h1 className="heading">Calorie Chart</h1>
      <Cards />
    </div>
  );
};

function Items(props) {
  // console.log(props);
  const { name, cal } = props;
  const [itemsData, setItemsData] = useState(dataa);
  const setItems = (n,c) => {
    let d = itemsData.filter((a)=>{
       return  a.Name !== n
    })
    console.log(d);
    setItemsData(d);
  };
  return (
    <div className="item">
      <p className="name">{name}</p>
      <p className="info">
        {"You have consumed " + cal + " cals today. "}
        <button className="btn" onClick={setItems(name,cal)}>
          Delete
        </button>
      </p>
    </div>
  );
}
var items = [];

function getItems() {
  var l = dataa.length;
  console.log(l);
  for (let i = 0; i < l; i++) {
    items.push(<Items name={dataa[i].Name} cal={dataa[i].cal}></Items>);
  }
  return items;
}

function Cards() {
  return <>{getItems()}</>;
}
