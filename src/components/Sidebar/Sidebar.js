import React from 'react';
import Sidebar from 'react-sidebar';
import Menu from './Menu';
import styles from './Sidebar.module.css'
import Credentials from './Credentials';
import Logo from '../General/Logo';
import Dropdown from '../General/Dropdown';


// FIGURE OUT COLLAPSEABLE SIDEBAR LATER
/*

const mql = window.matchMedia(`(min-width: 800px)`);

class MySidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    const categories = [
      {
        label: 'Data',
        items: [
          { icon: <img src="/iconpeople.svg" alt="Candidates" />, label: 'Candidates', link: '' },
        ],
      },
      {
        label: 'Analysis',
        items: [
          { icon: <img src="/iconarrows.svg" alt="Comparisons" />, label: 'Comparisons', link: '' },
          { icon: <img src="/icon-chat-bubble.svg" alt="AI Chat" />, label: 'AI Chat', link: '' },
        ],
      },
    ];

    return (
    <Sidebar
        sidebar={<Menu categories={categories} />}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
        contentClassName={`${styles.sidebar} ${this.state.sidebarOpen ? styles['sidebar--open'] : ''}`}
        onMouseEnter={() => this.onSetSidebarOpen(true)}
        onMouseLeave={() => this.onSetSidebarOpen(false)}
      >
      </Sidebar>
    );
  }
}

export default MySidebar;
*/

function LeftSidebar() {
  const categories = [
    {
      label: 'data',
      items: [
        { icon: <img src="/iconpeople.svg" alt="Candidates" />, label: 'Candidates', link: '' },
      ],
    },
    {
      label: 'analysis',
      items: [
        { icon: <img src="/iconarrows.svg" alt="Comparisons" />, label: 'Comparisons', link: '' },
        { icon: <img src="/-icon-chat-bubble.svg" alt="AI Chat" />, label: 'AI Chat', link: '' },
      ],
    },
  ];
    return (
      <div className={styles.sideMenuDrawer}>
          <div className={styles.menuTop}>
            <Logo full={true}></Logo>
            <Dropdown options={['ed-sales-02']} iconUrl="/vector.svg"/>
            <Menu categories={categories} />
          </div>
            <Credentials></Credentials>
        </div>
      );
  }

export default LeftSidebar
