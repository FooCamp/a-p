import getPageData from '../utils/api';

export const getServerSideProps = async () => {
  const HOMESLUG = 'inicio';
  const pageData = await getPageData(HOMESLUG);

  return {
    props: {
      data: pageData,
      components: pageData.fields.components,
    },
  };
};

export default function Recipes({ components }) {
  return (
    <div className="home">
      <h1>
        Index page
      </h1>
      {components.map((component) => (
        <p key={component.sys.id}>{typeof component.fields.title === 'string' ? component.fields.title : '' }</p>
      ))}
    </div>
  );
}
