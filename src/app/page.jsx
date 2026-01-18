import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import Addcards from "@/components/Addcards";
import Image from "next/image";
import Subscribe from "@/components/Subscribe";
import Stickers from "@/components/Stickers";
import Footer from "@/components/Footer";
import PopularProducts from "@/components/PopularProducts";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Category></Category>
      <Addcards></Addcards>
      <PopularProducts></PopularProducts>
      <Subscribe></Subscribe>
      <Stickers></Stickers>
      <Footer></Footer>
    </div>
  );
}
