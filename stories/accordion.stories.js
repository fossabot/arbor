import React from 'react';
import { forceReRender, storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';

import {
  AccordionSection,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
  Pane,
  Text
} from '../src';

const stories = storiesOf('Accordion', module);
stories.addDecorator(withKnobs);

let isOpen = false;
const onHeaderClick = () => {
  isOpen = !isOpen;
  forceReRender();
};

const buttonOptions = {
  Small: 'small',
  Medium: 'medium',
  Large: 'large',
  Jumbo: 'jumbo'
};
const defaultButtonSize = 'small';

const trashIcon = <Icon name="trash" />;
const annotationIcon = <Icon name="annotation" />;
const AccordionContainer = Flex.withComponent('div'); // eslint-disable-line arbor/use-create-with-component
AccordionContainer.defaultProps = {
  mt: '100px',
  flexDirection: 'column',
  alignItems: 'center'
};

stories.add('default', () => {
  const sizeSelect = select('Size', buttonOptions, defaultButtonSize);

  const noteWithButtons = (
    <Box my="smallest">
      <Button variant="minimal" size={sizeSelect} iconStart={annotationIcon}>
        Message
      </Button>
      <Button variant="minimal" size={sizeSelect} iconStart={trashIcon} />
    </Box>
  );

  const noteWithPrimaryButtons = (
    <Box my="smallest">
      <Button variant="secondary" size={sizeSelect}>
        Secondary
      </Button>
      <Button variant="primary" size={sizeSelect}>
        Primary
      </Button>
    </Box>
  );

  const noteWithSecondaryButtons = (
    <Box my="smallest">
      <Button variant="minimal" size={sizeSelect}>
        Minimal
      </Button>
      <Button variant="secondary" size={sizeSelect}>
        Secondary
      </Button>
    </Box>
  );

  return (
    <>
      <AccordionContainer>
        <Heading.h2>Accordion</Heading.h2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header 1: Controlled</Box>}
              headerNote="With Note"
              isOpen={boolean('isOpen', isOpen)}
              onHeaderClick={onHeaderClick}
              panelId="header-1-controlled"
            >
              <Pane p="regular">
                <Text mb="regular">
                  You can manually control an accordion by using isOpen and
                  onHeaderClick together.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Pane>
            </AccordionSection>
            <AccordionSection
              header={<Box my="small">Header 2: Uncontrolled </Box>}
              headerNote="Note"
              panelId="header-2-uncontrolled"
            >
              <Pane p="regular">
                <Text mb="regular">
                  If you exclude the isOpen property, the accordion state will
                  be automattically managed internally
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Pane>
            </AccordionSection>
            <AccordionSection
              header={<Box my="small">Header 3: Uncontrolled</Box>}
              panelId="header-3-uncontrolled"
            >
              <Pane p="regular">
                <Text mb="regular">You can exclude the note property</Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Pane>
            </AccordionSection>
          </Card>
        </Flex>
      </AccordionContainer>

      <AccordionContainer>
        <Heading.h2>Accordion with minimal buttons in notes</Heading.h2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header 1: Controlled</Box>}
              headerNote={noteWithButtons}
              isOpen={boolean('isOpen', isOpen)}
              onHeaderClick={onHeaderClick}
              panelId="header-1-controlled"
            >
              <Pane p="regular">
                <Text mb="regular">
                  You can manually control an accordion by using isOpen and
                  onHeaderClick together.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Pane>
            </AccordionSection>
          </Card>
        </Flex>
      </AccordionContainer>

      <AccordionContainer>
        <Heading.h2>Accordion with primary buttons</Heading.h2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header 1: Controlled</Box>}
              headerNote={noteWithPrimaryButtons}
              isOpen={boolean('isOpen', isOpen)}
              onHeaderClick={onHeaderClick}
              panelId="header-1-controlled"
            >
              <Pane p="regular">
                <Text mb="regular">
                  You can manually control an accordion by using isOpen and
                  onHeaderClick together.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Pane>
            </AccordionSection>
          </Card>
        </Flex>
      </AccordionContainer>

      <AccordionContainer>
        <Heading.h2>Accordion with secondary buttons</Heading.h2>

        <Flex justifyContent="center" width="500px">
          <Card>
            <AccordionSection
              header={<Box my="small">Header 1: Controlled</Box>}
              headerNote={noteWithSecondaryButtons}
              isOpen={boolean('isOpen', isOpen)}
              onHeaderClick={onHeaderClick}
              panelId="header-1-controlled"
            >
              <Pane p="regular">
                <Text mb="regular">
                  You can manually control an accordion by using isOpen and
                  onHeaderClick together.
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, an hinc honestatis his, an his
                  tota aperiam intellegebat. Mel delenit delectus et, veniam
                  soleat pericula vix et. Aeque accumsan quo ex, albucius
                  pericula expetendis quo ei. Debitis oporteat at eos, mei justo
                  eruditi periculis te. Sed no mazim liber dicunt, aeque viris
                  animal te quo, ius lorem feugiat veritus id.
                </Text>
              </Pane>
            </AccordionSection>
          </Card>
        </Flex>
      </AccordionContainer>
    </>
  );
});
