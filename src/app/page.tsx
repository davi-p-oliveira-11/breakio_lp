import CTASection from "./(sections)/CTASection/CTASection";
import FAQ from "./(sections)/FAQ/FAQ";
import Footer from "./(sections)/Footer/Footer";
import Hero from "./(sections)/Hero/Hero";
import Navbar from "./(sections)/Navbar/Navbar";
import ProductShowcase from "./(sections)/ProductShowcase/ProductShowcase";
import Testimonial from "./(sections)/Testimonial/Testimonial";
import ToolsGrid from "./(sections)/ToolsGrid/ToolsGrid";
import UserStories from "./(sections)/UserStories/UserStories";

export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero />
     <CTASection />
     <ProductShowcase />
     <UserStories />
     <Testimonial />
     <ToolsGrid />
     <FAQ />
     <Footer />
    </>
  );
}
