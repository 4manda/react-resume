import React from 'react';
import { List } from 'semantic-ui-react';

const Work = ({ work }) => (
  <List>
    { work.map((w) => {
      const dateOptions = { month: 'short', year: 'numeric' };
      const from = new Date(w.startDate).toLocaleDateString(undefined, dateOptions);
      const to = w.endDate ? new Date(w.endDate).toLocaleDateString(undefined, dateOptions) : 'Present';
      return (
        <List.Item key={ w.startDate }>
          <List.Header as="h5">
            { w.position }
            { ',  ' }
            { w.website ? (
              <a href={ w.website }>{ w.company }</a>
            ) : w.company }
          </List.Header>
          <List.Content>
            <p className="text__muted">{ `${from} - ${to}` }</p>
            <p>{ w.summary }</p>
            <List.List as="ul">
              { w.highlights.map((h, idx) => (
                <List.Item key={ idx } as="li" content={ h } />
              )) }
            </List.List>
          </List.Content>
        </List.Item>
      );
    }) }
  </List>
);

export default Work;
