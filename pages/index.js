import getPageData from '../utils/api';
import BigImageLayout from '../components/layouts/BigImageLayout';
import LastProjects from '../components/sections/LastProjects';
import JoinUs from '../components/sections/JoinUs';
import { HOME } from '../constants/pagenames';

export const getServerSideProps = async () => {
  const pageData = await getPageData(HOME);

  return {
    props: {
      data: pageData,
      components: pageData.fields.components,
    },
  };
};

export default function Recipes({ components }) {
  const projectSection = components.find((component) => component.sys.contentType.sys.id === 'projectsSection');
  const joinUsSection = components.find((component) => component.sys.contentType.sys.id === 'joinUsSection');

  return (
    <div className="home">
      <LastProjects
        data={projectSection.fields}
      >
        <BigImageLayout
          contentType="rich"
          variation="no-title"
          data={projectSection.fields}
        />
      </LastProjects>

      <JoinUs>
        <BigImageLayout
          contentType="simple"
          variation="blue-background"
          data={joinUsSection.fields}
        />
      </JoinUs>
    </div>
  );
}
