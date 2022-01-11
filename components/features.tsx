import React from 'react';
import { Row, Col } from 'antd';

import './feature.css';

type FeatureProps = {
  title: string;
  content: string;
  icon: string;
};

const Feature = ({ title, content, icon }: FeatureProps) => {
  return (
    <Col md={6} sm={12} xs={24} className="text-center">
      <img src={icon} className="block mx-auto mb-4" width={64} height={64} />
      <h2 className=" text-base">{title}</h2>
      <p className=" text-sm">{content}</p>
    </Col>
  );
};

const Features = ({ features }: { features: FeatureProps[] }) => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="my-20">
      {features.map((feature, index) => (
        <Feature key={index} title={feature.title} content={feature.content} icon={feature.icon} />
      ))}
    </Row>
  );
};

export default Features;
