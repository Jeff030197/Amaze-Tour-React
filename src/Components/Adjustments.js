import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <>
      <MDBRow>
        <MDBCol size='3'>
          <MDBTabs pills className='flex-column text-center '>
            <MDBTabsItem className='dsgn'>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                Home
              </MDBTabsLink>
            </MDBTabsItem>
            <br/><br/>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                International
              </MDBTabsLink>
            </MDBTabsItem>
            <br/><br/>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
                Local
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}></MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}></MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </>
  );
}