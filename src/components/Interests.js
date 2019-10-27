import React from 'react';
import { List, Label } from 'semantic-ui-react';

const Interests = ({ interests }) => (
  <List
    relaxed
    items={ interests.map(i => ({
      key: i.name,
      header: i.name,
      content: (
        <Label.Group size="small">
          { i.keywords.map(k => (
            <Label
              key={ k }
              content={ k }
              className="label__interests"
              basic
            />
          )) }
        </Label.Group>
      ),
    })) }
  />
);

export default Interests;
