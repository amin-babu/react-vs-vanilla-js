// const mydiv = React.createElement('div', null, React.createElement('p', null, 'Hello World!'));

const productPrice = 6500;

const Product = () => {
  const [quantity, setQuantity] = React.useState(0);

  function addToCart() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="min-w-16 basis-full md:basis-[48%] lg:basis-[32%] bg-slate-800 rounded-lg">
      <a href="">
        <img className="rounded-t-lg" src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product" alt="" />
      </a>
      <div className="flex justify-between items-center p-5">
        <div className="space-y-2">
          <h2 className="text-lg">Reactive Accelerator Course</h2>
          <h5 id="price" className="text-2xl font-bold">$ {productPrice}</h5>
        </div>
        <div className="space-y-2 text-right">
          <h5 id="totalPrice" className="text-teal-400 text-lg font-medium">Total: $ {quantity * productPrice}</h5>
          <button onClick={addToCart} className="py-1 px-3 bg-cyan-800 rounded-lg cursor-pointer">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <>
    <Product />
    <Product />
    <Product />
    <Product />
  </>
  , document.getElementById('root'));