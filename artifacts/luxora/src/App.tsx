import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import ProductDetail from "@/pages/ProductDetail";
import Heritage from "@/pages/Heritage";
import Bespoke from "@/pages/Bespoke";
import Checkout from "@/pages/Checkout";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/collection" component={Collection} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/heritage" component={Heritage} />
      <Route path="/bespoke" component={Bespoke} />
      <Route path="/checkout" component={Checkout} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
