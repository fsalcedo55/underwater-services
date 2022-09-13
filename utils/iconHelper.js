import {
  GiBoatPropeller,
  GiBrickWall,
  GiGlassBall,
  GiFallingRocks,
  GiWoodBeam,
  GiAncientColumns,
} from "react-icons/gi"
import { MdCleaningServices } from "react-icons/md"
import { IoMdBoat } from "react-icons/io"

export const iconHelper = (serviceName) => {
  let icon

  switch (serviceName) {
    case "Propellers":
      icon = <GiBoatPropeller />
      break
    case "Underwater Inspections":
      icon = <IoMdBoat />
      break
    case "Bottom Cleaning":
      icon = <MdCleaningServices />
      break
    case "Structural Fiberglass Repairs":
      icon = <GiGlassBall />
      break
    case "Seawall Maintenance":
      icon = <GiBrickWall />
      break
    case "Docks":
      icon = <GiWoodBeam />
      break
    case "Dredging and Rock Removal":
      icon = <GiFallingRocks />
      break
    case "Pilings":
      icon = <GiAncientColumns />
      break
    default:
      icon = <GiBoatPropeller />
      break
  }

  return icon
}
