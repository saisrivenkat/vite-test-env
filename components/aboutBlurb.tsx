import React, { ReactElement } from 'react';

interface Props {
  title: string;
  description: string;
  image: string;
  selected?: boolean;
}

export default function AboutBlurb({ title, description, image, selected }: Props): ReactElement {
  return (
    <li className={`grid grid-flow-col gap-6 mb-6 p-6 rounded-lg items-center ${selected && 'newsletter'}`}>
      <img src={image} width={64} height={64} />
      <div>
        <h3 className=" text-xl font-light m-0">{title}</h3>
        <p className=" m-0">{description}</p>
      </div>
    </li>
  );
}
