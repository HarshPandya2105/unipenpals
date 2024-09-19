import Image from "next/image"

export default function Testimonials() {
  return (
    <section className="flex flex-col my-[112px] items-center">
      <h2 className="text-5xl font-bold text-center lg:text-left w-full">Customer testimonials</h2>
      <div className="flex flex-col lg:flex-row gap-8 mt-20 w-full items-center lg:items-stretch">
        <div className="flex flex-col gap-8 w-full lg:w-1/3 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                key={index}
                src="/star-svgrepo-com.svg" 
                alt="Star" 
                width={20} 
                height={20} 
              />
            ))}
          </div>
          <h6 className="text-xl font-semibold">
            “Uni Pen Pals is a brilliant chance for a cultural exchange, allowing for my own knowledge and conscious surrounding cultures to improve. Additionally, having a person to provide emotional support to, as well as receive, would is excellent.”
          </h6>
        </div>

        <div className="flex flex-col gap-8 w-full lg:w-1/3 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                key={index} 
                src="/star-svgrepo-com.svg" 
                alt="Star" 
                width={20} 
                height={20} 
              />
            ))}
          </div>
          <h6 className="text-xl font-semibold">
            "It’s a nice way to connect with people you may not get the chance to usually and to exchange cultural and different social experiences."
          </h6>
        </div>

        <div className="flex flex-col gap-8 w-full lg:w-1/3 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                key={index}
                src="/star-svgrepo-com.svg" 
                alt="Star" 
                width={20} 
                height={20} 
              />
            ))}
          </div>
          <h6 className="text-xl font-semibold">
            "Genuinely just helping to make friendships and connect with people that could translate to irl friendships. University isn’t lacking in people wanting more friends, we just lack in opportunities to make those friends."
          </h6>
        </div>
      </div>
    </section>
  )
}