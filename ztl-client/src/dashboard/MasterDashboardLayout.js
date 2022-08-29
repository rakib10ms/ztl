import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardFooter from './Footer';
import DashboardSideMenu from './SideMenu';

const MasterDashboardLayout = ({children}) => {
    return (
        <>
            <div id="wrapper">
                <DashboardSideMenu />
                <div id="content-wrapper" className='d-flex flex-column'>
                    <div id="content">
                        <DashboardHeader />
                        {children}
                    </div>

                </div>

            </div>
         


        </>
    );
};

export default MasterDashboardLayout;

