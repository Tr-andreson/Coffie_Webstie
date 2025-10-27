import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeModule = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,     // whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{ backgroundImage: "url('./hero.png')" }}
      >
        <div className="container mx-auto">
          <h4>We serve the richest coffee in this city</h4>
        </div>
      </div>

      <div
        className="container mx-auto h-[50vh] mt-[100px]"
        data-aos="fade-up"
      >
        <h4>LOGO MODULE</h4>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <img
            src="./Coffie1.png"
            alt="Coffee"
          />

          <img
            src="./Coffie2.png"
            alt="Coffee"
          />

          <img
            src="./Coffie3.png"
            alt="Coffee"
          />

          <img
            src="./Coffie4.png"
            alt="Coffee"
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="container mx-auto h-[50vh]">
        <h4>Our Special Coffee</h4>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <img
            src="./Coffie5.png"
            alt="Coffee"
          />

          <img
            src="./Coffie6.png"
            alt="Coffee"
          />

          <img
            src="./Coffie7.png"
            alt="Coffee"
          />

          <img
            src="./Coffie8.png"
            alt="Coffee"
          />

        </div>
      </div>

      <div>
        <h4>Our Special Desserts</h4>
      </div>

      <div>
        <h4>Banner</h4>
      </div>

      <div>
        <h4>Reviews</h4>
      </div>

      <div>
        <h4>Join</h4>
      </div>

      <div>
        <h4>Footer</h4>
      </div>
    </div>
  );
};

export default HomeModule;
