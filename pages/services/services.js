import {
  GiBoatPropeller,
  GiBrickWall,
  GiGlassBall,
  GiFallingRocks,
} from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { IoMdBoat } from "react-icons/io";

export const services = [
  {
    name: "Propellers",
    icon: <GiBoatPropeller />,
    href: "/services/propellers",
    photo: "/propeller.jpg",
    description:
      "We provide underwater removal or installtion services of propellers without the need for expensive haul outs.",
  },
  {
    name: "Seawall Maintenance",
    icon: <GiBrickWall />,
    href: "/services/seawall-maintenance",
    photo: "/Seawall-Repair.png",
  },
  {
    name: "Underwater Inspections",
    icon: <IoMdBoat />,
    href: "/services/underwater-inspections",
    photo: "/diver.jpg",
  },
  {
    name: "Bottom Cleaning",
    icon: <MdCleaningServices />,
    href: "/services/bottom-cleaning",
    photo: "/hull_cleaning.jpeg",
  },
  {
    name: "Structural Fiberglass Repairs",
    icon: <GiGlassBall />,
    href: "/services/structural-fiberglass-repairs",
    photo: "/fiberglass-repair.jpeg",
  },
  {
    name: "Dredging and Rock Removal",
    icon: <GiFallingRocks />,
    href: "/services/dredging-and-rock-removal",
    photo: "/underwater-dredging-melbourne-1.jpeg",
  },
];
