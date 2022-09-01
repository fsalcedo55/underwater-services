import {
  GiBoatPropeller,
  GiBrickWall,
  GiGlassBall,
  GiFallingRocks,
  GiWoodBeam,
} from "react-icons/gi"
import { MdCleaningServices } from "react-icons/md"
import { IoMdBoat } from "react-icons/io"

export const nestedServices = {
  "Boat Maintenance": [
    {
      name: "Propellers",
      paramName: "propellers",
      icon: <GiBoatPropeller />,
      href: "/services/propellers",
      photo: "/propeller.jpg",
      // description:
      //   "We provide underwater removal or installtion services of propellers without the need for expensive haul outs.",
    },

    {
      name: "Underwater Inspections",
      paramName: "underwater-inspections",
      icon: <IoMdBoat />,
      href: "/services/underwater-inspections",
      photo: "/diver.jpg",
    },
    {
      name: "Bottom Cleaning",
      paramName: "bottom-cleaning",
      icon: <MdCleaningServices />,
      href: "/services/bottom-cleaning",
      photo: "/hull_cleaning.jpeg",
    },
    {
      name: "Structural Fiberglass Repairs",
      paramName: "structural-fiberglass-repairs",
      icon: <GiGlassBall />,
      href: "/services/structural-fiberglass-repairs",
      photo: "/fiberglass-repair.jpeg",
    },
  ],
  "Waterfront Maintenance": [
    {
      name: "Seawall Maintenance",
      paramName: "seawall-maintenance",
      icon: <GiBrickWall />,
      href: "/services/seawall-maintenance",
      photo: "/Seawall-Repair.png",
    },
    {
      name: "Deck Maintenance",
      paramName: "deck-maintenance",
      icon: <GiWoodBeam />,
      href: "/services/deck-maintenance",
      photo: "/deck.jpeg",
    },
    {
      name: "Dredging and Rock Removal",
      paramName: "dredging-and-rock-removal",
      icon: <GiFallingRocks />,
      href: "/services/dredging-and-rock-removal",
      photo: "/underwater-dredging-melbourne-1.jpeg",
    },
  ],
}
