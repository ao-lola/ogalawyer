import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
import axios from 'apis/axios';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));


const UserList = () => {
  const classes = useStyles();
  const [data, setData] = useState({ users: [] });
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/users/lists',);
      console.log('result:', result.data);
      setData({users: result.data});
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        {console.log('users view:', data.users)}
        <UsersTable users={data.users} />
      </div>
    </div>
  );
};

export default UserList;
