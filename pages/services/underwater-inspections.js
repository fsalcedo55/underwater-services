import { ServiceContent } from "../../components/serviceContent";
import { services } from "./services";

const UnderwaterInspections = () => {
  const currService = services.find(
    (service) => service.name === "Underwater Inspections"
  );

  return (
    <div>
      <ServiceContent
        title="Underwater Inspections"
        image={currService.photo}
      />
    </div>
  );
};

export default UnderwaterInspections;
