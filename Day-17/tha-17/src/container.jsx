export let Container = () => {
  return (
    <div className="container">
      <h1 className="heading">Calorie Chart</h1>
      <Cards />
    </div>
  );
};

function Items(props){
        console.log(props);
        const {name , cal } = props;
        return (
            <div className = 'item'>
                <p className = 'name'>{name}</p>
                <p className = 'info'>{'You have consumed ' + cal + ' cals today'}</p>
            </div>
        );
}

function Cards(){
return (
  <>
    <Items name="Paneer Parantha" cal="260"></Items>
    <Items name="Chickpeas" cal="364"></Items>
    <Items name="White Rice" cal="300 "></Items>
    <Items name="Clarified Butter (Ghee)" cal="135"></Items>
    <Items name="Samosas" cal="60"></Items>
    <Items name="Pav bhaji" cal="600"></Items>
    <Items name="Chhole Bhature" cal="450 "></Items>
    <Items name="Barfi" cal="103"></Items>
    <Items name="Jalebi" cal="459"></Items>
    <Items name="Ras Mallai" cal="250"></Items>
  </>
);
}
