import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation } from "wouter";
import Navbar, { type ActiveLink } from "@/components/Navbar";
import { CartProvider } from "@/context/cart-context";
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import ProductDetail from "@/pages/ProductDetail";
import Heritage from "@/pages/Heritage";
import Bespoke from "@/pages/Bespoke";
import World from "@/pages/World";
import Search from "@/pages/Search";
import Cart from "@/pages/Cart";
import Account from "@/pages/Account";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function AppChrome() {
  const [location] = useLocation();

  if (location.startsWith("/world")) {
    return null;
  }

  const activeLink: ActiveLink =
    location.startsWith("/search") || location.startsWith("/cart") || location.startsWith("/account")
      ? "none"
      : location.startsWith("/heritage")
        ? "heritage"
        : location.startsWith("/bespoke")
          ? "bespoke"
          : location.startsWith("/world")
            ? "world"
            : "collections";

  return <Navbar activeLink={activeLink} />;
}

function Router() {
  return (
    <>
      <AppChrome />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/collection" component={Collection} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/heritage" component={Heritage} />
        <Route path="/bespoke" component={Bespoke} />
        <Route path="/world" component={World} />
        <Route path="/search" component={Search} />
        <Route path="/cart" component={Cart} />
        <Route path="/account" component={Account} />
        <Route path="/checkout" component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
