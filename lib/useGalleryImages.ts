// lib/useGalleryImages.ts
import { useState, useEffect } from "react";

const useGalleryImages = () => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch("/api/gallery");
            const data = await res.json();
            setImages(data.images);
        };

        fetchImages();
    }, []);

    return images;
};

export default useGalleryImages;
