import BigImageLayout from './BigImageLayout';

export default function BigImagesreverse({ contentType, data }) {
  return (
    <>
      <BigImageLayout
        contentType={contentType}
        variation="reverse"
        data={data}
      />
    </>
  );
}
