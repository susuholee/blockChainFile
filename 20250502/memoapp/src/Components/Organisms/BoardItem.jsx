import React, { memo } from 'react';
import RealText from '../../atoms/Text/RealText';
import TextInput from '../../atoms/input/TextInput';
import styled from 'styled-components';

const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 1080px;
  height: 40px;
  margin-bottom: 4px;
  box-sizing: border-box;
`;

const BoardItem = memo(({ post }) => {
  console.log(`Post ${post.id} 렌더링`);

  return (
    <ItemWrap>
      <RealText width="50px" value={post.id} />
      <TextInput width="940px" height="24px" defaultValue={post.content} />
    </ItemWrap>
  );
});

export default BoardItem;
