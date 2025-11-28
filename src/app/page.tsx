import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import PersonalizedPlan from "@/components/PersonalizedPlan";
import CareerSignals from "@/components/CareerSignals";
import MobileApp from "@/components/MobileApp";
import Experts from "@/components/Experts";
import Testimonials from "@/components/Testimonials";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <PersonalizedPlan />
      <CareerSignals />
      <MobileApp />
      <Experts />
      <Testimonials />
      <Membership />
      <Footer />
    </main>
  );
}
