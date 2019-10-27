import React from 'react';
import { List, Label } from 'semantic-ui-react';

const Skills = ({ skills }) => (
  <List
    relaxed
    items={ skills.map(s => ({
      key: s.name,
      header: s.name,
      content: (
        <Label.Group size="small">
          { s.keywords.map(k => (
            <Label
              key={ k }
              content={ k }
              className="label__skills"
            />
          )) }
        </Label.Group>
      ),
    })) }
  />
);

export default Skills;
