import "./App.scss";
import GemsSection from "./sections/GemsSection/GemsSection";
import HeroSection from "./sections/HeroSection/HeroSection";

function App() {
  return (
    <>
      <HeroSection />
      <GemsSection />
      <WorkSection />
      <LettersSection />
      <ProfileSection />
      <WorkflowSection />
      <ContactSection />
    </>
  );
}



function WorkSection() {
  return <div>WorkSection</div>;
}

function LettersSection() {
  return <div>LettersSection</div>;
}

function ProfileSection() {
  return <div>ProfileSection</div>;
}

function WorkflowSection() {
  return <div>WorkflowSection</div>;
}

function ContactSection() {
  return <div>ContactSection</div>;
}

export default App;
