import React from 'react';
import {
  Grid, Header, Image, Icon, Segment, Divider, List,
} from 'semantic-ui-react';

const config = [{
  name: 'location',
  icon: 'map marker alternate',
  content: loc => `${loc.city}, ${loc.region}`,
}, {
  name: 'email',
  icon: 'mail outline',
}, {
  name: 'website',
  icon: 'linkify',
  content: web => <a href={ web }>{ web }</a>,
}]

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      atTop: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    if (e.srcElement.scrollingElement.scrollTop === 0) {
      this.setState({ atTop: true });
    } else {
      this.setState({ atTop: false });
    }
  }

  render() {
    const { content, mobile } = this.props;

    if (mobile) {
      return (
        <Grid centered>
          <Grid.Column
            textAlign="center"
            id="resume__persona_mobile"
            className={ this.state.atTop ? 'scrolled-up' : '' }
          >
            <Header>
              { content.picture ? (
                <Image src={ content.picture } circular />
              ) : <Icon name="user" /> }
              <Header.Content>
                { content.name }
                <Header.Subheader>
                  { content.label }
                </Header.Subheader>
              </Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Row>
            <Grid.Column id="resume__contacts_mobile">
              <Segment basic compact className="centered">
                <List
                  items={ config.map(item => content[item.name] ? ({
                    key: item.name,
                    icon: item.icon,
                    content: item.content ? item.content(content[item.name]) : content[item.name],
                  }) : null) }
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          { !!content.profiles && (
            <Grid.Row style={{ padding: 0 }}>
              <Grid.Column textAlign="center">
                <List
                  horizontal
                  size="large"
                  items={ content.profiles.map(p => ({
                    key: p.network,
                    icon: p.network.toLowerCase(),
                    as: 'a',
                    href: p.url,
                    title: `${content.name} on ${p.network}`,
                  })) }
                />
              </Grid.Column>
            </Grid.Row>
          ) }
        </Grid>
      );
    }

    return (
      <Segment basic>
        { content.picture ? (
          <Image src={ content.picture } size="small" circular centered />
        ) : <Icon name="user" /> }
        <Header textAlign="center">
          { content.name }
          <Header.Subheader content={ content.label } />
        </Header>
        <Divider />
        <List
          items={ config.map(item => content[item.name] ? ({
            key: item.name,
            icon: item.icon,
            content: item.content ? item.content(content[item.name]) : content[item.name],
          }) : null) }
        />
        { !!content.profiles && (
          <List
            horizontal
            size="huge"
            items={ content.profiles.map(p => ({
              key: p.network,
              icon: p.network.toLowerCase(),
              as: 'a',
              href: p.url,
              title: `${content.name} on ${p.network}`,
            })) }
          />
        ) }
      </Segment>
    );
  }
}

export default Profile;
