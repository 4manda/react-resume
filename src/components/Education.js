import React from 'react';
import { List, Header } from 'semantic-ui-react';

const Edu = ({ education }) => (
  <List
    items={ education.map((e) => {
      const dateOptions = { month: 'short', year: 'numeric' };
      const from = new Date(e.startDate).toLocaleDateString(undefined, dateOptions);
      const to = e.endDate ? new Date(e.endDate).toLocaleDateString(undefined, dateOptions) : 'Present';
      return {
        key: e.startDate,
        header: (
          <Header as="h5">
            { `${e.area}, ${e.studyType}, ` }
            { e.website ? (
              <a href={ e.website }>{ e.institution }</a>
            ) : e.institution }
          </Header>
        ),
        content: (
          <div>
            <p className="text__muted">{ `${from} - ${to}` }</p>
            { !!e.gpa && <p>GPA: { e.gpa }</p> }
          </div>
        ),
      };
    }) }
  />
);

export default Edu;
