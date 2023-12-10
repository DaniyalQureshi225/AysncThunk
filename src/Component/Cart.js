// YourComponent.js

import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/reducer/dataSlice';
const YourComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const status = useSelector(state => state.data.status);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'failed') {
    return <Text>Error loading data: {data.error}</Text>;
  }

  return (
    <View>
      <Text style={{fontSize: 20}}>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

export default YourComponent;
