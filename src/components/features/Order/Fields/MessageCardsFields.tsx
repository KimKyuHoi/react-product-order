import { Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  messageCardTextMessage: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const MessageCardsFields = ({ messageCardTextMessage, handleInputChange }: Props) => {
  return (
    <Wrapper>
      <TextMessageWrapper>
        <Textarea
          name="messageCardTextMessage"
          value={messageCardTextMessage}
          onChange={handleInputChange}
          placeholder="선물과 함께 보낼 메시지를 적어보세요"
          resize="none"
          height="100"
          variant="filled"
          colorScheme="gray"
        />
      </TextMessageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 14px 30px;
`;

const TextMessageWrapper = styled.div`
  width: 100%;
  padding: 12px 30px 16px;
`;
