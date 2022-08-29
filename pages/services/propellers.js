import { ServiceContent } from "../../components/serviceContent";
import { services } from "./services";

const Propellers = () => {
  const currService = services.find((service) => service.name === "Propellers");
  return (
    <div>
      <ServiceContent title="Propellers" image={currService.photo} />
    </div>
  );
};

export default Propellers;
