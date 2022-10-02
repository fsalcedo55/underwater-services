import Image from "next/image"
import Link from "next/link"

export default function Card({
  serviceName,
  shortDescription,
  image,
  href,
  icon,
}) {
  return (
    <Link href={href}>
      <div className="relative w-full transition duration-300 ease-in-out cursor-pointer hover:shadow-lg card bg-base-100 image-full lg:hover:-translate-y-2 active:scale-75">
        <figure>
          <Image
            src={image}
            alt="Miami Underwater Services Seamaster"
            layout="fill"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2">
            {icon}
            <h2 className="card-title">{serviceName}</h2>
          </div>
          <p>{shortDescription}</p>
          {/* <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
        </div>
      </div>
    </Link>
  )
}
