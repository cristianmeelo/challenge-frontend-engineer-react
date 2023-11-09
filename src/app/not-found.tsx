'use client';

import { Col, Row, Typography } from 'antd';
import Image from 'next/image';

export default function NotFound() {
  const { Title, Paragraph } = Typography;

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', background: 'linear-gradient(202deg, #001529 35%, #1890ff 100%)' }}>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          alt="404 Error Image"
          width={400}
          height={400}
          src="https://imgix.tractian.com/website/pages/404/sensores-tractian-smart-trac-v2.png"
          decoding="async"
          data-nimg="intrinsic"
        />
      </Col>
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={12}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
      >
        <Title style={{ color: '#ffffff' }}>404...</Title>
        <Paragraph style={{ color: '#ffffff' }}>
          Nossos sensores detectaram um downtime inesperado na página acessada. <br />
          Não se preocupe, estamos trabalhando nisso.
        </Paragraph>
      </Col>
    </Row>
  );
}
