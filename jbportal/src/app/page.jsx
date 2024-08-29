import Menu from "../components/Menu";
import Footer from "../components/Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageSlider from "@/components/ImageSlider";

const images = [
  'images/slide2.png',
  'images/slide1.png',
];

export default function Home() {
  return (
    <div>
      <Menu />

      <ImageSlider />

      <Footer />
    </div>
  );
}
