import { useEffect } from "react";
import Header from "../../components/Header";
import HomeCarousel from "../../components/HomeCarousel";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { getCountriesDetails } from "../../features/countriesSlice";
import CountryCard from "../../components/CountryCard";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCountriesDetails(""));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="welcome-box container">
        <hr className="hr-line" />
        <h1 className="welcome-text">WELCOME</h1>
        <hr className="hr-line" />
      </div>
      <HomeCarousel />
      <CountryCard />
    </div>
  );
};

export default Home;
