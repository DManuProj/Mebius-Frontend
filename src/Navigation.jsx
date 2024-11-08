import { ShoppingCart } from "lucide-react";

function Navigation({ name, cartCount }) {
  return (
    <nav className="flex items-center justify-between p-8 mx-16">
      <div className="flex gap-x-16">
        <a className="font-semibold text-3xl" href="/">
          Mebius
        </a>
        <div className="flex items-center gap-4">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <a href="/cart" className="flex items-center gap-4 relative">
            <p className="text-lg">{cartCount}</p>
            <div className="flex items-center gap-2">
              <ShoppingCart />
              Cart
            </div>
          </a>
        </div>

        {name ? (
          <p>Hi, {name}</p>
        ) : (
          <>
            <p> Sign In</p>
            <p> Sign Up</p>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
