import Image from "next/image"
import Link from "next/link"

export default function Card({
  serviceName,
  shortDescription,
  image,
  href,
  icon,
}) {
  // lg:hover:-translate-y-2

  return (
    <Link href={href} className="hover:drop-shadow-lg">
      <div className="w-full transition duration-300 ease-in-out cursor-pointer card card-compact bg-gradient-to-r from-primary to-blue-900 lg:hover:scale-[1.02] lg:active:scale-95 shadow-primary">
        <div className="h-36 md:h-48">
          <div
            className="min-h-full hero"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${image})`,
              width: "100%",
              height: "100%",
            }}
          >
            <div className="transition duration-300 ease-in-out bg-blue-400 bg-opacity-20 hero-overlay"></div>
          </div>
        </div>

        <div className="card-body text-base-100">
          <div className="flex items-center gap-2">
            <span className="text-xl">{icon}</span>
            <h2 className="text-sm card-title lg:text-lg">{serviceName}</h2>
          </div>
          <p className="hidden lg:block">{shortDescription}</p>
        </div>
      </div>
    </Link>
  )
}
