import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((img) => (
          <div key={img.id} className="flex w-48 flex-col">
            <img src={img.url} />
            <div>{img.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
