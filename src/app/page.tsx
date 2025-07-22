import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BlockchainSection from "@/components/BlockchainSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <HowItWorksSection />
            <BlockchainSection />
            <FAQSection />
            <FinalCTASection />
            <Footer />
        </div>
    );
}
