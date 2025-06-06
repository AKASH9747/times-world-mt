import { useEffect } from "react";
import Header from "../../components/Header";
import HomeCarousel from "../../components/HomeCarousel";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { getCountriesDetails } from "../../features/countriesSlice";
import CountryCard from "../../components/CountryCard";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(
    (state: RootState) => state.countries.isLoading
  );

  useEffect(() => {
    dispatch(getCountriesDetails(""));
  }, [dispatch]);

  return (
    <div className="p-1">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="welcome-box container">
            <hr className="hr-line" />
            <h1 className="welcome-text">WELCOME</h1>
            <hr className="hr-line" />
          </div>
          <HomeCarousel />
          <CountryCard />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
