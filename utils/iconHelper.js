import {
  GiBoatPropeller,
  GiBrickWall,
  GiMetalDisc,
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
    case "Hull Cleaning":
      icon = <MdCleaningServices />
      break
    case "Cathodic Protection":
      icon = <GiMetalDisc />
      break
    case "Seawall Maintenance":
      icon = <GiBrickWall />
      break
    case "Docks and Pilings":
      icon = <GiWoodBeam />
      break
    default:
      icon = <GiBoatPropeller />
      break
  }

  return icon
}
