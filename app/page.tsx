import Image from "next/image";
import { MdPool, MdDeck } from "react-icons/md";
import { GiBrickWall, GiWaterfall, GiWoodenFence } from "react-icons/gi";
import { FaArchway, FaShower, FaTrashAlt, FaSun } from "react-icons/fa";
export default function Home() {
    const services = [
        {
            title: "New Pool Construction",
            desc: "Transform your backyard into a luxurious oasis with Dreamscapes' new pool construction services. Our experienced team designs and builds custom pools that are tailored to your unique style and preferences, ensuring that you can enjoy the ultimate outdoor living experience.",
            border: "border-sky-500",
            bg: "bg-sky-500",
            text: "text-white",
            icon: <MdPool className="w-10 h-10 text-white" />,
        },
        {
            title: "Paver Patios",
            desc: "Upgrade your outdoor living space with Dreamscapes' paver patio installation services. Our skilled team uses high-quality materials and expert techniques to create beautiful, durable patios that are both functional and stylish.",
            border: "border-sky-600",
            bg: "bg-white",
            text: "text-gray-800",
            icon: <MdDeck className="w-10 h-10" />,
        },

        {
            title: "Retaining Walls",
            desc: "Add structural support and visual appeal to your outdoor space with Dreamscapes' retaining wall services. Our team creates custom retaining walls that are designed to meet your specific needs, whether you need to prevent soil erosion or create an attractive garden feature.",
            border: "border-sky-600",
            bg: "bg-white",
            text: "text-gray-800",
            icon: <GiBrickWall className="w-10 h-10" />,
        },

        {
            title: "Waterfalls",
            desc: "Create a tranquil and serene outdoor space with Dreamscapes' waterfall installation services. Our team designs and installs custom waterfalls that are tailored to your preferences, providing a relaxing and calming atmosphere in your backyard.",
            border: "border-sky-600",
            bg: "bg-sky-500",
            text: "text-white",
            icon: <GiWaterfall className="w-10 h-10 text-white" />,
        },

        {
            title: "Pergolas",
            desc: "Enhance your outdoor living space with a beautiful and functional pergola from Dreamscapes. Our team designs and builds custom pergolas that are tailored to your style and preferences, providing shade, privacy, and a stylish addition to your backyard.",
            border: "border-sky-600",
            bg: "bg-sky-500",
            text: "text-white",
            icon: <FaArchway className="w-10 h-10 text-white" />,
        },

        {
            title: "Fencing",
            desc: "Secure your outdoor space and enhance your privacy with Dreamscapes' fence installation services. Our team creates custom fences that are designed to meet your specific needs, whether you're looking for added security or a stylish accent to your backyard.",
            border: "border-sky-600",
            bg: "bg-white",
            text: "text-gray-800",
            icon: <GiWoodenFence className="w-10 h-10" />,
        },

        {
            title: "Outdoor Shower",
            desc: "Add a touch of luxury to your backyard with Dreamscapes' outdoor shower installation services. Our team creates custom outdoor showers that are both functional and stylish, providing a refreshing and convenient way to cool off after a swim or a workout.",
            border: "border-sky-600",
            bg: "bg-white",
            text: "text-gray-800",
            icon: <FaShower className="w-10 h-10" />,
        },

        {
            title: "Trash Enclosures",
            desc: "Keep your outdoor space neat and tidy with Dreamscapes' trash enclosure installation services. Our team creates custom trash enclosures that are designed to meet your specific needs, providing a stylish and convenient solution for keeping your outdoor space clean.",
            border: "border-sky-600",
            bg: "bg-sky-500",
            text: "text-white",
            icon: <FaTrashAlt className="w-10 h-10 text-white" />,
        },

        {
            title: "Porches / 4 Seasons Rooms",
            desc: "Extend your outdoor living season with Dreamscapes' porch and 4 seasons room installation services. Our team creates custom porches and rooms that are designed to meet your specific needs, providing a comfortable and stylish way to enjoy the outdoors all year round.",
            border: "border-sky-600",
            bg: "bg-sky-500",
            text: "text-white",
            icon: <FaSun className="w-10 h-10 text-white" />,
        },
    ];
    return (
        <main className="">
            <section className="relative  bg-[url('/2022-09-0.JPG')] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Turn Your Backyard
                            <strong className="block font-extrabold text-rose-600">
                                Into a Paradise
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                            Transform Your Outdoor Living Space with Dreamscapes
                            Pools and Patios
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-sky-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get A Quote
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-sky-600 shadow hover:text-sky-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                See Our Work
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="scroll-mt-20">
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 max-h-fit">
                    <div className="grid md:grid-cols-2 h-fit gap-6">
                        <div>
                            <header
                                className="max-w-md mx-auto
                            "
                            >
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                    About Us
                                </h2>
                            </header>
                            <p className="max-w-md mx-auto mt-4 text-gray-500">
                                Welcome to <b>Dreamscapes Pools and Patios</b>,
                                the premier provider of custom-built outdoor
                                living spaces in Delaware. Our team of expert
                                designers and craftsmen are dedicated to
                                transforming your backyard into a beautiful,
                                functional, and relaxing oasis that you and your
                                family can enjoy for years to come.
                            </p>
                            <p className="max-w-md mx-auto mt-4 text-gray-500">
                                At Dreamscapes, we pride ourselves on delivering
                                exceptional quality and service to our
                                customers. We work closely with you to
                                understand your unique vision, and then use our
                                extensive experience and expertise to bring that
                                vision to life. Whether you are looking to build
                                a custom pool, create a stunning patio, or
                                design the perfect outdoor kitchen, we have the
                                skills, tools, and materials to make your dream
                                a reality.
                            </p>
                            <p className="max-w-md mx-auto mt-4 text-gray-500">
                                Our commitment to excellence does&apos;t stop at
                                the completion of your project. We are always
                                available to answer any questions, provide
                                maintenance and repairs, and help you keep your
                                outdoor living space looking and functioning at
                                its best. We take great pride in our work, and
                                we are confident that you will love the results.
                            </p>
                            <p className="max-w-md mx-auto mt-4 text-gray-500">
                                Thank you for considering Dreamscapes Pools and
                                Patios for your outdoor living needs. We look
                                forward to working with you to create the
                                outdoor oasis of your dreams.
                            </p>
                        </div>
                        <Image
                            src="/pexels-karolina-grabowska-4219524.jpg"
                            width={424}
                            height={300}
                            alt="About Us Image"
                            className="rounded-lg p-4 hidden md:block overflow-hidden pt-6"
                        />
                    </div>
                </div>
            </section>
            <hr className="my-12 h-0.5 border-t-0 bg-gray-200 opacity-100 dark:opacity-50" />
            <section id="services" className="scroll-mt-20">
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Services
                        </h2>
                    </header>
                    <div className="grid md:grid-cols-2 pt-8 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`block rounded-xl border ${service.border} ${service.bg} p-4 shadow-xl sm:p-6 lg:p-8`}
                            >
                                {service.icon}

                                <h3
                                    className={`mt-3 text-lg font-bold ${service.text} sm:text-xl`}
                                >
                                    {service.title}
                                </h3>

                                <p className={`mt-4 text-sm ${service.text} `}>
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="gallery" className="scroll-mt-20">
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Gallery
                        </h2>
                    </header>
                    <div className="grid md:grid-cols-2 pt-8 gap-6"></div>
                </div>
                <section className="overflow-hidden text-neutral-700">
                    <div className="container mx-auto px-5  ">
                        <div className="-m-1 flex flex-wrap md:-m-2">
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        width={200}
                                        height={200}
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/813062B5-_1.JPG"
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        width={200}
                                        height={200}
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/IMG_8158.jpg"
                                    />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        width={200}
                                        height={200}
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/IMG_8177.jpg"
                                    />
                                </div>
                            </div>
                            <div className="flex w-1/2 flex-wrap">
                                <div className="w-full p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        width={200}
                                        height={200}
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/Resized_20210825_141212.JPG"
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        width={200}
                                        height={200}
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/Resized_20220503_111547.JPEG"
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        width={200}
                                        height={200}
                                        className="block h-full w-full rounded-lg object-cover object-center"
                                        src="/Resized_20210819_143528.JPEG"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}
