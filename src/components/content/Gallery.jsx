export function Gallery({ images, title }) {
  return (
    <div className="gallery-grid" aria-label={title}>
      {images.map((image) => (
        <div
          key={image}
          className="gallery-grid__item"
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
}
