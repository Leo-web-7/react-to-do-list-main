import React from 'react'

import Table from '../components/Table'

import tableData from '../components/DataMaps/DataTable'

const Home = () => {
  return (
    <section>
        <div className='flex justify-center mt-32 mb-32'>
                <Table
                TableHead1={'Date'}
                TableHead2={'Title'}
                TableHead3={'Description'}
                tableData={tableData}
                />
        </div>
    </section>
  )
}

export default Home