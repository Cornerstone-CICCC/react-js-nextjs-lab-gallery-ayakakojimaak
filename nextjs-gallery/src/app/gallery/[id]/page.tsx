import Image from "next/image";
import { colorFromId } from "@/utils/color";
import type { Photo } from "@/types/photo";

export default async function PhotoPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`, {
    next: { revalidate: 60 },
  });
  const photo: Photo = await res.json();

  return (
    <main className="flex flex-col items-center justify-center min-h-80 p-4">
      <div className="max-w-2xl w-full">
        <div className="relative aspect-square w-full">
          <Image
            src={`https://placehold.co/600x600/${colorFromId(photo.id)}/ffffff?text=${photo.title}`}
            alt={photo.title}
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold mt-4">{photo.title}</h1>
        <p className="text-gray-600 mt-2">ID: {photo.id}</p>
        <p className="text-gray-600">Album ID: {photo.albumId}</p>
      </div>
    </main>
  );
}
