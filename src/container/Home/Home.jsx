import PrimaryLayout from "component/Layout/index";
import { CardContent } from "component/CardTrending/index";
import Banner from "component/Banner/index";
const Home = () => {
  return (
    <PrimaryLayout>
        <Banner/>
      <CardContent />
    </PrimaryLayout>
  );
};

export default Home;
