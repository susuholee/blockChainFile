import React from 'react';
import styled from 'styled-components';
import Text from '../Atoms/TextLabel/Text';

const Section = styled.div`
  margin-bottom: 20px;
`;

const SidebarItem = ({ items }) => (
  <Section>
    {items.map((item) => (
      <Text>{item}</Text>
    ))}
  </Section>
);

export default SidebarItem;
