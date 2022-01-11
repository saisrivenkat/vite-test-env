import React from 'react';
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

type BannerProps = {
  heroTitle?: boolean;
  title: string;
  image: string;
  description: string;
  buttonText: string;
  buttonPress: () => void;
};

export const BannerContent = ({
  title,
  heroTitle,
  description,
  buttonText,
  buttonPress,
}: Omit<BannerProps, 'image'>) => {
  return (
    <div className="flex flex-col items-center text-center sm:block sm:text-left">
      <h1 className={`font-bold banner-text ${heroTitle ? 'text-6xl' : 'text-4xl'}`}>{title}</h1>
      <p className="">{description}</p>
      <Button type="primary" className="mt-4" size="large" onClick={buttonPress}>
        {buttonText}
        <ArrowRightOutlined />
      </Button>
    </div>
  );
};

const Banner = ({ title, heroTitle, description, buttonText, buttonPress, image }: BannerProps) => {
  return (
    <div className="banner">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-between" className="items-center">
        <Col md={13} sm={24} xs={24} className="md:py-20 py-10">
          <BannerContent
            heroTitle={heroTitle}
            title={title}
            description={description}
            buttonText={buttonText}
            buttonPress={buttonPress}
          />
        </Col>
        <Col md={10} sm={24} xs={24} className="md:py-20 py-10">
          <img src={image} className={`w-full ${heroTitle ? 'max-w-md' : 'max-w-xs'} mx-auto p-4`} />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
