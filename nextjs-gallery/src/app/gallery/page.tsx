import Image from "next/image";
import { colorFromId } from "@/utils/color";
import Link from "next/link";
import type { Photo } from "@/types/photo";

export default async function GalleryPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=50", {
    next: { revalidate: 60 },
    cache: "force-cache",
  });
  const photos: Photo[] = await res.json();
  return (
    <main className="flex flex-col items-center justify-center min-h-80 p-4">
      <h1 className="text-4xl font-bold text-center sm:text-left">Gallery</h1>
      <p className="text-lg text-gray-700 text-center sm:text-left">Explore our collection of beautiful images.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={`/gallery/${photo.id}`}
            className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={`https://placehold.co/300x300/${colorFromId(photo.id)}/ffffff?text=${photo.title}`}
              alt={photo.title}
              width={150}
              height={150}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
