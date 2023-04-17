"use client";

import { useState } from "react";
import Image from "next/image";
import useGalleryImages from "../lib/useGalleryImages";
import { MdClose } from "react-icons/md";

type Props = {
    images: string[];
};

export default function PhotoGallery({ images }: Props) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <section className="overflow-hidden max-w-screen-xl px-4 py-4 mx-auto sm:px-6 sm:py-6 lg:px-8">
            <div className="grid grid-cols-3 gap-4">
                {images.length > 0 &&
                    images.map((src: string, index: number) => (
                        <div
                            key={index}
                            className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                        >
                            <Image
                                src={src}
                                alt={`Dreamscapes Pool and Patio Gallery Image - ${src}`}
                                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                                style={{ transform: "translate3d(0, 0, 0)" }}
                                width={720}
                                height={480}
                                sizes="(max-width: 640px) 100vw,
                                        (max-width: 1280px) 50vw,
                                        (max-width: 1536px) 33vw,
                                        25vw"
                                onClick={() => setSelectedImage(src)}
                            />
                        </div>
                    ))}
            </div>
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeLightbox}
                >
                    <div className="relative h-[80%] w-[80%] block">
                        <Image
                            src={selectedImage}
                            alt={`Dreamscapes Pool and Patio Gallery Image - ${selectedImage}`}
                            className="z-60"
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </div>
                    <button
                        className="z-70 absolute inset-x-0 bottom-5 sm:bottom-20 h-8 w-8 mx-auto text-white bg-sky-500 rounded-full hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        onClick={closeLightbox}
                    >
                        <MdClose className="m-auto text-2xl" />
                    </button>
                </div>
            )}
        </section>
    );
}
