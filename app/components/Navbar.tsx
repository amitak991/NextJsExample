
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/"  className="logo">

          <h1>Product App</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/products/new">Add Product</Link>
          </li>
        </ul>
      </div>
      </nav>
  )};

export default Navbar;