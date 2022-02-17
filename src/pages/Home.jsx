import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home({ dispatch, loading, users, hasErrors }) {
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const setUsers = () => {
    const data = {
      columns: [
        {
          label: 'First Name',
          field: 'first_name',
          sort: 'asc',
        },
        {
          label: 'Last Name',
          field: 'last_name',
          sort: 'asc',
        },
        {
          label: 'Email',
          field: 'email',
          sort: 'asc',
        },
        {
          label: 'Country',
          field: 'country',
          sort: 'asc',
        },
        {
          label: 'Phone Number',
          field: 'phone',
          sort: 'asc',
        },
        {
          label: 'Organization',
          field: 'org_name',
          sort: 'asc',
        },
        {
          label: 'Role',
          field: 'role',
          sort: 'asc',
        },
      ],
      rows: [],
    };
    users.map((User) => {
      data.rows.push({
        id: User._id,
        ...User,
        ...User.profile,
      });
    });
    return data;
  };
  return (
    <div>
      <h2 className='mt-4 mx-10'>List of Users</h2>
      <div className='m-4'>
        <MDBDataTable
          data={setUsers()}
          className='px-3'
          bordered
          striped
          hover
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  users: state.users.users,
  hasErrors: state.users.hasErrors,
});

export default connect(mapStateToProps)(Home);
