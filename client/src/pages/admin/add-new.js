import React from 'react';
import Head from 'next/head';
import AddNew from '../../screens/admin/AddNew';


const AddNewPage = () => {
  return (
    <>
      <Head>
        {/* <!-- =============== Primary Meta Tags =============== --> */}
        <title>Add New | Monday Morning</title>
        <meta name='title' content='Add New | Monday Morning' />
        <meta
          name='description'
          content='Monday Morning is the official Student Media Body of National Institute Of Technology Rourkela. Monday Morning covers all the events, issues and activities going on inside the campus. Monday Morning also serves as a link between the administration and the students.'
        />
      </Head>
      <AddNew />
    </>
  );
};

export default AddNewPage;