import BodyComponent from "@/components/body-component";
import Details from "@/components/details";
import Footer from "@/components/footer-component";
import Header from "@/components/header-component";
export default function Home() {
  return (

    <div className="bg-white">
      <Header />
      <div className="mt-10">
        <BodyComponent />
      </div>
      <div>
        <Details />
      </div>
      <div className="mt-6">
        <Footer />
      </div>

    </div>

  );
}
