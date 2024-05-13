import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/76f2851f-4161-472f-bb4b-095e3fbf475c-h3kxy1.png",
  "https://utfs.io/f/51130fdd-9aa1-44c9-b287-218cb8f80b6a-2w0p1d.256.272322.jpg",
  "https://utfs.io/f/46e0b7f8-ce3b-48f8-ac00-57c018923558-tdvw6m.gif",
  "https://utfs.io/f/569037d7-be8c-4e96-932c-65e05e160822-1b9.gif",
  "https://utfs.io/f/95d7c024-cce2-439e-ad15-4f88dbfb13c7-2hqafx.png",
  "https://utfs.io/f/4d387e40-de9d-4f4a-93b3-b8f216c2fc99-unc979.gif",
  "https://utfs.io/f/1c09688c-413d-438f-9f08-849820049850-6z4b7z.gif",
  "https://utfs.io/f/8b32f3cd-fb64-4170-9665-ae6f335e65d3-pzvbr9.gif",
  "https://utfs.io/f/08408d08-44ed-46de-803b-b6f37b89a0a1-g1bdui.gif",
  "https://utfs.io/f/b2b588bd-6dbf-4a0d-a5fb-212818c06058-d0lhwg.jpg",
];

const mockImages = mockUrls.map((url, i) => ({
  id: i + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((img) => (
          <div key={img.id} className="w-48">
            <img src={img.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
