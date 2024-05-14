import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((img) => (
        <div key={img.id} className="flex h-48 w-48 flex-col">
          <Image
            src={img.url}
            style={{ objectFit: "contain" }}
            width={480}
            height={480}
            alt={img.name}
          ></Image>
          <div>{img.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
