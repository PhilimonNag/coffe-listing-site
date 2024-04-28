import './tab.css'
export default function Tab({ setSelectedTab, selectedTab }) {

  function handleTab(tab) {
    setSelectedTab(tab);
  }

  return (
    <div className="tab">
      <p onClick={() => handleTab("All Products")} className={selectedTab === 'All Products' ? 'active' : 'inactive'}>All Products</p>
      <p onClick={() => handleTab("Available Now")} className={selectedTab === 'Available Now' ? 'active' : 'inactive'}>Available Now</p>
    </div>
  );
}
