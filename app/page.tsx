import Image from "next/image";
export default function Home() {
    return (
        <main>
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
                                className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
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

            <section id="about">
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            About Us
                        </h2>
                    </header>
                    <div className="grid md:grid-cols-2">
                        <div>
                            <p className="max-w-md mx-auto mt-4 text-gray-500">
                                Welcome to Dreamscapes Pools and Patios, the
                                premier provider of custom-built outdoor living
                                spaces in Delaware. Our team of expert designers
                                and craftsmen are dedicated to transforming your
                                backyard into a beautiful, functional, and
                                relaxing oasis that you and your family can
                                enjoy for years to come.
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
                            width={500}
                            height={300}
                            alt="About Us Image"
                            className="rounded-lg p-4 hidden md:block"
                        />
                    </div>
                </div>
            </section>
            <section id="services">
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Services
                        </h2>
                    </header>
                    <div className="grid md:grid-cols-2 pt-8 gap-6">
                        <div className="block rounded-xl border border-sky-600 bg-sky-700 p-4 shadow-xl sm:p-6 lg:p-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                                Lorem, ipsum dolor.
                            </h3>

                            <p className="mt-4 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Odio eius labore nisi tempore
                                modi vel voluptate ullam nostrum adipisci
                                suscipit eaque quae cupiditate, accusamus minus
                                laboriosam totam laborum, deserunt sint.
                            </p>
                        </div>
                        <div className="block rounded-xl border border-gray-800 bg-white p-4 shadow-xl sm:p-6 lg:p-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h3 className="mt-3 text-lg font-bold text-gray-700 sm:text-xl">
                                Lorem, ipsum dolor.
                            </h3>

                            <p className="mt-4 text-sm text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Odio eius labore nisi tempore
                                modi vel voluptate ullam nostrum adipisci
                                suscipit eaque quae cupiditate, accusamus minus
                                laboriosam totam laborum, deserunt sint.
                            </p>
                        </div>
                        <div className="block rounded-xl border border-gray-800 bg-white p-4 shadow-xl sm:p-6 lg:p-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h3 className="mt-3 text-lg font-bold text-gray-700 sm:text-xl">
                                Lorem, ipsum dolor.
                            </h3>

                            <p className="mt-4 text-sm text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Odio eius labore nisi tempore
                                modi vel voluptate ullam nostrum adipisci
                                suscipit eaque quae cupiditate, accusamus minus
                                laboriosam totam laborum, deserunt sint.
                            </p>
                        </div>
                        <div className="block rounded-xl border border-gray-800 bg-gray-900 p-4 shadow-xl sm:p-6 lg:p-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                                Lorem, ipsum dolor.
                            </h3>

                            <p className="mt-4 text-sm text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Odio eius labore nisi tempore
                                modi vel voluptate ullam nostrum adipisci
                                suscipit eaque quae cupiditate, accusamus minus
                                laboriosam totam laborum, deserunt sint.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Pools and Patios
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
