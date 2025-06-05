import Image from "next/image";
import { colorFromId } from "@/utils/color";
import type { Photo } from "@/types/photo";

export default async function PhotoModal({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`, {
    next: { revalidate: 60 },
  });
  const photo: Photo = await res.json();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <div className="relative aspect-square w-full">
          <Image
            src={`https://placehold.co/600x600/${colorFromId(photo.id)}/ffffff?text=${photo.title}`}
            alt={photo.title}
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold mt-4">{photo.title}</h2>
        <p className="text-gray-600 mt-2">ID: {photo.id}</p>
        <p className="text-gray-600">Album ID: {photo.albumId}</p>
      </div>
    </div>
  );
}
