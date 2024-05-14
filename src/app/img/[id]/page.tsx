import FullPageImageView from "~/components/full-image-page";

export default function FullPagePhoto({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  return (
    <div className="h-full">
      <FullPageImageView id={photoId} />
    </div>
  );
}
