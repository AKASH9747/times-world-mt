import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/app/store";

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
            </Carousel.Item>
          ))
        : null}
    </Carousel>
  );
};

export default HomeCarousel;
