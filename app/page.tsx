import HeroSection from "./(landing)/components/home/hero";
import CategoriesSection from "./(landing)/components/home/categories";
import Products from "./(landing)/components/home/products";


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <CategoriesSection/>
      <Products/>
    </main>
  );
}
