import BigImageLayout from './BigImageLayout';

export default function JoinUs({ fields }) {
  return (
    <article className="join-us">
      <BigImageLayout
        contentType="simple"
        variation="blue-background"
        data={fields}
      />
    </article>
  );
}
