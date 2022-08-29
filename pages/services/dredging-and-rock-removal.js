import { ServiceContent } from "../../components/serviceContent";
import { services } from "./services";

const DredgingAndRockRemoval = () => {
  const currService = services.find(
    (service) => service.name === "Dredging and Rock Removal"
  );

  return (
    <div>
      <ServiceContent
        title="Dredging And Rock Removal"
        image={currService.photo}
      />
    </div>
  );
};

export default DredgingAndRockRemoval;
