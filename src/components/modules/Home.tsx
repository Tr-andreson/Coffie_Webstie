import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "../card";

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
        className="container mx-auto h-[60vh] mt-[100px]"
        data-aos="fade-up"
      >

        <h4 className="text-center text-4xl my-4">Logo Module</h4>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <Card
            paragraph="This is the testing paragraph"
            name="Lungo Coffie"
            imageUrl={"./Coffie1.png"}
            price={200}
          />
          <Card
            paragraph="This is the testing paragraph"
            name="Lungo Coffie"
            imageUrl={"./Coffie2.png"}
            price={200}
          />

          <Card
            paragraph="This is the testing paragraph"
            name="Lungo Coffie"
            imageUrl={"./Coffie3.png"}
            price={200}
          />

          <Card
            paragraph="This is the testing paragraph"
            name="Lungo Coffie"
            imageUrl={"./Coffie4.png"}
            price={200}
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="container mx-auto h-[60vh]" >
        <h4 className="text-center text-4xl my-4">Our Special Coffee</h4>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <Card
            paragraph="This is the testing paragraph"
            name="Lungo Coffie"
            imageUrl={"./Coffie5.png"}
            price={200}
          />
          <Card
            paragraph="This is the testing paragraph"
            name="Lungo Coffie"
            imageUrl={"./Coffie6.png"}
            price={200}
          />

          <Card
            paragraph="This is the testing paragraph"
            name="Lungo Coffie"
            imageUrl={"./Coffie7.png"}
            price={200}
          />

          <Card
            paragraph="This is the testing paragraph"
            name="Lungo Coffie"
            imageUrl={"./Coffie8.png"}
            price={200}
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
