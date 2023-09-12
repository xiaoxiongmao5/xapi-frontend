import { BookFilled, GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '程序媛-小熊出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'GitHub',
          title: 'GitHub',
          href: 'https://github.com/xiaoxiongmao5/xapi',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/xiaoxiongmao5',
          blankTarget: true,
        },
        {
          key: 'blob',
          title: <BookFilled />,
          href: 'https://blog.csdn.net/trinityleo5',
          blankTarget: true,
        },
        {
          key: 'Blob',
          title: 'XAPI',
          href: 'https://github.com/xiaoxiongmao5/xapi-backend',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
