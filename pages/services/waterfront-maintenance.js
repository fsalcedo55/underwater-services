import { ServiceContent } from "../../components/serviceContent";
import { services } from "./services";

const WaterfrontMaintenance = () => {
  const currService = services.find(
    (service) => service.name === "Seawall Maintenance"
  );

  return (
    <div>
      <ServiceContent
        title="Waterfront Maintenance"
        image={currService.photo}
      />
    </div>
  );
};

export default WaterfrontMaintenance;
