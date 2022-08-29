import { ServiceContent } from "../../components/serviceContent";
import { services } from "./services";

const StructuralFiberglassRepairs = () => {
  const currService = services.find(
    (service) => service.name === "Structural Fiberglass Repairs"
  );

  return (
    <div>
      <ServiceContent
        title="Structural Fiberglass Repairs"
        image={currService.photo}
      />
    </div>
  );
};

export default StructuralFiberglassRepairs;
