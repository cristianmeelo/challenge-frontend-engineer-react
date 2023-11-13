import { Steps } from 'antd';
import { DotChartOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { getLanguageUseClient } from '@/languages/default-languages-use-client';

export const StepsBasic = ({ params }: { params: { lang: Locale } }) => {
  const dict = getLanguageUseClient(params.lang);

  return (
    <Steps
      current={3}
      items={[
        {
          title: `${dict.home.steps.step_1_title}`,
          description: `${dict.home.steps.step_1_description}`,
          icon: <DotChartOutlined />,
        },
        {
          title: `${dict.home.steps.step_2_title}`,
          description: `${dict.home.steps.step_2_description}`,

          icon: <UserOutlined />,
        },
        {
          title: `${dict.home.steps.step_3_title}`,
          description: `${dict.home.steps.step_3_description}`,

          icon: <SmileOutlined />,
        },
      ]}
    />
  );
};
