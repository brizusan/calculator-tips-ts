import { Header, Menu, OrderMenu } from "./components";
import { useOrder } from "./hooks/useOrder";

function App() {
  const { addItem, removeItem,cleanOrder , order, isEmpty } =
    useOrder();

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2 gap-6 xl:gap-12  w-5/6 md:w-11/12 xl:w-full">
        <div>
          <h2 className="text-center font-bold text-2xl uppercase">Menu</h2>
          <Menu
            addItem={addItem}
          />
        </div>
        <OrderMenu 
          order={order}
          removeItem={removeItem}
          cleanOrder={cleanOrder}
          isEmpty={isEmpty}
        />
      </main>
    </>
  );
}

export default App;
