import type { DraggableProvided } from "@hello-pangea/dnd";

import { type Card } from "../../common/types/types";
import { CopyButton } from "../primitives/copy-button";
import { DeleteButton } from "../primitives/delete-button";
import { Splitter } from "../primitives/styled/splitter";
import { Text } from "../primitives/text";
import { Title } from "../primitives/title";
import { Container } from "./styled/container";
import { Content } from "./styled/content";
import { Footer } from "./styled/footer";

type Props = {
  card: Card;
  isDragging: boolean;
  provided: DraggableProvided;
};

export const CardItem = ({ card, isDragging, provided }: Props) => {
  return (
    <Container
      className="card-container"
      isDragging={isDragging}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      data-is-dragging={isDragging}
      data-testid={card.id}
      aria-label={card.name}
    >
      <Content>
        <Title onChange={() => {}} title={card.name} fontSize="large" isBold />
        <Text text={card.description} onChange={() => {}} />
        <Footer>
          <DeleteButton onClick={() => {}} />
          <Splitter />
          <CopyButton onClick={() => {}} />
        </Footer>
      </Content>
    </Container>
  );
};
