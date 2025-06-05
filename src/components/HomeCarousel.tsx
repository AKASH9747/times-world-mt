import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const HomeCarousel = () => {
  const countries = useSelector(
    (state: RootState) => state.countries.countries
  );

  return (
    <Carousel className="container p-0">
      {countries.length > 0
        ? countries.map((country, index) => (
            <Carousel.Item key={index}>
              <img src={country.flag} alt={`Slide ${index}`} />
              <Carousel.Caption>
                <h3>First Slide</h3>
                <p>This is the first slide description.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        : null}
    </Carousel>
  );
};

export default HomeCarousel;
