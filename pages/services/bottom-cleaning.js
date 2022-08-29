import { ServiceContent } from "../../components/serviceContent";
import { services } from "./services";

const BottomCleaning = () => {
  const currService = services.find(
    (service) => service.name === "Bottom Cleaning"
  );

  return (
    <div>
      <ServiceContent title="Bottom Cleaning" image={currService.photo} />
    </div>
  );
};

export default BottomCleaning;
