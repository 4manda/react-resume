import React from 'react';
import {
  Grid,
  Ref,
  Sticky,
  Segment,
  Icon,
  Divider,
  Item,
} from 'semantic-ui-react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Interests from './Interests';
import resume from './resume.json';
import '../../styles/resume.css';

const structure = [{
  name: 'basics',
  title: 'About',
  component: About,
  icon: 'id card outline',
}, {
  name: 'skills',
  title: 'Technologies',
  component: Skills,
  icon: 'code',
}, {
  name: 'work',
  title: 'Experience',
  component: Work,
  icon: 'building outline',
}, {
  name: 'education',
  title: 'Education',
  component: Education,
  icon: 'graduation',
}, {
  name: 'interests',
  title: 'Interests',
  component: Interests,
  icon: 'heart outline',
}];

class Resume extends React.Component {
  contextRef = React.createRef();

  render() {
    return (
      <Grid id="resume" centered columns={ 2 }>
        <Grid.Column width={ 4 } only="computer tablet">
          <Sticky context={ this.contextRef } offset={ 44 }>
            <Profile content={ resume.basics } />
          </Sticky>
        </Grid.Column>
        <Grid.Column width={ 16 } only='mobile'>
          <Profile content={ resume.basics } mobile contextRef={ this.contextRef } />
        </Grid.Column>
        <Grid.Column computer={ 12 } tablet={ 12 } mobile={ 16 }>
          <Ref innerRef={ this.contextRef }>
            <Segment>
              <Item.Group unstackable>
                { structure.map((part) => {
                  const Content = part.component;
                  const props = { [part.name]: resume[part.name] };
                  return (
                  <Item key={ part.name }>
                    <div className="ui image">
                      <Icon name={ part.icon } size="large" />
                    </div>
                    <Item.Content>
                      <Item.Header>
                        { part.title.toUpperCase() }
                      </Item.Header>
                      <Divider />
                      <Content { ...props } />
                    </Item.Content>
                  </Item>
                  );
                }) }
              </Item.Group>
            </Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    );
  }
} 
             //  <Work work={ resume.work } />
             //  <Skills skills={ resume.skills } />
             //  <Education education={ resume.education } />
             //  <Interests interests={ resume.interests } />

export default Resume;
